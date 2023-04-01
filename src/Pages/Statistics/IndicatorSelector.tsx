import { NAME_SEARCH } from '../../service/maps/nameSearch'
import { INDICATOR_SHORT_ID_NAME_MAP } from '../../service/maps/indicatorIdNameMap'
import { INDICATOR_SHORT_ID_ID_MAP } from '../../service/maps/indicatorShortIdIdMap'
import { useState, useCallback, ChangeEvent, useRef, useEffect } from 'react'

type CountryVolumeMapType = {
    [key: number]: { countriesNumber: number; countries: string[] }
}
export const IndicatorSelector = ({
    onChange,
}: {
    onChange: (value: string[]) => void
}) => {
    const callbackRef = useRef<number>()
    const [choosenIndicators, setChoosenIndicators] = useState<number[]>([])
    const [results, setResults] = useState<number[]>([])
    const [countriesVolume, setCountriesVolume] =
        useState<CountryVolumeMapType>([])

    useEffect(() => {
        onChange(
            choosenIndicators.map(
                (indicatorId) => INDICATOR_SHORT_ID_ID_MAP[indicatorId]
            )
        )
    }, [choosenIndicators])

    const onChangeInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value.toLowerCase().trim()
            clearTimeout(callbackRef.current)
            // @ts-ignore
            callbackRef.current = setTimeout(async () => {
                if (!value) setResults([])
                const parts = value.split(' ')

                const idIntersections: { [key: number]: number } = {}
                parts
                    .map((part) => {
                        // @ts-ignore
                        return NAME_SEARCH[part]
                    })
                    .filter((x) => Boolean(x))
                    .forEach((partIds) => {
                        partIds.forEach((id: number) => {
                            if (idIntersections[id]) {
                                idIntersections[id] += 1
                            } else {
                                idIntersections[id] = 1
                            }
                        })
                    })
                let mostFitIds: any = { value: 0, ids: [] }
                Object.keys(idIntersections).forEach((id) => {
                    const value = idIntersections[Number(id)]
                    if (value > mostFitIds.value) {
                        mostFitIds.value = value
                        mostFitIds.ids = [id]
                    } else if (value === mostFitIds.value) {
                        mostFitIds.ids.push(id)
                    }
                })

                const countriesVolumePerIndicator: CountryVolumeMapType = {}

                await Promise.all(
                    mostFitIds.ids.map(async (id: number) => {
                        try {
                            const request = await fetch(
                                process.env.PUBLIC_URL +
                                    `/indicatorsCountries/${INDICATOR_SHORT_ID_ID_MAP[id]}.json`,
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        Accept: 'application/json',
                                    },
                                }
                            )
                            const result = JSON.parse(await request.text())
                            countriesVolumePerIndicator[id] = result
                        } catch (_) {}
                    })
                )
                mostFitIds.ids.sort((a: number, b: number) => {
                    const aValue =
                        countriesVolumePerIndicator[a].countriesNumber
                    const bValue =
                        countriesVolumePerIndicator[b].countriesNumber
                    return aValue - bValue
                })

                setResults(mostFitIds.ids.map((id: string) => Number(id)))
            }, 1000)
        },
        []
    )

    return (
        <div>
            <input type="text" onChange={onChangeInput} />
            <div>
                {choosenIndicators.map((indicator: number) => (
                    <span>
                        {INDICATOR_SHORT_ID_NAME_MAP[indicator]}
                        <br />
                    </span>
                ))}
                {results
                    .filter((id) => !choosenIndicators.includes(id))
                    .map((result) => (
                        <button
                            onClick={() => {
                                setChoosenIndicators((prevState) => [
                                    ...prevState,
                                    Number(result),
                                ])
                            }}
                        >
                            {INDICATOR_SHORT_ID_NAME_MAP[Number(result)]}
                            <br />
                        </button>
                    ))}
            </div>
        </div>
    )
}
