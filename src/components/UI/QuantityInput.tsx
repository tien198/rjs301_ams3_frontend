import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler } from "react";

interface Props {
    val: number
    onChangeVal: ChangeEventHandler<HTMLInputElement>
    setVal: React.Dispatch<React.SetStateAction<number>>
}

export default function QuantityInput({ val, onChangeVal, setVal }: Props) {
    const increase = () => setVal(prev => ++prev)
    const decrease = () => setVal(prev => --prev)
    return (
        <span className="flex items-center">
            <button onClick={decrease}>
                <FontAwesomeIcon icon={faCaretLeft} color="#000" fontSize="1.25rem" />
            </button>
            <input type="number" value={val} onChange={onChangeVal} className="px-4 py-2 text-black outline-none max-w-14" />
            <button onClick={increase}>
                <FontAwesomeIcon icon={faCaretRight} color="#000" fontSize="1.25rem" />
            </button>
        </span>
    )
}