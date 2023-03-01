const DOMAIN = 'https://api.worldbank.org/v2'


export async function makeRequest() {
  try {
    const result = await fetch(`${DOMAIN}&format=json`)
    return result
  } catch (e) {
    return e
  }
}