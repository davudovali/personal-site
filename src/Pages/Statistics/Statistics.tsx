import { CountrySelector } from './CountrySelector'
import { IndicatorSelector } from './IndicatorSelector'
import { useEffect, useState } from 'react'
import { makeRequest } from '../../service/worldBankApi'
import { ChartDatumnType } from './types'
import ChartContainer from './ChartContainer'
import styles from './Statistics.module.scss'
import { INDICATOR_SHORT_ID_ID_MAP } from '../../service/maps/indicatorShortIdIdMap'
import CustomChart from './CustomChart'

export default function Statistics() {
    const [startYear, setStartYear] = useState<number>(1930)
    const [endYear, setEndYear] = useState<number>(() =>
        new Date().getFullYear()
    )
    const [countries, setCountries] = useState<string[]>([])
    const [indicators, setIndicators] = useState<number[]>([])
    const [data, setData] = useState<{ [key: number]: ChartDatumnType[] }>({})
    useEffect(() => {
        const newData: { [key: string]: any } = {}
        Promise.all(
            indicators.map(async (indicator) => {
                const result = await makeRequest({
                    countries,
                    indicator: INDICATOR_SHORT_ID_ID_MAP[indicator],
                    startYear,
                    endYear,
                })
                if (result) newData[indicator] = result[1]
            })
        ).then(() => {
            setData(newData)
        })
    }, [countries, indicators, startYear, endYear])

    return (
        <>
            <div className={styles.selectorsContainer}>
                <div>
                    <IndicatorSelector
                        chosenIndicators={indicators}
                        setChosenIndicators={setIndicators}
                    />
                    <CountrySelector
                        onChange={setCountries}
                        choosenCountries={countries}
                    />
                </div>
                <div className={styles.yearsSelectors}>
                    <input
                        type="number"
                        placeholder="YYYY"
                        min="1930"
                        defaultValue={1930}
                        onChange={(event) =>
                            setStartYear(Number.parseInt(event.target.value))
                        }
                        max={new Date().getFullYear() - 1}
                    />
                    <input
                        type="number"
                        placeholder="YYYY"
                        min="1931"
                        defaultValue={new Date().getFullYear()}
                        onChange={(event) =>
                            setEndYear(Number.parseInt(event.target.value))
                        }
                        max={new Date().getFullYear()}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.chartsContainer}>
                    {data &&
                        Object.keys(data).map((key) => {
                            return (
                                <ChartContainer
                                    indicatorId={key as unknown as number}
                                    data={{
                                        [key]: data[key as unknown as number],
                                    }}
                                    key={key}
                                />
                            )
                        })}
                </div>
                <CustomChart
                    data={data}
                    countries={countries}
                    indicators={indicators}
                />
            </div>
        </>
    )
}
