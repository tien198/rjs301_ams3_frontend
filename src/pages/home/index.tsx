import AdditionalInformation from '../../components/layout/AdditionalInformation';
import Banner from '../../components/layout/Banner';
import CategoriesBrowser from '../../components/layout/CategoriesBrowser';
import useScrollToTopPage from '../../hooks/useScrollToTopPage';
import TrendingProduct from './TrendingProduct';

export default function HomeIndex() {
    useScrollToTopPage()
    return (
        <div className='flex flex-col gap-24 mb-12'>
            <Banner />
            <CategoriesBrowser />
            <TrendingProduct />
            <AdditionalInformation />
        </div>
    );
}
