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
            <div className='h-screen'></div>
            <Footer />
        </>
    );
}

export default Root;