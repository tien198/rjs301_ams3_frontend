import { useMemo } from "react"
import validate from "../ultil/inputValidationUltil/validate"

export default function useValidate(inputTitle: string, inputVal: string | number, funcArr: Function[]) {
    const invalidAuthorMsg = useMemo(
        () => validate(inputTitle, inputVal, funcArr),
        [inputVal])

    return invalidAuthorMsg
}

