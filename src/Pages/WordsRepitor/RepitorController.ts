import {
    NounWordType,
    REPEAT_STATUS,
    REPEAT_STATUS_NEXT,
    REPEAT_STATUS_PREVIOUS,
    RepeatResultEnum,
    VerbWordType,
    WordInfo,
} from './RepitorTypes'
import LocalStorageRepitorController from './LocalStorageRepitorController'
import dayjs, { ManipulateType } from 'dayjs'

const ADD_TIME_MAP: {
    [key in Exclude<REPEAT_STATUS, REPEAT_STATUS.MONTH>]: {
        type: ManipulateType
        number: number
    }
} = {
    [REPEAT_STATUS.HOUR]: { type: 'hour', number: 1 },
    [REPEAT_STATUS.DAY]: { type: 'day', number: 2 },
    [REPEAT_STATUS.TWO_DAYS]: { type: 'week', number: 1 },
    [REPEAT_STATUS.WEEK]: { type: 'week', number: 2 },
    [REPEAT_STATUS.TWO_WEEKS]: { type: 'month', number: 1 },
}

function shuffleArray<Type>(list: Type[]): Type[] {
    const array = [...list]
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

export default class RepitorController {
    storageKey: string
    list: (NounWordType | VerbWordType)[]
    packSize: number
    constructor(
        storageKey: string,
        list: (NounWordType | VerbWordType)[],
        packSize?: number
    ) {
        this.storageKey = storageKey
        this.list = list
        this.packSize = packSize || 20
    }

    clearStorage = () => {
        LocalStorageRepitorController.clear(this.storageKey)
    }

    currentList: WordInfo[] = []
    word?: WordInfo

    getInitialList = () => {
        const { list, learned } = LocalStorageRepitorController.getWordsDB(
            this.storageKey
        )
        const currentDate = new Date().valueOf()

        let listToLearn: WordInfo[] = Object.values(list).reduce(
            (result, word) => {
                if (word.nextTime && word.nextTime < currentDate)
                    result.push(word)
                return result
            },
            [] as WordInfo[]
        )

        listToLearn.sort((a, b) =>
            a.nextTime && b.nextTime ? a.nextTime - b.nextTime : 1
        )

        listToLearn = listToLearn.slice(0, this.packSize - 1)
        const wordsNumberToAdd = this.packSize - listToLearn.length

        if (wordsNumberToAdd > 0) {
            const startId = this.getTheStartId()
            for (let i = startId + 1; i < startId + 1 + wordsNumberToAdd; i++) {
                const word = this.list[i]
                if (!word) break
                listToLearn.push({
                    info: word,
                    repeatStatus: REPEAT_STATUS.HOUR,
                    id: i,
                })
            }
        }

        this.currentList = shuffleArray(listToLearn)
    }

    getTheStartId = () => {
        const { list, learned } = LocalStorageRepitorController.getWordsDB(
            this.storageKey
        )
        const biggestIdList = Number(Object.keys(list).pop())
        const biggestIdLearned = Number(Object.keys(learned).pop())
        if (!biggestIdLearned && biggestIdList) return biggestIdList
        if (biggestIdLearned && !biggestIdList) return biggestIdLearned
        if (!biggestIdLearned && !biggestIdList) return 0

        return biggestIdList &&
            biggestIdLearned &&
            biggestIdLearned > biggestIdList
            ? biggestIdLearned
            : biggestIdList
    }
    getNextWord = () => {
        this.word = this.currentList.shift()
        return this.word
    }
    handleWordProgress = ({
        word,
        result,
    }: {
        word: WordInfo
        result: RepeatResultEnum
    }) => {
        const wordsDB = LocalStorageRepitorController.getWordsDB(
            this.storageKey
        )
        if (result === RepeatResultEnum.POSITIVE) {
            switch (word.repeatStatus) {
                case REPEAT_STATUS.MONTH:
                    wordsDB.learned[word.id] = word
                    delete wordsDB.list[word.id]
                    break
                default:
                    wordsDB.list[word.id] = word
                    word.nextTime = dayjs()
                        .add(
                            ADD_TIME_MAP[word.repeatStatus].number,
                            ADD_TIME_MAP[word.repeatStatus].type
                        )
                        .toDate()
                        .valueOf()
                    word.repeatStatus = REPEAT_STATUS_NEXT[word.repeatStatus]
                    break
            }
        } else {
            if (word.repeatStatus !== REPEAT_STATUS.HOUR)
                word.repeatStatus = REPEAT_STATUS_PREVIOUS[word.repeatStatus]
            this.currentList.push(word)
            return
        }
        LocalStorageRepitorController.saveWordsDB(this.storageKey, wordsDB)
    }
}
