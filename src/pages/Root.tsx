import { Outlet, useLocation } from "react-router-dom";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import LiveChatIcon from "../components/UI/LiveChatIcon";
import { PageUrlsList } from "../ultil/ultilEnums";
import { useEffect, useState } from "react";

function Root() {
    const location = useLocation()
    const [hasLiveChat, setHasLiveChat] = useState(false)



    useEffect(() => {
        function isHasLiveChat(pathNamesList: string[]) {
            for (let i of pathNamesList) {
                if (location.pathname.includes(i))
                    return true
            }
            return false
        }
        if (location.pathname === PageUrlsList.Home
            || isHasLiveChat([PageUrlsList.Shop, PageUrlsList.Cart])) {
            setHasLiveChat(true)
        }
        else setHasLiveChat(false)
    }, [location])
    return (
        <>
            <>
                <MainNav />
                <Outlet />
                {hasLiveChat && <LiveChatIcon />}
            </>
            <Footer />
        </>
    );
}

export default Root;