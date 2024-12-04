import Banner from "../../components/layout/Banner";
import Container from "../../components/UI/Container";
import { getJwt } from "../../ultil/authenTokenUltil";
import { json, Outlet } from "react-router-dom";
import ErrorRes from "../../ultil/DataModels/implementations/ErrorResponse";


export default function CartIndex() {
    return (
        <Container className="italic">
            <Banner pageTitle="Cart" />
            <h1 className="uppercase text-2xl mt-14">Shopping Cart</h1>
            <div className="my-4">
                <Outlet />  {/* ------------ Outlet in here */}
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

