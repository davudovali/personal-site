fs = require('fs')

const { indicators } = require('./indicators')
const got = require('got')

const coutriesCodes = [
    'sr',
    'sk',
    'si',
    'se',
    'sz',
    'sx',
    'a4',
    'sc',
    'sy',
    'tc',
    'td',
    't4',
    't7',
    'tg',
    'th',
    'tj',
    'tm',
    't2',
    'tl',
    't3',
    'to',
    't5',
    't6',
    'tt',
    'tn',
    'tr',
    'tv',
    'tw',
    'tz',
    'ug',
    'ua',
    'xt',
    'uy',
    'us',
    'uz',
    'vc',
    've',
    'vg',
    'vi',
    'vn',
    'vu',
    '1w',
    'ws',
    'xk',
    'a5',
    'ye',
    'za',
    'zm',
    'zw',
    'ne',
    'ng',
    'ni',
    'nl',
    'no',
    'np',
    '6x',
    'nr',
    '6n',
    'nz',
    'oe',
    'om',
    's4',
    'pk',
    'pa',
    'pe',
    'ph',
    'pw',
    'pg',
    'pl',
    'v1',
    'pr',
    'kp',
    'pt',
    'py',
    'ps',
    's2',
    'v4',
    'pf',
    'qa',
    'ro',
    'r6',
    'ru',
    'rw',
    '8s',
    'sa',
    'sd',
    'sn',
    'sg',
    'sb',
    'sl',
    'sv',
    'sm',
    'so',
    'rs',
    'zf',
    'ss',
    'zg',
    's1',
    'st',
    'kn',
    'kr',
    'kw',
    'xj',
    'la',
    'lb',
    'lr',
    'ly',
    'lc',
    'zj',
    'xl',
    'xm',
    'li',
    'lk',
    'xn',
    'xo',
    'ls',
    'v3',
    'lt',
    'lu',
    'lv',
    'mo',
    'mf',
    'ma',
    'mc',
    'md',
    'm1',
    'mg',
    'mv',
    'zq',
    'mx',
    'mh',
    'xp',
    'mk',
    'ml',
    'mt',
    'mm',
    'xq',
    'me',
    'mn',
    'mp',
    'mz',
    'mr',
    'mu',
    'mw',
    'my',
    'xu',
    'm2',
    'na',
    'nc',
    'fr',
    'fo',
    'fm',
    '6f',
    'ga',
    'gb',
    'ge',
    'gh',
    'gi',
    'gn',
    'gm',
    'gw',
    'gq',
    'gr',
    'gd',
    'gl',
    'gt',
    'gu',
    'gy',
    'xd',
    'hk',
    'hn',
    'xe',
    'hr',
    'ht',
    'hu',
    'zb',
    'xf',
    'zt',
    'xg',
    'xh',
    'id',
    'xi',
    'im',
    'in',
    'xy',
    'ie',
    'ir',
    'iq',
    'is',
    'il',
    'it',
    'jm',
    'jo',
    'jp',
    'kz',
    'ke',
    'kg',
    'kh',
    'ki',
    'cn',
    'ci',
    'c6',
    'c7',
    'cm',
    'cd',
    'cg',
    'co',
    'km',
    'cv',
    'cr',
    'c8',
    's3',
    'cu',
    'cw',
    'ky',
    'cy',
    'cz',
    'd4',
    'd7',
    'de',
    'd8',
    'dj',
    'd2',
    'dm',
    'd3',
    'd9',
    'dk',
    'n6',
    'do',
    'd5',
    'f6',
    'd6',
    'dz',
    '4e',
    'v2',
    'z4',
    '7e',
    'z7',
    'ec',
    'eg',
    'xc',
    'er',
    'es',
    'ee',
    'et',
    'eu',
    'f1',
    'fi',
    'fj',
    'aw',
    'zh',
    'af',
    'a9',
    'zi',
    'ao',
    'al',
    'ad',
    '1a',
    'ae',
    'ar',
    'am',
    'as',
    'ag',
    'au',
    'at',
    'az',
    'bi',
    'b4',
    'b7',
    'be',
    'bj',
    'bf',
    'bd',
    'bg',
    'b1',
    'bh',
    'bs',
    'ba',
    'b2',
    'by',
    'bz',
    'b3',
    'bm',
    'bo',
    'br',
    'bb',
    'bn',
    'b6',
    'bt',
    'bw',
    'c9',
    'cf',
    'ca',
    'c4',
    'b8',
    'c5',
    'ch',
    'jg',
    'cl',
]

const DOMAIN = 'https://api.worldbank.org/v2'

