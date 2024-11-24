import { Outlet } from "react-router-dom";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";

function Root() {
    return (
        <>
            <>
                <MainNav />
                <Outlet />
            </>
            <Footer />
        </>
    );
}

export default Root;