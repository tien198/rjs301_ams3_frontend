import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../components/layout/Banner";
import Container from "../../components/UI/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { removeItem } from "../../store/cartSlice";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ICartItem } from "../../store/storeModels/interfaces/ICartState";
import { getJwt } from "../../ultil/authenTokenUltil";
import { json } from "react-router-dom";
import ErrorRes from "../../ultil/DataModels/implementations/ErrorResponse";

function CartItemsTable() {
    const cartItems = useAppSelector(({ cart }) => cart.items)
    const dispatch = useAppDispatch()
    const remove = (i: ICartItem) => dispatch(removeItem(i._id?.$oid!))
    return (
        <table className="text-center">
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
                        <td><img src={i.img1} alt={i.name} /></td>
                        <td>{i.name}</td>
                        <td className="hidden md:table-cell">{i.price}</td>
                        <td>{i.quatity}</td>
                        <td>{Number(i.quatity) * Number(i.price)}</td>
                        <td className="hidden md:table-cell">
                            <button onClick={() => remove(i)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

function CartContent() {
    return (
        <div className="grid">
            <CartItemsTable />
        </div>
    );
}

function Cart() {
    return (
        <Container>
            <Banner pageTitle="Cart" />
            <h1 className="uppercase italic text-2xl mt-14">Shopping Cart</h1>
            <div className="my-4">
                <CartContent />
            </div>
        </Container>
    );
}

export default Cart;

export function loader() {
    const isAuthen = getJwt()
    if (!isAuthen)
        throw json(new ErrorRes('please login to order cart'), { status: 401 })
    return null
}

