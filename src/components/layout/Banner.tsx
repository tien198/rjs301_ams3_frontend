import { useNavigate } from 'react-router-dom'
import classes from './Banner.module.css'
import { PageUrlsList } from '../../ultil/UltilEnums'

interface IMainButton {
    children?: any
    className?: string
    onClick?: any
}
function MainButton({ children, className, onClick }: IMainButton) {
    className = className || 'bg-zinc-800 text-white p-2'
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

// absolute according Banner
function BannerContents() {
    const navigate = useNavigate()
    return (
        <section className={`${classes['absolute-center']} flex flex-col gap-4 italic max-w-[11rem] md:max-w-[20rem] lg:max-w-[25rem]`}>
            <h5 className='uppercase text-zinc-500'>New Inspiration 2024</h5>
            <h4 className='uppercase text-4xl'>20% Of New Season</h4>
            <MainButton className='bg-zinc-800 text-white p-2 italic font-thin' onClick={() => navigate(PageUrlsList.Shop)}>
                Browse Collections
            </MainButton>
        </section >
    )
}


// EXPORT DEFAULT ----------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

export default function Banner() {
    const bannerUrl = '/banner1.png'

    return (
        <div style={{ backgroundImage: `url('${bannerUrl}')` }}
            className={`${classes['banner']} ${classes['banner-h']} ${classes['position']} bg md:mx-14 lg:mx-40 xl:mx-72 2xl:mx-80 relative bot-up`}>
            <BannerContents />
        </div >
    );
}
