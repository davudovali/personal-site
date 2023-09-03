import { ChartDatumnType } from './types'
import { useMemo } from 'react'

export default function CustomChart({
    data,
    countries,
    indicators,
}: {
    data: { [key: number]: ChartDatumnType[] }
    indicators: number[]
    countries: string[]
}) {
    const variables = useMemo(() => {
        return null
    }, [countries, indicators, data])
    return <button>ADD CUSTOM CHART +</button>
}
