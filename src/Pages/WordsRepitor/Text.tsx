import { useEffect, useRef, useState } from 'react'
import RepitorController from './RepitorController'
import {
    NounWordType,
    RepeatResultEnum,
    VerbWordType,
    WordGrammarType,
    WordNounInfo,
} from './RepitorTypes'
import styles from './Gender.module.scss'
import { A1Noun } from './Lists/a1Noun'
import classNames from 'classnames'

function getFullText(info: NounWordType | VerbWordType) {
    return info.type === WordGrammarType.NOUN
        ? `${info.article} ${info.text}`
        : info.text
}

export default function Text() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [repeatorController] = useState(() => {
        const controller = new RepitorController('text', A1Noun)
        controller.getInitialList()
        controller.getNextWord()
        return controller
    })

    const [{ status, word }, setState] = useState<{
        status: null | boolean
        word?: WordNounInfo
    }>({ status: null, word: repeatorController.word as WordNounInfo })

    const handleResult = () => {
        if (!word) return
        const answer = inputRef.current?.value
        const info = word.info as NounWordType
        const correctAnswer = getFullText(info)

        const status = answer?.toLowerCase() === correctAnswer.toLowerCase()
        repeatorController.handleWordProgress({
            word,
            result: status
                ? RepeatResultEnum.POSITIVE
                : RepeatResultEnum.NEGATIVE,
        })
        setState((old) => {
            return { ...old, status }
        })
    }

    useEffect(() => {
        if (status === true || status === false) {
            setTimeout(
                () => {
                    setState({
                        word: repeatorController.getNextWord() as WordNounInfo,
                        status: null,
                    })
                    if (inputRef.current) inputRef.current.value = ''
                },
                status ? 1000 : 2000
            )
        }
    }, [status])

    useEffect(() => {
        console.log('sound', status)
        if (word?.info && status !== null) {
            try {
                let text = word.info.text
                if (word.info.article) {
                    text = `${word.info.article} ${word.info.text}`
                }
                const utterance = new SpeechSynthesisUtterance(text)

                utterance.lang = 'de-DE'
                window.speechSynthesis.speak(utterance)
            } catch (e) {
                console.log(e)
            }
        }
    }, [word?.info, status])

    return (
        <div>
            {word && (
                <div
                    className={classNames(styles.container, {
                        [styles.correct]: status === true,
                        [styles.incorrect]: status === false,
                    })}
                >
                    <div className={styles.wordContainer}>
                        <span>
                            {status === false
                                ? getFullText(word.info)
                                : word.info.translate}
                        </span>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <input
                            type="text"
                            onKeyUp={(event) => {
                                if (event.key === 'Enter') handleResult()
                            }}
                            ref={inputRef}
                            style={{ fontSize: 16 }}
                        />
                        <button onClick={handleResult}>OK</button>
                    </div>
                </div>
            )}
        </div>
    )
}
