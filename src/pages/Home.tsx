import { defer } from 'react-router-dom';
import Banner from '../components/layout/Banner';
import CategoriesBrowser from '../components/layout/CategoriesBrowser';
import { BackendAPI } from '../ultil/UltilEnums';
import TrendingProduct from '../components/layout/TrendingProduct';

export default function Home() {

    return (
        <div className='flex flex-col gap-24'>
            <Banner />
            <CategoriesBrowser />
            <TrendingProduct />
        </div>
    );
}


async function trendingProductsLoader() {
    const response = await fetch(BackendAPI.products)
    return await response.json()
}


export function loader() {
    return defer({
        trendingProducts: trendingProductsLoader()
    })
}