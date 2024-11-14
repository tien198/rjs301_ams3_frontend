import { Outlet } from "react-router-dom";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";

function Root() {
    return (
        <>
            <div className='h-screen'>
                <MainNav />
                <Outlet />
            </div>
            <div className='h-screen'></div>
            <Footer />
        </>
    );
}

export default Root;