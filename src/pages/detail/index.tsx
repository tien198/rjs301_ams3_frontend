import { Await, defer, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Container from "../../components/UI/Container";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productLoader } from "../../routes/loaders/productsLoaders";
import { Suspense } from "react";
import { Fallback } from "../../components/layout/Fallback";
import ImgSide from "./ImgSide";
import InforSide from "./InforSide";
import DetailDescriptionSide from "./DetailDescriptionSide";
import RelatedProducts from "./RelatedProducts";

// DetailProps interface is used for `ImgSide.tsx` & `InforSide.tsx`
export interface DetailProps {
    product: IProduct
    className?: string
}

export default function DetailIndex() {
    const { product }: IProduct | any = useLoaderData()
    return (
        <Container>
            <div className="grid md:grid-cols-5 gap-4 italic text-zinc-500 text-xs">
                <Suspense fallback={<Fallback />}>
                    <Await resolve={product}>
                        {(loaded: IProduct) => (
                            <>
                                <ImgSide product={loaded} className="md:col-start-1 md:col-end-3" />
                                <InforSide product={loaded} className="md:col-start-3 md:col-end-6" />
                                <DetailDescriptionSide product={loaded} className="mt-6 md:col-start-1 md:col-end-6" />
                            </>)
                        }
                    </Await>
                </Suspense>
            </div>
            <RelatedProducts />
        </Container>
    );
}

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args)
    const paramName = Object.keys(args.params)[0]
    // find in `fetchedDetailProducts` then `fetchedProducts` if not found
    const product =
        store.getState().fetchedDetailProducts.products.find(i => i._id === args.params[paramName])
        || store.getState().fetchedProducts.products.find(i => i._id?.$oid === args.params[paramName])

    if (product)
        return defer({
            product: product
        })
    else
        return defer({
            // call api to get `product` and dispath this `product` to `fetchedDetailProducts`
            product: productLoader(args.params[paramName]!)
        })
}