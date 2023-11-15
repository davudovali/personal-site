import { useCallback, useEffect, useState } from 'react'
import RepitorController from './RepitorController'
import { ArticleEnum, RepeatResultEnum, WordNounInfo } from './RepitorTypes'
import styles from './Gender.module.scss'
import classNames from 'classnames'
import { A1GenderRules } from './Lists/a1GenderRules'

export const GENDER_STORAGE_KEY = 'gender'
export default function Gender() {
    const [repeatorController] = useState(() => {
        const controller = new RepitorController(
            GENDER_STORAGE_KEY,
            A1GenderRules,
            200
        )
        controller.getInitialList()
        controller.getNextWord()
        return controller
    })

    const [{ status, word, flip }, setState] = useState<{
        status: null | boolean
        flip: boolean
        word?: WordNounInfo
    }>({
        status: null,
        word: repeatorController.word as WordNounInfo,
        flip: false,
    })

    const handleFlip = useCallback(() => {
        setState((old) => ({ ...old, flip: !old.flip }))
    }, [])

    const handleResult = (article: ArticleEnum) => {
        if (!word) return
        const info = word.info
        const status = info.article === article
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
                        flip: false,
                    })
                },
                status ? 1000 : 2000
            )
        }
    }, [status])

    const article = word?.info.article

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
                        <div onClick={handleFlip}>
                            {!flip && <span>{word.info.text}</span>}
                            {flip && (
                                <span className={styles.translation}>
                                    {word.info.translate}
                                </span>
                            )}
                        </div>
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
