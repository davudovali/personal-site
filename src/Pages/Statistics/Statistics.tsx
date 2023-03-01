import {INDICATOR_SHORT_ID_ID_MAP} from "../../service/indicatorShortIdIdMap";
import {NAME_SEARCH} from "../../service/nameSearch";
import {INDICATOR_SHORT_ID_NAME_MAP} from "../../service/indicatorIdNameMap";
import {useState, useCallback, ChangeEvent, useRef} from "react";
import {makeRequest} from "../../service/worldBankApi";


export const Statistics = () => {
  const callbackRef = useRef<number>()
  const [results, setResults] = useState([])
  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    clearTimeout(callbackRef.current)
    // @ts-ignore
    callbackRef.current = setTimeout(() => {
      if (!value) setResults([])
      const parts = value.split(' ')

      const idIntersections: {[key: number]: number} = {}
      parts.map(part => {
        // @ts-ignore
        return NAME_SEARCH[part]
      }).filter(x => Boolean(x)).forEach((partIds) => {
        partIds.forEach((id: number)=> {
          if (idIntersections[id]) {
            idIntersections[id] += 1
          } else {
            idIntersections[id] = 1
          }
        })
      })
      let mostFitIds: any = {value: 0, ids: []}
      Object.keys(idIntersections).forEach((id) => {
        const value = idIntersections[Number(id)]
        if (value > mostFitIds.value) {
          mostFitIds.value = value
          mostFitIds.ids = [id]
        } else if (value === mostFitIds.value) {
          mostFitIds.ids.push(id)
        }
      })

      const results = mostFitIds.ids.map((id: string) => INDICATOR_SHORT_ID_NAME_MAP[Number(id)])
      setResults(results)

    }, 1000)

  }, [])
  return <div>
    <input type='text' onChange={onChangeInput}/>
    <div>
      {results.map((result) => <span>{result}<br/></span>)}
    </div>
  </div>
}