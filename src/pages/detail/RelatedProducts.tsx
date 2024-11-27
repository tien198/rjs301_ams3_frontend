import { Await, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ProductsContainer from "../../components/layout/ProductsContainer";
import store from "../../store";
import { DetailProps } from ".";
import { Suspense, useEffect, useState } from "react";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import ProductItem from "../../components/layout/ProductIem";
import ProductsFallback from "../../components/layout/ProductsFallback";

function RelatedProducts({ product, className, isFallback = false }: DetailProps) {
    const [relatedProds, setRelatedProds] = useState<IProduct[]>()
    console.log(isFallback);


    useEffect(() => {
        // fetch Related Products in here 
        // then dispath to `relatedProds` state

    }, [])
    return (
        <div className={className}>
            <h4 className="text-2xl uppercase mb-6">Related Products</h4>
            <ProductsContainer >
                {isFallback && <ProductsFallback />}
                {relatedProds?.map(i => <ProductItem product={i} key={i._id?.$oid} />)}
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

function relatedLoader(args: LoaderFunctionArgs) {
    const related = store.getState().fetchedProducts.products.filter(i => i.category)

}