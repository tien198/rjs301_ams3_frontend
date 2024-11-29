import InputProps from "./InputProps";

function EmailInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="text" placeholder='Email'
            value={value} onChange={onChangeVal} />
    )
}

export default EmailInput;