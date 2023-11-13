import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Gender.module.scss'
import { ArticleEnum } from './RepitorTypes'

enum PRONOUN_ENUM {
    ICH = 'ich',
    DU = 'du',
    ER = 'er',
    SIE_SHE = 'sie',
    ES = 'es',
    WIR = 'wir',
    IHR = 'ihr',
    SIE_THEY = 'sie',
    SIE_YOU = 'Sie',
}

enum CONJUCTION_ENUM {
    NOMINATIVE = 'nominative',
    ACCUSATIVE = 'accusative',
    GENITVE = 'genitive',
    DATIVE = 'dative',
}

enum GENDER_ENUM {
    FEMALE = 'female',
    MALE = 'male',
    NEUTRAL = 'neutral',
}

const PRONOUNS_MAP = {
    [CONJUCTION_ENUM.NOMINATIVE]: {
        [PRONOUN_ENUM.ICH]: { translation: 'I', text: 'ich' },
        [PRONOUN_ENUM.DU]: { translation: 'you', text: 'du' },
        [PRONOUN_ENUM.ER]: { translation: 'he', text: 'er' },
        [PRONOUN_ENUM.SIE_SHE]: { translation: 'she', text: 'sie' },
        [PRONOUN_ENUM.ES]: { translation: 'it', text: 'es' },
        [PRONOUN_ENUM.WIR]: { translation: 'we', text: 'wir' },
        [PRONOUN_ENUM.IHR]: { translation: 'you(plural)', text: 'ihr' },
        [PRONOUN_ENUM.SIE_THEY]: { translation: 'they', text: 'sie' },
        [PRONOUN_ENUM.SIE_YOU]: {
            translation: 'you(formal)',
            text: 'Sie',
        },
    },
    [CONJUCTION_ENUM.ACCUSATIVE]: {
        [PRONOUN_ENUM.ICH]: { translation: 'me', text: 'mich' },
        [PRONOUN_ENUM.DU]: { translation: 'you', text: 'dich' },
        [PRONOUN_ENUM.ER]: { translation: 'him', text: 'ihn' },
        [PRONOUN_ENUM.SIE_SHE]: { translation: 'her', text: 'sie' },
        [PRONOUN_ENUM.ES]: { translation: 'it', text: 'es' },
        [PRONOUN_ENUM.WIR]: { translation: 'us', text: 'uns' },
        [PRONOUN_ENUM.IHR]: { translation: 'you(plural)', text: 'euch' },
        [PRONOUN_ENUM.SIE_THEY]: { translation: 'them', text: 'sie' },
        [PRONOUN_ENUM.SIE_YOU]: {
            translation: 'you(formal)',
            text: 'Sie',
        },
    },
    [CONJUCTION_ENUM.GENITVE]: {
        [PRONOUN_ENUM.ICH]: {
            translation: 'my, mine',
            [GENDER_ENUM.MALE]: 'meiner',
            [GENDER_ENUM.FEMALE]: 'meine',
            [GENDER_ENUM.NEUTRAL]: 'meins',
        },
        [PRONOUN_ENUM.DU]: {
            translation: 'your, yours',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.ER]: {
            translation: 'his',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.SIE_SHE]: {
            translation: 'her, hers',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.ES]: {
            translation: 'its',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.WIR]: {
            translation: 'our, ours',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.IHR]: {
            translation: 'your, yours (plural)',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.SIE_THEY]: {
            translation: 'their/theirs',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
        [PRONOUN_ENUM.SIE_YOU]: {
            translation: 'your/yours(formal)',
            [GENDER_ENUM.MALE]: '',
            [GENDER_ENUM.FEMALE]: '',
            [GENDER_ENUM.NEUTRAL]: '',
        },
    },
    [CONJUCTION_ENUM.DATIVE]: {
        [PRONOUN_ENUM.ICH]: { translation: 'me', text: 'mir' },
        [PRONOUN_ENUM.DU]: { translation: 'you', text: 'dir' },
        [PRONOUN_ENUM.ER]: { translation: 'him', text: 'ihm' },
        [PRONOUN_ENUM.SIE_SHE]: { translation: 'her', text: 'ihr' },
        [PRONOUN_ENUM.ES]: { translation: 'it', text: 'ihm' },
        [PRONOUN_ENUM.WIR]: { translation: 'us', text: 'uns' },
        [PRONOUN_ENUM.IHR]: { translation: 'you(plural)', text: 'euch' },
        [PRONOUN_ENUM.SIE_THEY]: { translation: 'them', text: 'ihnen' },
        [PRONOUN_ENUM.SIE_YOU]: {
            translation: 'you(formal)',
            text: 'Ihnen',
        },
    },
}

export default function Articles() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [status, setStatus] = useState<true | false | null>(null)
    const handleResult = () => {
        const answer = inputRef.current?.value
        console.log(17, status)
        setStatus(status)
    }

    useEffect(() => {
        if (status === true || status === false) {
            setTimeout(
                () => {
                    setStatus(null)
                    if (inputRef.current) inputRef.current.value = ''
                },
                status ? 300 : 2000
            )
        }
    }, [status])

    return (
        <div>
            <div
                className={classNames(styles.container, {
                    [styles.correct]: status === true,
                    [styles.incorrect]: status === false,
                })}
            >
                <div className={styles.wordContainer}>
                    <span></span>
                </div>
                <div className={styles.buttonsContainer}>
                    <input
                        type="text"
                        ref={inputRef}
                        onKeyUp={(event) => {
                            if (event.key === 'Enter') handleResult()
                        }}
                    />
                    <button onClick={handleResult}>OK</button>
                </div>
            </div>
        </div>
    )
}
