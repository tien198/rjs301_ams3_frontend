import Banner from "../../components/layout/Banner";
import Container from "../../components/UI/Container";
import { getJwt } from "../../ultil/authenTokenUltil";
import { json } from "react-router-dom";
import ErrorRes from "../../ultil/DataModels/implementations/ErrorResponse";
import CartItemsTable from "./CartItemsTable";
import CartTotal from "./CartTotal";
import NavigationAcitons from "./NavigationActions";



function CartContent() {
    return (
        <div className="grid lg:grid-cols-9 gap-5">
            <CartItemsTable className='lg:col-start-1 lg:col-end-7' />
            <CartTotal className="lg:col-start-7 lg:col-end-10" />
            <NavigationAcitons className="lg:col-start-1 lg:col-end-7" />
        </div>
    );
}

export default function Cart() {
    return (
        <Container className="italic">
            <Banner pageTitle="Cart" />
            <h1 className="uppercase text-2xl mt-14">Shopping Cart</h1>
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

