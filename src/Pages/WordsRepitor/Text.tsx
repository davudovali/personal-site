import { useEffect, useRef, useState } from 'react'
import RepitorController from './RepitorController'
import { RepeatResultEnum, RepeatType, WordType } from './RepitorTypes'
import styles from './Gender.module.scss'
import classNames from 'classnames'

function getFullText(info: WordType) {
    return info.article ? `${info.article} ${info.text}` : info.text
}

interface TextRepitorInterface {
    storageKey: string
    list: WordType[]
}

export default function Text({ storageKey, list }: TextRepitorInterface) {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [repeatorController] = useState(() => {
        const controller = new RepitorController(storageKey, list, 10)
        controller.getInitialList()
        controller.getNextWord()
        return controller
    })

    const [{ status, word }, setState] = useState<{
        status: null | boolean
        word?: RepeatType
    }>({ status: null, word: repeatorController.word })

    const toTheNextWord = () => {
        setState({
            word: repeatorController.getNextWord(),
            status: null,
        })
        if (inputRef.current) inputRef.current.value = ''
    }

    const handleResult = () => {
        if (status !== null) return toTheNextWord()
        if (!word) return
        const answer = inputRef.current?.value
        const info = word.info
        const correctAnswer = getFullText(info)

        const newStatus = answer?.toLowerCase() === correctAnswer.toLowerCase()
        repeatorController.handleWordProgress({
            word,
            result: newStatus
                ? RepeatResultEnum.POSITIVE
                : RepeatResultEnum.NEGATIVE,
        })
        setState((old) => {
            return { ...old, status: newStatus }
        })
    }

    useEffect(() => {
        if (status === true) {
            setTimeout(toTheNextWord, 1000)
        }
    }, [status])

    useEffect(() => {
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

    if (!word) return null

    const text = status === false ? getFullText(word.info) : word.info.translate

    const isLongText = text.length > 30

    return (
        <div>
            <div
                className={classNames(styles.container, {
                    [styles.correct]: status === true,
                    [styles.incorrect]: status === false,
                })}
            >
                <div
                    className={classNames(
                        styles.wordContainer,
                        isLongText && styles.longText
                    )}
                >
                    <span>{text}</span>
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
        </div>
    )
}
