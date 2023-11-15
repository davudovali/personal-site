import styles from './WordRepitor.module.scss'
import Gender, { GENDER_STORAGE_KEY } from './Gender'
import Text from './Text'
import { useState } from 'react'
import Articles from './Articles'
import RepitorController from './RepitorController'

enum ScreenEnum {
    MAIN = 'main',
    GENDER = 'gender',
    TEXT = 'TEXT',
    VERB = 'verb',
    ARTICLES = 'articles',
}
const ScreenClearKeyMap = {
    [ScreenEnum.GENDER]: GENDER_STORAGE_KEY,
    [ScreenEnum.MAIN]: '',
    [ScreenEnum.VERB]: '',
    [ScreenEnum.ARTICLES]: '',
    [ScreenEnum.TEXT]: '',
}
export default function WordsRepitor() {
    const [screen, setScreen] = useState(ScreenEnum.MAIN)
    return (
        <main className={styles.container}>
            <div className={styles.header}>
                {screen !== ScreenEnum.MAIN && (
                    <>
                        <button
                            className={styles.backButton}
                            onClick={() => setScreen(ScreenEnum.MAIN)}
                        >
                            {`<= Back`}
                        </button>
                        <button
                            onClick={() => {
                                const storageControler = new RepitorController(
                                    ScreenClearKeyMap[screen],
                                    []
                                )
                                storageControler.clearStorage()
                            }}
                        >
                            CLEAR
                        </button>
                    </>
                )}
            </div>
            {screen === ScreenEnum.MAIN && (
                <div className={styles.screensButton}>
                    <button onClick={() => setScreen(ScreenEnum.GENDER)}>
                        GENDER
                    </button>
                    <button onClick={() => setScreen(ScreenEnum.TEXT)}>
                        TEXT
                    </button>
                    <button onClick={() => setScreen(ScreenEnum.VERB)}>
                        VERB
                    </button>
                    <button onClick={() => setScreen(ScreenEnum.ARTICLES)}>
                        ARTICLES
                    </button>
                </div>
            )}
            {screen === ScreenEnum.GENDER && <Gender />}
            {screen === ScreenEnum.ARTICLES && <Articles />}
            {screen === ScreenEnum.TEXT && <Text />}
        </main>
    )
}
