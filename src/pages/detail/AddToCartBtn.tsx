import useTwoWayBinding from "../../hooks/useTwoWayBinding";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addItemWithQuantity } from "../../store/cartSlice";
import { IProduct } from "../../ultil/DataModels/interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import { PageUrlsList } from "../../ultil/ultilEnums";
import QuantityInput from "../../components/UI/QuantityInput";

interface Props {
    productToAdd: IProduct
}
function AddToCartBtn({ productToAdd }: Props) {
    const [val, onChangeVal, setVal] = useTwoWayBinding<number>(1)


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
                <QuantityInput val={val} onChangeVal={onChangeVal} setVal={setVal} />
                <button onClick={addToCart} className="px-8 py-2 bg-zinc-900 text-white capitalize italic ">Add to cart</button>
            </div>
        </div>
    );
}

export default AddToCartBtn;
