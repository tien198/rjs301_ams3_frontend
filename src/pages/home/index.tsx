import AdditionalInformation from '../../components/layout/AdditionalInformation';
import Banner from '../../components/layout/Banner';
import CategoriesBrowser from '../../components/layout/CategoriesBrowser';
import TrendingProduct from './TrendingProduct';

export default function HomeIndex() {

    return (
        <div className='flex flex-col gap-24'>
            <Banner />
            <CategoriesBrowser />
            <TrendingProduct />
            <AdditionalInformation />
        </div>
    );
}
