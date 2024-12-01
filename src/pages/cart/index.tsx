import Banner from "../../components/layout/Banner";
import Container from "../../components/UI/Container";
import { getJwt } from "../../ultil/authenTokenUltil";
import { json } from "react-router-dom";
import ErrorRes from "../../ultil/DataModels/implementations/ErrorResponse";
import CartItemsTable from "./CartItemsTable";



function CartContent() {
    return (
        <div className="grid">
            <CartItemsTable />
        </div>
    );
}

export default function Cart() {
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

export function loader() {
    const isAuthen = getJwt()
    if (!isAuthen)
        throw json(new ErrorRes('please login to order cart'), { status: 401 })
    return null
}

