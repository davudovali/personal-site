const fs = require('fs')
const uuid = require('uuid')

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
const readFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error reading JSON file:', error.message)
        return null
    }
}

// Write to the JSON file
const writeFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        console.log('File successfully written:', filePath)
    } catch (error) {
        console.error('Error writing to JSON file:', error.message)
    }
}

// Add random IDs to objects in the JSON array
const addRandomIds = async (list) => {
    for (let i = 0; i < list.length; i++) {
        const word = list[i]
        if (!word.id) {
            word.id = uuid.v4() // Generate a random UUID and assign it to the 'id' property
        }
        if (!word.translate) {
            const result = await translateToEnglish(word.text)
            console.log(word.text, result)
            word.translate = result
        }
    }
}

async function run() {
    // Specify the path to your JSON file
    const filePath = './Phrases.json'

    // Read the JSON file
    const jsonData = readFile(filePath)

    // Check if the file was successfully read
    if (jsonData) {
        // Add random IDs to objects in the JSON array
        await addRandomIds(jsonData.list)

        // Write the updated data back to the JSON file
        writeFile(filePath, jsonData)
    }
}

run()
