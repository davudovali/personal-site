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
    getWordsDB: (key: string): WordsDBInterface => {
        try {
            return (
                JSON.parse(
                    localStorage.getItem(
                        WORDS_REPITOR_STORAGE_KEY + key
                    ) as string
                ) || DEFAULT_WORDS_DB
            )
        } catch (e) {
            return DEFAULT_WORDS_DB
        }
    },

    saveWordsDB: (key: string, wordsDB: WordsDBInterface) => {
        localStorage.setItem(
            WORDS_REPITOR_STORAGE_KEY + key,
            JSON.stringify(wordsDB)
        )
    },
    clear: (key: string) => {
        localStorage.removeItem(WORDS_REPITOR_STORAGE_KEY + key)
    },
}

export default LocalStorageRepitorController
