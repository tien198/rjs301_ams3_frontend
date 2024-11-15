import Banner from '../components/layout/Banner';
import CategoriesBrowser from '../components/layout/CategoriesBrowser';

function Home() {
    return (
        <div className='flex flex-col gap-7'>
            <Banner />
            <CategoriesBrowser />
        </div>
    );
}

export default Home;