import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import useTwoWayBinding from "../../hooks/useTwoWayBinding";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addItemWithQuantity } from "../../store/cartSlice";
import { IProduct } from "../../ultil/DataModels/interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import { PageUrlsList } from "../../ultil/ultilEnums";

interface Props {
    productToAdd: IProduct
}
function AddToCartBtn({ productToAdd }: Props) {
    const [val, onChangeVal, setVal] = useTwoWayBinding<number>(1)
    const increase = () => setVal(prev => ++prev)
    const decrease = () => setVal(prev => --prev)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const addToCart = () => {
        dispatch(addItemWithQuantity({ item: productToAdd, quantity: val }))
        navigate(PageUrlsList.Cart)
    }
    return (
        <div className="flex fade-out">
            <div className="flex gap-4 items-center border border-zinc-950">
                <span className="px-4 py-2 uppercase">Quantity</span>
                <span className="flex items-center">
                    <button onClick={decrease}>
                        <FontAwesomeIcon icon={faCaretLeft} color="#000" fontSize="1.25rem" />
                    </button>
                    <input type="number" value={val} onChange={onChangeVal} className="px-4 py-2 text-black outline-none max-w-14" />
                    <button onClick={increase}>
                        <FontAwesomeIcon icon={faCaretRight} color="#000" fontSize="1.25rem" />
                    </button>
                </span>
                <button onClick={addToCart} className="px-8 py-2 bg-zinc-900 text-white capitalize italic ">Add to cart</button>
            </div>
        </div>
    );
}

export default AddToCartBtn;

