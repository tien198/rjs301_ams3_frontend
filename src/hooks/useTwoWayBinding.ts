import { ChangeEvent, useState } from "react"

export default function useTwoWayBinding<T>(initialState?: T) {
    const [val, setVal] = useState<T>(initialState!)
    function onChangeVal(e: ChangeEvent<HTMLInputElement>) {
        setVal(<T>(e.target.value))
    }
    return {
        val,
        setVal,
        onChangeVal
    }
}