let INDICATOR_SHORT_ID_ID_MAP = []
let INDICATOR_SHORT_ID_NAME_MAP = []
let INDICATOR_NAME_SHORT_ID_MAP = {}
let TOPICS_MAP = {}
let NAME_SEARCH = {}

const linkWords = [
    'about',
    'above',
    'according',
    'already',
    'also',
    'and',
    'any',
    'all',
    'the',
    'for',
    'with',
    'per',
    'than',
]

let counter = 0
indicators.map(({ id, name: rawName, sourceNote: description, topics }) => {
    const shortId = counter
    INDICATOR_SHORT_ID_ID_MAP[shortId] = id
    counter++
    const name = rawName.replace(/"/g, '`')

    INDICATOR_SHORT_ID_NAME_MAP[shortId] = name

    if (INDICATOR_NAME_SHORT_ID_MAP[name]) {
        INDICATOR_NAME_SHORT_ID_MAP[name] =
            typeof INDICATOR_NAME_SHORT_ID_MAP[name] === 'number'
                ? [INDICATOR_NAME_SHORT_ID_MAP[name], shortId]
                : [...INDICATOR_NAME_SHORT_ID_MAP[name], shortId]
    } else {
        INDICATOR_NAME_SHORT_ID_MAP[name] = shortId
    }

    topics.forEach((topic) => {
        const topicName = topic.value?.trim()
        if (!topicName) return
        if (TOPICS_MAP[topicName]) {
            TOPICS_MAP[topicName].push(shortId)
        } else {
            TOPICS_MAP[topicName] = [shortId]
        }
    })

    const nameParts = name.split(' ')
    nameParts.forEach((rawPart) => {
        const part = rawPart.toLowerCase().replace(/\W/g, '').replace(/\d/g, '')
        if (part.length < 3 || linkWords.includes(part)) return
        if (!NAME_SEARCH[part]) {
            NAME_SEARCH[part] = [shortId]
        } else if (!NAME_SEARCH[part].includes(shortId)) {
            NAME_SEARCH[part].push(shortId)
        }
    })
})

fs.writeFileSync(
    'maps/indicatorIdNameMap.ts',
    'export const INDICATOR_SHORT_ID_NAME_MAP =' +
        JSON.stringify(INDICATOR_SHORT_ID_NAME_MAP)
)
fs.writeFileSync(
    'maps/indicatorNameIdMap.ts',
    'export const INDICATOR_NAME_SHORT_ID_MAP = ' +
        JSON.stringify(INDICATOR_NAME_SHORT_ID_MAP)
)
fs.writeFileSync(
    'maps/indicatorShortIdIdMap.ts',
    'export const INDICATOR_SHORT_ID_ID_MAP = ' +
        JSON.stringify(INDICATOR_SHORT_ID_ID_MAP)
)
fs.writeFileSync(
    'maps/indicatorTopicMap.ts',
    'export const INDICATOR_TOPIC_MAP = ' + JSON.stringify(TOPICS_MAP)
)
fs.writeFileSync(
    'maps/nameSearch.ts',
    'export const NAME_SEARCH = ' + JSON.stringify(NAME_SEARCH)
)
Object.keys(NAME_SEARCH)
    .sort((a, b) => NAME_SEARCH[a].length - NAME_SEARCH[b].length)
    .forEach((key) => {
        console.log(key, NAME_SEARCH[key].length)
    })

let finishedCount = 0

async function getIndicatorsCountriesMap(i) {
    const indicator = INDICATOR_SHORT_ID_ID_MAP[i]
    const fileName = `indicatorsCountries/${indicator}.json`

    if (fs.existsSync(fileName)) {
        finishedCount++
        return
    }

    const result = { countriesNumber: 0, countryCodes: [] }

    for (let k = 0; k < coutriesCodes.length; k++) {
        const code = coutriesCodes[k]
        try {
            const value = await got(
                `${DOMAIN}/country/${code}/indicator/${indicator}?format=json&date=1930:2023`,
                { json: true }
            )
            const { total } = value.body[0]
            if (total > 0) {
                result.countriesNumber += 1
                result.countryCodes.push(code)
            }
            console.log(`finishedCount: ${finishedCount}`, i, ':', k)
        } catch (e) {
            continue
        }
    }
    finishedCount++

    fs.writeFileSync(fileName, JSON.stringify(result))
}

async function runGetIndicators(start) {
    console.log('length', INDICATOR_SHORT_ID_ID_MAP.length)
    for (let i = start; i < INDICATOR_SHORT_ID_ID_MAP.length; i += 1) {
        await getIndicatorsCountriesMap(i)
    }
}

for (let i = 0; i < 1; i++) {
    runGetIndicators(i)
}
