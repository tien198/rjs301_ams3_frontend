import classes from "./MainNav.module.css";
import { useEffect, useState } from "react";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../assets/Logo";
import Logo from "../../assets/Logo.svg";
import Container from "../UI/Container";


function navLinkStateClass({ isActive }: NavLinkRenderProps) {
    return isActive ? 'link-active' : ''
}

function NavLeftUl() {
    return (
        <ul className="flex gap-4">
            <li>
                <NavLink to='/' className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faHouse} className="mr-1" />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/shop' className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faShop} className="mr-1" />
                    <span>Shop</span>
                </NavLink>
            </li>
        </ul>
    )
}

function NavRightUl() {
    return (
        <ul className="flex gap-6">
            <li>
                <NavLink to='/cart' className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faCartShopping} className="mr-1" />
                    <span className="hidden md:inline">Cart</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/user' className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    <span className="hidden md:inline">User</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/logout' className={navLinkStateClass}>( Logout )</NavLink>
            </li>
        </ul>
    )
}


// EXPORT DEFAULT ----------------------------------------------
export default function MainNav() {
    const [logoState, setLogoState] = useState('base')
    // const [color, setColor] = useState('#000')

    useEffect(() => {
        if (window.scrollY > 0)
            setLogoState('scroll-down')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0)
                setLogoState('scroll-down')
            else
                setLogoState('scroll-up')
        })
    }, [])

    return (
        <>
            <header className="fixed w-full font-medium h-16 bg-white z-50">
                <span className={`${classes['logo-container']} ${classes[logoState]} z-0`}>
                    {/* <Logo color={color} /> */}
                    <img src={Logo} alt="" />
                </span>
                <Container className=" py-4 relative z-10">
                    <nav className={`flex items-center justify-between w-full h-full ${classes['nav']}`}>
                        <span className="block md:hidden"></span>
                        <span className="flex flex-wrap-reverse flex-row-reverse md:flex-row justify-between w-56 md:w-full">
                            <NavLeftUl />
                            <NavRightUl />
                        </span>
                    </nav>
                </Container>
            </header>
            <div className="h-32"></div>
        </>
    );
}