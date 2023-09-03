import React, { Fragment, useCallback, SyntheticEvent } from 'react'
import { NAMES } from '../../service/maps/countriesList'
import styles from './IndicatorSelector.module.scss'
import FocusPopupContainer from './FocusPopupContainer'

export const CountrySelector = ({
    onChange,
    choosenCountries,
}: {
    onChange: (value: string[]) => void
    choosenCountries: string[]
}) => {
    const onSelect = useCallback(
        (event: SyntheticEvent<HTMLSelectElement, Event>) => {
            //@ts-ignore
            onChange([...choosenCountries, event.target.value])
        },
        [choosenCountries]
    )

    return (
        <fieldset className={styles.wrapper}>
            <label htmlFor="countriesSelect" className={styles.label}>
                COUNTRIES
            </label>
            <FocusPopupContainer className={styles.container}>
                <select
                    name="countries"
                    id="countriesSelect"
                    className={styles.select}
                    onChange={onSelect}
                >
                    {NAMES.filter(
                        (countryName) => !choosenCountries.includes(countryName)
                    ).map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <div>
                    {choosenCountries.map((country) => (
                        <span className={styles.choosenIndicator} key={country}>
                            <span>{country}</span>
                            <button
                                key={country}
                                onClick={() =>
                                    onChange(
                                        choosenCountries.filter(
                                            (x) => x !== country
                                        )
                                    )
                                }
                            >
                                X
                            </button>
                        </span>
                    ))}
                </div>
            </FocusPopupContainer>
        </fieldset>
    )
}
