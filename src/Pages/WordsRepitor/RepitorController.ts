import {
    REPEAT_STATUS,
    REPEAT_STATUS_NEXT,
    REPEAT_STATUS_PREVIOUS,
    RepeatResultEnum,
    WordInfo,
} from './RepitorTypes'
import LocalStorageRepitorController from './LocalStorageRepitorController'
import dayjs, { ManipulateType } from 'dayjs'
import { WordList } from './wordList'

const ADD_TIME_MAP: {
    [key in Exclude<REPEAT_STATUS, REPEAT_STATUS.MONTH>]: {
        type: ManipulateType
        number: number
    }
} = {
    [REPEAT_STATUS.HOUR]: { type: 'day', number: 1 },
    [REPEAT_STATUS.DAY]: { type: 'day', number: 2 },
    [REPEAT_STATUS.TWO_DAYS]: { type: 'week', number: 1 },
    [REPEAT_STATUS.WEEK]: { type: 'week', number: 2 },
    [REPEAT_STATUS.TWO_WEEKS]: { type: 'month', number: 1 },
}

export default class RepitorController {
    currentList: WordInfo[] = []
    word?: WordInfo

    getInitialList = () => {
        const { list, learned } = LocalStorageRepitorController.getWordsDB()
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

        listToLearn = listToLearn.slice(0, 19)
        const wordsNumberToAdd = 20 - listToLearn.length

        if (wordsNumberToAdd > 0) {
            const startId = this.getTheStartId()
            for (let i = startId + 1; i < startId + 1 + wordsNumberToAdd; i++) {
                const word = WordList[i]
                if (!word) break
                listToLearn.push({
                    info: word,
                    repeatStatus: REPEAT_STATUS.HOUR,
                    id: i,
                })
            }
        }

        this.currentList = listToLearn
    }

    getTheStartId = () => {
        const { list, learned } = LocalStorageRepitorController.getWordsDB()
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
        const wordsDB = LocalStorageRepitorController.getWordsDB()
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
        LocalStorageRepitorController.saveWordsDB(wordsDB)
    }
}
