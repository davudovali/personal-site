import { useState, useCallback, SyntheticEvent } from 'react'
import { NAMES, NAME_TO_ISO2 } from '../../service/maps/countriesList'

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
        []
    )

    return (
        <div>
            <select name="countries" id="countries_select" onChange={onSelect}>
                {NAMES.filter(
                    (countryName) => !choosenCountries.includes(countryName)
                ).map((name) => (
                    <option value={name}>{name}</option>
                ))}
            </select>
            {choosenCountries.map((country) => (
                <button
                    onClick={() => onChange([...choosenCountries, country])}
                >
                    {country}
                </button>
            ))}
        </div>
    )
}
