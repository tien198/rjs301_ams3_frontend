import { Await, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ProductsContainer from "../../components/layout/ProductsContainer";
import store from "../../store";
import { DetailProps } from ".";
import { Suspense, useEffect, useState } from "react";
import { Fallback } from "../../components/layout/Fallback";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import { Product } from "../../ultil/Models/implementations/Product";
import ProductItem from "../../components/layout/ProductIem";

function RelatedProducts({ product, className, isFallback }: DetailProps) {
    const [relatedProds, setRelatedProds] = useState<IProduct[]>(new Array('', '', '').map(i => new Product()))
    console.log(relatedProds);

    useEffect(() => {
        // fetch Related Products in here 
        // then dispath to `relatedProds` state
    }, [])
    return (
        <div className={className}>
            <h4 className="text-2xl uppercase">Related Products</h4>
            <div>
                <button className="text-xl text-red-600 mt-6">Add Related Products in here (don't forget)</button>
                <p className="text-zinc-500 italic">Reuse `ProductContainer` in `Home`</p>

            </div>
            <ProductsContainer >
                {isFallback && relatedProds.map((_, i) => <div className="h-32"><Fallback key={i} /></div>)}
                {!isFallback && relatedProds.map(i => <ProductItem product={i} key={i._id?.$oid} />)}
            </ProductsContainer>
        </div>
    );
}

export default function RelatedProductsSuspense({ className }: DetailProps) {
    const { product }: any = useLoaderData()

    return (
        <Suspense fallback={<RelatedProducts className={className} isFallback />}>
            <Await resolve={product}>
                {(loaded: IProduct) =>
                    <RelatedProducts product={loaded} className={className} />}
            </Await>
        </Suspense>
    )
}

export function relatedoader(args: LoaderFunctionArgs) {
    const related = store.getState().fetchedProducts.products.filter(i => i.category)

}