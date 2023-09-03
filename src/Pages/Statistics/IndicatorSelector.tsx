import { NAME_SEARCH } from '../../service/maps/nameSearch'
import { INDICATOR_SHORT_ID_NAME_MAP } from '../../service/maps/indicatorIdNameMap'
import { INDICATOR_SHORT_ID_ID_MAP } from '../../service/maps/indicatorShortIdIdMap'
import React, {
    useState,
    useCallback,
    ChangeEvent,
    useRef,
    Fragment,
} from 'react'
import FocusPopupContainer from './FocusPopupContainer'
import styles from './IndicatorSelector.module.scss'

type CountryVolumeMapType = {
    [key: number]: { countriesNumber: number; countries: string[] }
}
export const IndicatorSelector = ({
    setChosenIndicators,
    chosenIndicators,
}: {
    chosenIndicators: number[]
    setChosenIndicators: (
        value: number[] | ((prevState: number[]) => number[])
    ) => void
}) => {
    const callbackRef = useRef<number>()

    const [results, setResults] = useState<number[]>([])

    const [countriesVolume, setCountriesVolume] =
        useState<CountryVolumeMapType>([])

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
                mostFitIds.ids = mostFitIds.ids.filter((id: number) =>
                    Boolean(countriesVolumePerIndicator[id])
                )
                mostFitIds.ids.sort((a: number, b: number) => {
                    const aValue =
                        countriesVolumePerIndicator[a].countriesNumber
                    const bValue =
                        countriesVolumePerIndicator[b].countriesNumber
                    return bValue - aValue
                })

                mostFitIds.ids = mostFitIds.ids.slice(0, 10)

                setCountriesVolume(countriesVolumePerIndicator)
                setResults(mostFitIds.ids.map((id: string) => Number(id)))
            }, 1000)
        },
        []
    )

    return (
        <fieldset className={styles.wrapper}>
            <label htmlFor="indicatorInput" className={styles.label}>
                INDICATORS
            </label>
            <FocusPopupContainer className={styles.container}>
                <input
                    className={styles.input}
                    type="text"
                    id="indicatorInput"
                    onChange={onChangeInput}
                />
                <div>
                    {chosenIndicators.map((indicator: number) => (
                        <span
                            className={styles.choosenIndicator}
                            key={indicator}
                        >
                            <span>
                                {INDICATOR_SHORT_ID_NAME_MAP[indicator]}
                            </span>
                            <button
                                onClick={() =>
                                    setChosenIndicators(
                                        chosenIndicators.filter(
                                            (chosenIndicator) =>
                                                chosenIndicator !== indicator
                                        )
                                    )
                                }
                            >
                                X
                            </button>
                        </span>
                    ))}

                    {results
                        .filter((id) => !chosenIndicators.includes(id))
                        .map((result) => (
                            <>
                                <button
                                    className={styles.indicatorToChose}
                                    key={result}
                                    onClick={() =>
                                        setChosenIndicators((prevState) => [
                                            ...prevState,
                                            Number(result),
                                        ])
                                    }
                                >
                                    {INDICATOR_SHORT_ID_NAME_MAP[result]}
                                    countries:{' '}
                                    <b>
                                        {
                                            countriesVolume[result]
                                                ?.countriesNumber
                                        }
                                    </b>
                                </button>
                                <br />
                            </>
                        ))}
                </div>
            </FocusPopupContainer>
        </fieldset>
    )
}
