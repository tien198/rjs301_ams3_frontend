import { MouseEventHandler, PropsWithChildren, useState } from "react"
import { NavLink, NavLinkRenderProps } from "react-router-dom"

interface HeadingProps extends PropsWithChildren {
    onclick: MouseEventHandler<HTMLHeadingElement>
    className: string
}
function Heading({ children, className, onclick }: HeadingProps) {
    return (
        <h3 className={`bg-zinc-100 py-2 px-4 uppercase ${className}`} onClick={onclick}>{children}</h3>
    )
}

function navLinkStateClass({ isActive }: NavLinkRenderProps) {
    return isActive ? 'link-active px-4 text-zinc-400' : 'px-4 text-zinc-400'
}

function Categories_1() {
    const [height, setHeight] = useState('h-0')
    function toggle() {
        setHeight(prev => {
            if (prev === 'h-0') return 'h-28'
            else return 'h-0'
        })
    }
    return (
        <>
            <Heading onclick={toggle} className="hover:cursor-pointer">Iphone & Mac</Heading>
            <div className={`flex flex-col gap-4 overflow-hidden duration-150 ${height}`}>
                <NavLink to='Iphone' className={navLinkStateClass}>Iphone</NavLink>
                <NavLink to='Ipad' className={navLinkStateClass}>Ipad</NavLink>
                <NavLink to='Macbook' className={navLinkStateClass}>Macbook</NavLink>
            </div>
        </>
    )
}

function Categories_2() {
    const [height, setHeight] = useState('h-0')
    function toggle() {
        setHeight(prev => {
            if (prev === 'h-0') return 'h-28'
            else return 'h-0'
        })
    }
    return (
        <>
            <Heading onclick={toggle} className="hover:cursor-pointer">Wireless</Heading>
            <div className={`flex flex-col gap-4 overflow-hidden duration-150 ${height}`}>
                <NavLink to='Airpod' className={navLinkStateClass}>Airpod</NavLink>
                <NavLink to='Watch' className={navLinkStateClass}>Watch</NavLink>
            </div>
        </>
    )
}

function Categories_3() {
    const [height, setHeight] = useState('h-0')
    function toggle() {
        setHeight(prev => {
            if (prev === 'h-0') return 'h-28'
            else return 'h-0'
        })
    }
    return (
        <>
            <Heading onclick={toggle} className="hover:cursor-pointer">Other</Heading>
            <div className={`flex flex-col gap-4 overflow-hidden duration-150 ${height}`}>
                <NavLink to='Mouse' className={navLinkStateClass}>Mouse</NavLink>
                <NavLink to='Keyboard' className={navLinkStateClass}>Keyboard</NavLink>
                <NavLink to='Other' className={navLinkStateClass}>Other</NavLink>
            </div>
        </>
    )
}

interface Props {
    className?: string
}
export default function Categories({ className }: Props) {
    return (
        <div className={`hidden md:flex flex-col gap-4 italic ${className}`}>
            <h4 className="uppercase text-2xl">Categories</h4>
            <h1 className="text-white bg-zinc-950 py-2 px-4 uppercase">Apple</h1>
            <NavLink to='all' className={navLinkStateClass}>All</NavLink>
            <Categories_1 />
            <Categories_2 />
            <Categories_3 />
        </div>
    )
}