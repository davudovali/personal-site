import styles from './WordRepitor.module.scss'
import Gender from './Gender'
import Text from './Text'
import { useState } from 'react'
import Articles from './Articles'

enum ScreenEnum {
    MAIN = 'main',
    GENDER = 'gender',
    TEXT = 'TEXT',
    VERB = 'verb',
    ARTICLES = 'articles',
}
export default function WordsRepitor() {
    const [screen, setScreen] = useState(ScreenEnum.MAIN)
    return (
        <main className={styles.container}>
            <div>
                {screen !== ScreenEnum.MAIN && (
                    <button
                        className={styles.backButton}
                        onClick={() => setScreen(ScreenEnum.MAIN)}
                    >
                        {`<= Back`}
                    </button>
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
