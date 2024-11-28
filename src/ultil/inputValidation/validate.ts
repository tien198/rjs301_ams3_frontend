
export function isNotNull(inputTitle: string, inputVal: string): [boolean, string?] {
    if (inputVal !== '')
        return [true]
    else
        return [
            false,
            `${inputTitle} can't be null`
        ]
}

export function isMinLength(inputTitle: string, inputVal: string, minLength = 8): [boolean, string?] {
    if (inputVal.length >= 8)
        return [true]
    else return [
        false,
        `${inputTitle}'s length must greater than ${minLength} words`
    ]
}

export default function validate(inputTitle: string, inputVal: string | number, funcArr: Function[]) {
    let msg = ''
    for (const func of funcArr) {
        const result = func(inputTitle, inputVal)
        // result of functions is an Array [boolean, string?] - boolean indicate valid or not - string? is error message
        if (!result[0]) {
            msg = result[1]
            break
        }
    }
    return msg
}
