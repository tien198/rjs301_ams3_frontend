import { Await, defer, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { Fallback } from "../../components/layout/Fallback";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import ProductItem from "../../components/layout/ProductIem";
import store from "../../store";
import productsLoader from "../../routes/loaders/products";
import redirectToLowercaseUrl from "../../ultil/redirectToLowercaseUrl";

export default function ProductsBoard() {
  const loader: any = useLoaderData();
  const { products } = loader;

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-center italic uppercase ">
      <Suspense fallback={<Fallback />}>
        <Await resolve={products}>
          {(loaded: IProduct[]) =>
            loaded.map(i => <ProductItem product={i} key={i._id?.$oid} />)
          }
        </Await>
      </Suspense>
    </div>
  );
}

export function allLoader() {
  const fetchedProducts = store.getState().fetchedProducts.products;

  if (fetchedProducts.length > 0)
    return defer({
      products: fetchedProducts,
    });
  return defer({
    products: productsLoader(),
  });
}

export function categorizedProductsLoader({ params, request }: LoaderFunctionArgs) {
  redirectToLowercaseUrl(request.url)
  const fetchedProducts = store.getState().fetchedProducts.products
  if (fetchedProducts.length > 0)
    return defer({
      products: fetchedProducts.filter(i => i.category === params.category?.toLocaleLowerCase())
    })
  else
    return defer({
      // Immediately Invoked Async Function Expression (IIAFE) || Async IIFE
      products: (async function () {
        const products = await productsLoader()
        return products.filter(i => i.category === params.category?.toLocaleLowerCase())
      })()
    })
}
