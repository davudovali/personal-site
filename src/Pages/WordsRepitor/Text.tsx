import { useEffect, useRef, useState } from 'react'
import RepitorController from './RepitorController'
import {
    NounWordType,
    RepeatResultEnum,
    VerbWordType,
    WordGrammarType,
} from './RepitorTypes'
import styles from './Gender.module.scss'
import classNames from 'classnames'

function getFullText(info: NounWordType | VerbWordType) {
    return info.type === WordGrammarType.NOUN
        ? `${info.article} ${info.text}`
        : info.text
}

export default function Text() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [repeatorController] = useState(() => {
        const controller = new RepitorController('text')
        controller.getInitialList()
        controller.getNextWord()
        return controller
    })

    const [word, setWord] = useState(repeatorController.word)

    const [status, setStatus] = useState<true | false | null>(null)

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
        setStatus(status)
    }

    useEffect(() => {
        if (status === true || status === false) {
            setTimeout(
                () => {
                    setWord(repeatorController.getNextWord())
                    setStatus(null)
                    if (inputRef.current) inputRef.current.value = ''
                },
                status ? 300 : 2000
            )
        }
    }, [status])

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
                        <input type="text" ref={inputRef} />
                        <button onClick={handleResult}>OK</button>
                    </div>
                </div>
            )}
        </div>
    )
}
