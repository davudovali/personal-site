fs = require('fs');

const {indicators} = require('./indicators')

let INDICATOR_SHORT_ID_ID_MAP = []
let INDICATOR_SHORT_ID_NAME_MAP = []
let INDICATOR_NAME_SHORT_ID_MAP = {}
let TOPICS_MAP = {}
let NAME_SEARCH = {}

const linkWords = ['about', 'above', 'according', 'already', 'also', 'and', 'any', 'all', 'the', 'for', 'with', 'per', 'than']

let counter = 0
indicators.map(({id, name: rawName, sourceNote: description, topics}) => {
  const shortId = counter
  INDICATOR_SHORT_ID_ID_MAP[shortId] = id
  counter++
  const name = rawName.replace(/"/g, '`')

  INDICATOR_SHORT_ID_NAME_MAP[shortId] = name;

  if (INDICATOR_NAME_SHORT_ID_MAP[name]) {
    INDICATOR_NAME_SHORT_ID_MAP[name] =  typeof INDICATOR_NAME_SHORT_ID_MAP[name] === 'number' ? [INDICATOR_NAME_SHORT_ID_MAP[name], shortId] : [...INDICATOR_NAME_SHORT_ID_MAP[name], shortId]
  } else {
    INDICATOR_NAME_SHORT_ID_MAP[name] = shortId;
  }

  topics.forEach(topic => {
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

fs.writeFileSync("indicatorIdNameMap.ts", 'export const INDICATOR_SHORT_ID_NAME_MAP =' + JSON.stringify(INDICATOR_SHORT_ID_NAME_MAP));
fs.writeFileSync("indicatorNameIdMap.ts", 'export const INDICATOR_NAME_SHORT_ID_MAP = ' + JSON.stringify(INDICATOR_NAME_SHORT_ID_MAP));
fs.writeFileSync("indicatorShortIdIdMap.ts", 'export const INDICATOR_SHORT_ID_ID_MAP = ' + JSON.stringify(INDICATOR_SHORT_ID_ID_MAP));
fs.writeFileSync("indicatorTopicMap.ts", 'export const INDICATOR_TOPIC_MAP = ' + JSON.stringify(TOPICS_MAP));
fs.writeFileSync("nameSearch.ts", 'export const NAME_SEARCH = ' + JSON.stringify(NAME_SEARCH));
Object.keys(NAME_SEARCH).sort((a,b) => NAME_SEARCH[a].length - NAME_SEARCH[b].length).forEach(key => {
  console.log(key, NAME_SEARCH[key].length)
})
