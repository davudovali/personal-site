const translate = (...args) =>
    import('translate').then(({ default: fetch }) => fetch(...args))

translate.engine = 'google'

async function translateToEnglish(word) {
    try {
        const translation = await translate(word, { from: 'de', to: 'en' })
        return translation
    } catch (error) {
        console.error('Translation error:', error)
    }
}

async function run() {
    let result = []

    for (let i = 0; i <= words.length; i++) {
        const word = words[i]
        try {
            console.log(word.text)
            const translate = await translateToEnglish(word.text)
            console.log(i, translate)

            result.push({ ...word, translate: translate || '' })
        } catch (e) {
            result.push(word)
        }
    }
    console.log('finished')
    debugger
}

run()
