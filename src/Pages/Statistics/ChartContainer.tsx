import { ChartDatumnType } from './types'
import { useMemo, memo } from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import { INDICATOR_SHORT_ID_NAME_MAP } from '../../service/maps/indicatorIdNameMap'
import styles from './ChartContainer.module.scss'
import classNames from 'classnames'

const COLOURS = [
    '#6929c4',
    '#9f1853',
    '#198038',
    '#b28600',
    '#8a3800',
    '#1192e8',
    '#fa4d56',
    '#002d9c',
    '#009d9a',
    '#a56eff',
    '#005d5d',
    '#570408',
    '#ee538b',
    '#012749',
]

function ChartContainer({
    data,
    className,
    indicatorId,
}: {
    indicatorId: number
    data: { [key: string]: ChartDatumnType[] }
    className?: string
}) {
    const { dataRow, countriesList } = useMemo(() => {
        const countriesList = new Set()

        const yearsMap = Object.values(data).reduce<{
            [key: string]: { [key: string]: number | string | null }
        }>((result, countryDataRow) => {
            countryDataRow?.forEach((datumn) => {
                countriesList.add(datumn.country.value)

                let value = datumn.value
                if (typeof value === 'number' && value < 100) {
                    value = Math.floor(value * 100) / 100
                } else if (typeof value === 'number') {
                    value = Math.floor(value)
                }

                if (!result[datumn.date]) {
                    result[datumn.date] = {
                        [datumn.country.value]: value,
                    }
                } else {
                    result[datumn.date][datumn.country.value] = value
                }
            })
            return result
        }, {})

        const dataRow = []
        for (let year in yearsMap) {
            dataRow.push({ name: year, ...yearsMap[year] })
        }

        const cleanedDataRow = dataRow.filter((datumn) => {
            return Boolean(
                Object.values({ ...datumn, name: null }).filter((x) =>
                    Boolean(x)
                )[0]
            )
        })

        return {
            dataRow: cleanedDataRow,
            countriesList: Array.from(countriesList) as string[],
        }
    }, [data])

    return (
        <div className={styles.container}>
            <h2 style={{ textAlign: 'center', padding: '0 1rem' }}>
                {INDICATOR_SHORT_ID_NAME_MAP[indicatorId]}
            </h2>
            <div
                className={classNames(className, styles.chart)}
                style={{ position: 'relative', width: '100%', height: '500px' }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={500}
                        data={dataRow}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        {countriesList.map((name, index) => (
                            <Line
                                type="monotone"
                                key={name}
                                dataKey={name}
                                stroke={COLOURS[index]}
                                activeDot={{ r: 2 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default memo(ChartContainer)
