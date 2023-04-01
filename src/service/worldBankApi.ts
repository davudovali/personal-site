import { COUNTRY_ISO2, NAME_TO_ISO2 } from './maps/countriesList'

const DOMAIN = 'https://api.worldbank.org/v2'

export async function makeRequest({
    countries: countriesNames,
    indicator,
}: {
    countries: string[]
    indicator: string
}) {
    const countries = countriesNames.map(
        //@ts-ignore
        (name) => COUNTRY_ISO2[NAME_TO_ISO2[name]]
    )
    try {
        const country =
            countries.length > 1 ? countries.join(';') : countries[0]
        const result = await fetch(
            `${DOMAIN}/country/${country}/indicator/${indicator}?format=json&date=1930:2023`
        )
        return result
    } catch (e) {
        return e
    }
}
