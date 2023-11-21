import styles from './WordRepitor.module.scss'
import Gender from './Gender'
import Text from './Text'
import { useState } from 'react'
import RepitorController from './RepitorController'

import A1Noun from './Lists/A1Noun.json'
import A1Additions from './Lists/A1additions.json'
import A1Verbs from './Lists/A1verbs.json'
import Phrases from './Lists/Phrases.json'
import { WordType } from './RepitorTypes'
enum ScreenEnum {
    MAIN = 'main',
    GENDER = 'gender',
    TEXT = 'TEXT',
    PHRASES = 'PHRASES',
    VERB = 'verb',
    ADDITIONS = 'additions',
}
const ScreenClearKeyMap = {
    [ScreenEnum.GENDER]: A1Noun.prefix,
    [ScreenEnum.MAIN]: '',
    [ScreenEnum.VERB]: A1Verbs.prefix,
    [ScreenEnum.TEXT]: A1Noun.prefix,
    [ScreenEnum.PHRASES]: Phrases.prefix,
    [ScreenEnum.ADDITIONS]: A1Additions.prefix,
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
                        NOUN
                    </button>
                    <button onClick={() => setScreen(ScreenEnum.ADDITIONS)}>
                        ADDITIONS
                    </button>
                    <button onClick={() => setScreen(ScreenEnum.PHRASES)}>
                        PHRASES
                    </button>
                    <button onClick={() => setScreen(ScreenEnum.VERB)}>
                        VERB
                    </button>
                </div>
            )}
            {screen === ScreenEnum.GENDER && <Gender />}
            {screen === ScreenEnum.ADDITIONS && (
                <Text
                    list={A1Additions.list as unknown as WordType[]}
                    storageKey={A1Additions.prefix}
                />
            )}
            {screen === ScreenEnum.TEXT && (
                <Text
                    list={A1Noun.list as unknown as WordType[]}
                    storageKey={A1Noun.prefix}
                />
            )}
            {screen === ScreenEnum.PHRASES && (
                <Text
                    list={Phrases.list as unknown as WordType[]}
                    storageKey={Phrases.prefix}
                />
            )}
            {screen === ScreenEnum.VERB && (
                <Text
                    list={A1Verbs.list as unknown as WordType[]}
                    storageKey={A1Verbs.prefix}
                />
            )}
        </main>
    )
}
