import classes from "./MainNav.module.css";
import { useEffect } from "react";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../assets/Logo";
import Logo from "../../assets/Logo.svg";
import Container from "../UI/Container";
import { useAppDispath, useAppSelector } from "../../hooks/reduxHooks";
import { setLogoState } from "../../store/logoSlice";


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
                <NavLink to='/signup' className={navLinkStateClass}>
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
    // const [logoState, setLogoState] = useState('base')
    const { state: logoState, animationAccept } = useAppSelector(({ logoState }) => logoState)
    const dispath = useAppDispath()
    // const [color, setColor] = useState('#000')

    useEffect(() => {
        !animationAccept && dispath(setLogoState('scroll-down'))
        if (window.scrollY > 0)
            animationAccept && dispath(setLogoState('scroll-down'))
        function navBarAnimate()  {
            if (window.scrollY > 0)
                 dispath(setLogoState('scroll-down'))
            else
                 dispath(setLogoState('scroll-up'))
        }
        
        if(animationAccept) window.addEventListener('scroll',navBarAnimate)
        else window.removeEventListener('scroll', navBarAnimate)
    }, [animationAccept])

    return (
        <>
            <header className="fixed w-full font-medium h-16 bg-white z-50">
                <span className={`${classes['logo-container']} ${classes[logoState]} z-0`}>
                    {/* <Logo color={color} /> */}
                    <img src={Logo} alt="Boutique logo" />
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