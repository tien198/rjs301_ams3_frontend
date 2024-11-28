import { ChangeEvent, ChangeEventHandler, useState } from "react"

/**
 * 
 * @param initialState - T
 * @returns Array [val, onChangeVal, setVal]
 */

export default function useTwoWayBinding(initialState = ''): [string, ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<string>>] {
    const [val, setVal] = useState(initialState!)
    function onChangeVal(e: ChangeEvent<HTMLInputElement>) {
        setVal((e.target.value))
    }
    return [
        val,
        onChangeVal,
        setVal,
    ]
}