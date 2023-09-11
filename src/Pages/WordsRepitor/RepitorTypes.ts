export const WORDS_REPITOR_STORAGE_KEY = 'wordsRepitorMap'
export enum RepeatResultEnum {
    POSITIVE = 'positive',
    NEGATIVE = 'negative',
}

export enum REPEAT_STATUS {
    HOUR = 'hour',
    DAY = 'day',
    TWO_DAYS = 'two_days',
    WEEK = 'week',
    TWO_WEEKS = 'two_weeks',
    MONTH = 'month',
}

export const REPEAT_STATUS_NEXT = {
    [REPEAT_STATUS.HOUR]: REPEAT_STATUS.DAY,
    [REPEAT_STATUS.DAY]: REPEAT_STATUS.TWO_DAYS,
    [REPEAT_STATUS.TWO_DAYS]: REPEAT_STATUS.WEEK,
    [REPEAT_STATUS.WEEK]: REPEAT_STATUS.TWO_WEEKS,
    [REPEAT_STATUS.TWO_WEEKS]: REPEAT_STATUS.MONTH,
}
export const REPEAT_STATUS_PREVIOUS = {
    [REPEAT_STATUS.HOUR]: REPEAT_STATUS.HOUR,
    [REPEAT_STATUS.DAY]: REPEAT_STATUS.HOUR,
    [REPEAT_STATUS.TWO_DAYS]: REPEAT_STATUS.DAY,
    [REPEAT_STATUS.WEEK]: REPEAT_STATUS.TWO_DAYS,
    [REPEAT_STATUS.TWO_WEEKS]: REPEAT_STATUS.WEEK,
    [REPEAT_STATUS.MONTH]: REPEAT_STATUS.TWO_WEEKS,
}

export enum LevelEnum {
    A1_DUOLINGO = 'a1_duolingo',
}

export enum ArticleEnum {
    DER = 'der',
    DIE = 'die',
    DAS = 'das',
}

export enum WordGrammarType {
    VERB = 'verb',
    NOUN = 'noun',
}

export type NounWordType = {
    text: string
    article: ArticleEnum
    type: WordGrammarType.NOUN
    level: LevelEnum
    translate: string
}

type VerbWordType = {
    text: string
    type: WordGrammarType.VERB
    level: LevelEnum
    translate: string
}

export type WordInfo = {
    id: number
    repeatStatus: REPEAT_STATUS
    info: NounWordType | VerbWordType
    nextTime?: number
}
