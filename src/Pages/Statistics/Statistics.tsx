import { CountrySelector } from './CountrySelector'
import { IndicatorSelector } from './IndicatorSelector'
import { useEffect, useState } from 'react'
import { makeRequest } from '../../service/worldBankApi'

export default function Statistics() {
    const [countries, setCountries] = useState<string[]>([])
    const [indicators, setIndicators] = useState<string[]>([])
    const [data, setData] = useState<{ [key: string]: any }>({})
    useEffect(() => {
        const newData: { [key: string]: any } = {}
        Promise.all(
            indicators.map(async (indicator) => {
                const result = await makeRequest({
                    countries,
                    indicator,
                })
                console.log(result)
                if (result) newData[indicator] = result
            })
        ).then(() => setData(newData))
    }, [countries, indicators])
    console.log('coutries', countries, 'indicators', indicators, 'result', data)
    return (
        <div>
            <CountrySelector
                onChange={setCountries}
                choosenCountries={countries}
            />
            <IndicatorSelector onChange={setIndicators} />
        </div>
    )
}
