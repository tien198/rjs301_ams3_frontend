import { ChangeEvent, useState } from "react"

/**
 * 
 * @param initialState - T
 * @returns Array [val, onChangeVal, setVal]
 */
export default function useTwoWayBinding<T>(initialState?: T): Array<T | any> {
    const [val, setVal] = useState<T>(initialState!)
    function onChangeVal(e: ChangeEvent<HTMLInputElement>) {
        setVal(<T>(e.target.value))
    }
    return [
        val,
        onChangeVal,
        setVal,
    ]
}