import { Await, defer, useLoaderData } from "react-router-dom";
import { BackendAPI } from "../../ultil/UltilEnums";
import { Suspense } from "react";
import { Fallback } from "../../components/layout/Fallback";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import ProductItem from "../../components/layout/ProductIem";
import store from "../../store";
import { setProducts as productsAction } from "../../store/fetchedProductsSlice";
import { useAppDispath } from "../../hooks/reduxHooks";

export default function Shop() {
    const loader: any = useLoaderData()
    const { products } = loader
    const dispath = useAppDispath()
    function dispathProducts(products: IProduct[]) {
        dispath(productsAction(products))
    }

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-center italic uppercase ">
            <Suspense fallback={<Fallback />}>
                <Await resolve={products}>
                    {(loaded: IProduct[]) => {
                        dispathProducts(loaded)
                        return loaded.map(i => <ProductItem product={i} key={i._id?.$oid} />)
                    }}
                </Await>
            </Suspense>
        </div>
    );
}

async function productsLoader() {
    const response = await fetch(BackendAPI.products)
    return await response.json()
}

export function loader() {
    const fetchedProducts = store.getState().fetchedProducts.products

    if (fetchedProducts.length > 0)
        return defer({
            products: fetchedProducts
        })
    return defer({
        products: productsLoader()
    })
}