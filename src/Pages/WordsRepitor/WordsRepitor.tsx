import styles from './WordRepitor.module.scss'
import Gender from './Gender'
import Text from './Text'
import { useState } from 'react'

enum ScreenEnum {
    MAIN = 'main',
    GENDER = 'gender',
    TEXT = 'TEXT',
    VERB = 'verb',
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
                </div>
            )}
            {screen === ScreenEnum.GENDER && <Gender />}
            {screen === ScreenEnum.TEXT && <Text />}
        </main>
    )
}
