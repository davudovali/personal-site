import { WordInfo, WORDS_REPITOR_STORAGE_KEY } from './RepitorTypes'

interface WordsDBInterface {
    list: { [key: number]: WordInfo }
    learned: { [key: number]: WordInfo }
}

const DEFAULT_WORDS_DB: WordsDBInterface = {
    list: {},
    learned: {},
}

const LocalStorageRepitorController = {
    getWordsDB: (): WordsDBInterface => {
        try {
            return (
                JSON.parse(
                    localStorage.getItem(WORDS_REPITOR_STORAGE_KEY) as string
                ) || DEFAULT_WORDS_DB
            )
        } catch (e) {
            return DEFAULT_WORDS_DB
        }
    },

    saveWordsDB: (wordsDB: WordsDBInterface) => {
        localStorage.setItem(WORDS_REPITOR_STORAGE_KEY, JSON.stringify(wordsDB))
    },
}

export default LocalStorageRepitorController
