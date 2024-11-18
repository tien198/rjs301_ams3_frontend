import { PropsWithChildren, Suspense } from 'react';
import { Fallback } from './Fallback';
import { Await, defer, useRouteLoaderData } from 'react-router-dom';
import Container from '../UI/Container';
import { SectionTitle } from '../UI/SectionWithTitle';
import { IProduct } from '../../ultil/Models/Product';
import { BackendAPI } from '../../ultil/UltilEnums';
import classes from './TrendingProduct.module.css'
import Modal from '../UI/Modal';


function ProductsContainer({ children }: PropsWithChildren) {
    return (
        <Container className='italic'>
            <SectionTitle h4='Top Trending Products' h5='Made The Hard Way' />
            <div className='grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center'>
                {children}
            </div>
        </Container>
    )
}


interface IProductItemProp {
    product: IProduct
}
function ProductItem({ product }: IProductItemProp) {
    const {
        img1 = '',
        name = '',
        price = 'NAN'
    } = product

    return (
        <section className={`flex flex-col gap-2 items-center ${classes['product-item']}`}>
            <img src={img1} alt={name} />
            <p>{name}</p>
            <span className='text-zinc-500'>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</span>
        </section>
    )
}


export default function TrendingProduct() {
    const loader: any = useRouteLoaderData('home-page')
    const { trendingProducts } = loader
    return (
        <Suspense fallback={<Fallback />}>
            <Modal />
            <ProductsContainer>
                <Await resolve={trendingProducts}>
                    {
                        (loaded: IProduct[]) => loaded.map(i => <ProductItem product={i} key={i._id.$oid} />)
                    }
                </Await>
            </ProductsContainer>
        </Suspense>
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