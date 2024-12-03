import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { removeItem } from "../../store/cartSlice"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import convertToFraction from "../../ultil/convertToFraction"
import { setProduct } from "../../store/productModalSlice"
import { show } from "../../store/modalSlice"
import CartItemModal from "./CartItemModal"
import ICartItem from "../../store/storeModels/interfaces/ICartItem"

export default function CartItemsTable() {
    const cartItems = useAppSelector(({ cart }) => cart.items)
    const dispatch = useAppDispatch()
    const remove = (i: ICartItem) => dispatch(removeItem(i._id?.$oid!))
    function showModal(item: ICartItem) {
        dispatch(setProduct(item))
        dispatch(show())
    }

    return (
        <>
            <CartItemModal />
            <table className="text-center border-separate border-spacing-y-4">
                <thead className="uppercase bg-zinc-50">
                    <tr className="p-4">
                        <th className="font-light">Image</th>
                        <th className="font-light">Product</th>
                        <th className="font-light hidden md:table-cell">Price</th>
                        <th className="font-light">Quantity</th>
                        <th className="font-light">Total</th>
                        <th className="font-light hidden md:table-cell">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(i =>
                        <tr key={i._id?.$oid}>
                            <td onClick={() => showModal(i)} className="hover:cursor-pointer">
                                <img src={i.img1} alt={i.name} className="mx-auto md:w-48" />
                            </td>
                            <td onClick={() => showModal(i)} className="hover:cursor-pointer">
                                {i.name}
                            </td>
                            <td className="hidden md:table-cell text-zinc-500">{convertToFraction(i.price)} VNĐ</td>
                            <td>{i.quantity}</td>
                            <td className="text-zinc-500">{convertToFraction(Number(i.total))} VNĐ</td>
                            <td className="hidden md:table-cell">
                                <button onClick={() => remove(i)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="text-zinc-400" />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </>
    )
}