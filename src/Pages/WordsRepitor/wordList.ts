import {
    ArticleEnum,
    LevelEnum,
    NounWordType,
    WordGrammarType,
    WordInfo,
} from './RepitorTypes'

type WordListType = { [key: number]: NounWordType }
export const WordList: WordListType = {
    1: {
        text: 'Milch',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'milk',
    },
    2: {
        text: 'Kaffee',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'coffee',
    },
    3: {
        text: 'Tee',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'tea',
    },
    4: {
        text: 'Wein',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'wine',
    },
    5: {
        text: 'Brot',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'bread',
    },
    6: {
        text: 'Wasser',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'water',
    },
    7: {
        text: 'Bier',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'bear',
    },
    8: {
        text: 'Vater',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'father',
    },
    9: {
        text: 'Mutter',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'mother',
    },
    10: {
        text: 'Schwester',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'sister',
    },
    11: {
        text: 'Bruder',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'brother',
    },
    12: {
        text: 'Mann',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'husband',
    },
    13: {
        text: 'Frau',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'wife',
    },
    14: {
        text: 'Sohn',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'son',
    },
    15: {
        text: 'Tochter',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'daughter',
    },
    16: {
        text: 'Junge',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'boy',
    },
    17: {
        text: 'Hund',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'dog',
    },
    18: {
        text: 'Elefant',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'elefant',
    },
    19: {
        text: 'Katze',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'cat',
    },
    20: {
        text: 'Maus',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'mause',
    },
    21: {
        text: 'Eule',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'owl',
    },
    22: {
        text: 'Bär',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'bear',
    },
    23: {
        text: 'Käse',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'cheese',
    },
    24: {
        text: 'Salat',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'salat',
    },
    25: {
        text: 'Pizza',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'pizza',
    },
    26: {
        text: 'Sandwich',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'sandwich',
    },
    27: {
        text: 'Ei',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'egg',
    },
    28: {
        text: 'Mineralwasser',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'mineral water',
    },
    29: {
        text: 'Speisekarte',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'menu',
    },
    30: {
        text: 'Kellner',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'waiter',
    },
    31: {
        text: 'Salz',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'salt',
    },
    32: {
        text: 'Restaurant',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'restaurant',
    },
    33: {
        text: 'Wurst',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'sausage',
    },
    34: {
        text: 'Essen',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'food',
    },
    35: {
        text: 'Rechnung',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'invoice',
    },
    36: {
        text: 'Schnitzel',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'schnitzel',
    },
    37: {
        text: 'Kanada',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'Canada',
    },
    38: {
        text: 'Deutschland',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'Germany',
    },
    39: {
        text: 'Amerika',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'America',
    },
    40: {
        text: 'Österreich',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'Austria',
    },
    41: {
        text: 'Wien',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'Vienna',
    },
    42: {
        text: 'Stadt',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'city',
    },
    43: {
        text: 'München',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'Munich',
    },
    44: {
        text: 'Frankreich',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'France',
    },
    45: {
        text: 'Schauspielerin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'actress',
    },
    46: {
        text: 'Schauspieler',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'actor',
    },
    47: {
        text: 'Kellnerin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'waitress',
    },
    48: {
        text: 'Professor',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'professor',
    },
    49: {
        text: 'Professorin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'professor (f)',
    },
    50: {
        text: 'Beruf',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'profession',
    },
    51: {
        text: 'Freundin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'girlfriend',
    },
    52: {
        text: 'Student',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'college student',
    },
    53: {
        text: 'Ärztin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'doctor (f)',
    },
    54: {
        text: 'Lehrer',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'teacher',
    },
    55: {
        text: 'Arbeit',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'work',
    },
    56: {
        text: 'Lehrerin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'teacher (f)',
    },
    57: {
        text: 'Schach',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'chess',
    },
    58: {
        text: 'Klavier',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'piano',
    },
    59: {
        text: 'Taxistand',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'taxi stand',
    },
    60: {
        text: 'Park',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'park',
    },
    61: {
        text: 'Markt',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'market',
    },
    62: {
        text: 'Bahnhof',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'railroad station',
    },
    63: {
        text: 'Bibliothek',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'library',
    },
    64: {
        text: 'Apotheke',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'drug store',
    },
    65: {
        text: 'Kirche',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'church',
    },
    66: {
        text: 'Café',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'coffee shop',
    },
    67: {
        text: 'Hotel',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'hotel',
    },
    68: {
        text: 'Museum',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'museum',
    },
    69: {
        text: 'Supermarkt',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'super market',
    },
    70: {
        text: 'Bäckerei',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'bakery',
    },
    71: {
        text: 'Kino',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'cinema',
    },
    72: {
        text: 'Universität',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'university',
    },
    73: {
        text: 'Geldautomat',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'ATM',
    },
    74: {
        text: 'U-Bahn-Station',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'subway',
    },
    75: {
        text: 'Kanzlerin',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DIE,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'chancellor',
    },
    76: {
        text: 'Englisch',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'englisch',
    },
    77: {
        text: 'Deutsch',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DAS,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'german',
    },
    78: {
        text: 'Schüler',
        type: WordGrammarType.NOUN,
        article: ArticleEnum.DER,
        level: LevelEnum.A1_DUOLINGO,
        translate: 'pupil',
    },
}
