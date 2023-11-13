import { useEffect, useState } from 'react'
import RepitorController from './RepitorController'
import { ArticleEnum, NounWordType, RepeatResultEnum } from './RepitorTypes'
import styles from './Gender.module.scss'
import classNames from 'classnames'

export const GENDER_STORAGE_KEY = 'gender'
export default function Gender() {
    const [repeatorController] = useState(() => {
        const controller = new RepitorController(GENDER_STORAGE_KEY)
        controller.getInitialList()
        controller.getNextWord()
        return controller
    })

    const [word, setWord] = useState(repeatorController.word)

    const [status, setStatus] = useState<true | false | null>(null)

    const handleResult = (article: ArticleEnum) => {
        if (!word) return
        const info = word.info as NounWordType
        const status = info.article === article
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
                },
                status ? 300 : 2000
            )
        }
    }, [status])

    const article = (word?.info as NounWordType)?.article

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
                            {word.info.text}
                            {word.info.translate}
                        </span>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <button
                            disabled={status !== null}
                            className={classNames(
                                styles.button,
                                article === ArticleEnum.DIE &&
                                    styles.rightAnswer
                            )}
                            onClick={() => handleResult(ArticleEnum.DIE)}
                        >
                            DIE
                        </button>
                        <button
                            disabled={status !== null}
                            className={classNames(
                                styles.button,
                                article === ArticleEnum.DAS &&
                                    styles.rightAnswer
                            )}
                            onClick={() => handleResult(ArticleEnum.DAS)}
                        >
                            DAS
                        </button>
                        <button
                            disabled={status !== null}
                            className={classNames(
                                styles.button,
                                article === ArticleEnum.DER &&
                                    styles.rightAnswer
                            )}
                            onClick={() => handleResult(ArticleEnum.DER)}
                        >
                            DER
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
