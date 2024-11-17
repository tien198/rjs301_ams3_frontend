import Banner from '../components/layout/Banner';
import CategoriesBrowser from '../components/layout/CategoriesBrowser';
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
