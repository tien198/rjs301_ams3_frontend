import { Await, defer, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Container from "../../components/UI/Container";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productLoader } from "../../routes/loaders/productsLoaders";
import { Suspense } from "react";
import { Fallback } from "../../components/layout/Fallback";

interface DetailProps {
    product: IProduct
}

function ImgSide({ product }: DetailProps) {
    product
    return (
        <div className="bg-zinc-300 h-10 md:col-start-1 md:col-end-3">

        </div>
    )
}

function DetailSide({ product }: DetailProps) {
    product
    return (
        <div className="bg-zinc-300 h-10 md:col-start-3 md:col-end-6"></div>
    )
}

export default function Detail() {
    const { product }: IProduct | any = useLoaderData()
    return (
        <Container className="grid md:grid-cols-5 gap-4">
            <Suspense fallback={<Fallback />}>
                <Await resolve={product}>
                    {(loaded: IProduct) => (
                        <>
                            <ImgSide product={loaded} />
                            <DetailSide product={loaded} />
                        </>)
                    }
                </Await>
            </Suspense>
        </Container>
    );
}

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args)
    const paramName = Object.keys(args.params)[0]
    const product = store.getState().fetchedProducts.products.find(i => i._id?.$oid === args.params[paramName])
    if (product)
        return defer({
            product: product
        })
    else
        return defer({
            product: productLoader(args.params[paramName]!)
        })
}