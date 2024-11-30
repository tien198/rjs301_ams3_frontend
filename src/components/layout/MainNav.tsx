import { useEffect } from "react";
import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../assets/Logo";
import Logo from "../../assets/Logo.svg";
import Container from "../UI/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setLogoState } from "../../store/logoSlice";
import store from "../../store";
import { getJwt } from "../../ultil/authenTokenUltil";
import { PageUrlsList } from "../../ultil/ultilEnums";

// css
import classes from "./MainNav.module.css";

function navLinkStateClass({ isActive }: NavLinkRenderProps) {
    return isActive ? 'link-active' : ''
}

function NavLeftUl() {
    return (
        <ul className="flex gap-4">
            <li>
                <NavLink to={PageUrlsList.Home} className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faHouse} className="mr-1" />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={PageUrlsList.Shop} className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faShop} className="mr-1" />
                    <span>Shop</span>
                </NavLink>
            </li>
        </ul>
    )
}

function NavRightUl() {
    const isLogin = getJwt()
    return (
        <ul className="flex gap-6">
            <li>
                <NavLink to={PageUrlsList.Cart} className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faCartShopping} className="mr-1" />
                    <span className="hidden md:inline">Cart</span>
                </NavLink>
            </li>
            {!isLogin && <li>
                <NavLink to={PageUrlsList.Login} className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    <span className="hidden md:inline">Sign in</span>
                </NavLink>
            </li>}
            {isLogin && <li>
                <NavLink to={PageUrlsList.Login} className={navLinkStateClass}>
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    <span className="hidden md:inline">User</span>
                </NavLink>
            </li>}
            {isLogin && <li>
                <NavLink to='/logout' className={navLinkStateClass}>( Logout )</NavLink>
            </li>}
        </ul>
    )
}
function navBarAnimate() {
    if (window.scrollY > 0)
        store.dispatch(setLogoState('scroll-down'))
    else
        store.dispatch(setLogoState('scroll-up'))
}

// EXPORT DEFAULT ----------------------------------------------
export default function MainNav() {
    // const [logoState, setLogoState] = useState('base')
    const { state: logoState, animationAccept } = useAppSelector(({ logoState }) => logoState)
    const dispath = useAppDispatch()
    // const [color, setColor] = useState('#000')

    useEffect(() => {
        !animationAccept && dispath(setLogoState('scroll-down'))
        if (window.scrollY > 0)
            animationAccept && dispath(setLogoState('scroll-down'))

        if (animationAccept) window.addEventListener('scroll', navBarAnimate)
        else window.removeEventListener('scroll', navBarAnimate)
    }, [animationAccept])

    return (
        <>
            <header className="fixed w-full font-medium h-16 bg-white z-50">
                <Link to={PageUrlsList.Home} className={`${classes['logo-container']} ${classes[logoState]} z-0`}>
                    {/* <Logo color={color} /> */}
                    <img src={Logo} alt="Boutique logo" />
                </Link>
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