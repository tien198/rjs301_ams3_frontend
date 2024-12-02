import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/UI/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { removeItem } from "../../store/cartSlice";
import { IProduct } from "../../ultil/DataModels/interfaces/IProduct";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import convertToFraction from "../../ultil/convertToFraction";
import ICartItem from "../../store/storeModels/interfaces/ICartItem";

export default function CartItemModal() {
    const prodState: ICartItem = useAppSelector(({ productModal }) => productModal.product)
    const dispatch = useAppDispatch()
    const remove = (i: IProduct) => dispatch(removeItem(i._id?.$oid!))

    return (
        <Modal>

            <div className="py-4 px-3 grid grid-cols-5 justify-between items-center gap-4 italic">
                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Image</span>
                <span className="overflow-hidden col-start-3 -col-end-1"><img src={prodState.img1} alt={prodState.name} className="mx-auto w-28 md:w-32" /></span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Product</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{prodState.name}</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Price</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{convertToFraction(prodState.price)} VNĐ</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Quantity</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{prodState.quatity}</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Total</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{convertToFraction(Number(prodState.total))}</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Remove</span>
                <span className="overflow-hidden col-start-3 -col-end-1">
                    <button onClick={() => remove(prodState)}>
                        <FontAwesomeIcon icon={faTrashCan} className="text-zinc-400" />
                    </button>
                </span>
            </div>
        </Modal>
    )
}