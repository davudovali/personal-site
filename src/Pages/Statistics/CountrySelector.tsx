import { useState, useCallback, SyntheticEvent } from 'react'
import { NAMES, NAME_TO_ISO2 } from '../../service/countriesList'

export const CountrySelector = () => {
    const [choosenCountries, setChoosenCountries] = useState<string[]>([])

    const onSelect = useCallback(
        (event: SyntheticEvent<HTMLSelectElement, Event>) => {
            //@ts-ignore
            setChoosenCountries((oldValue) => [...oldValue, event.target.value])
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
                    onClick={() =>
                        setChoosenCountries((oldValue) =>
                            [...oldValue].filter((x) => x !== country)
                        )
                    }
                >
                    {country}
                </button>
            ))}
        </div>
    )
}
