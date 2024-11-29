import { Suspense } from "react";
import { Await, defer, LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";
import { IProduct } from "../../ultil/DataModels/interfaces/IProduct";
import ProductModal from "../../components/layout/ProductModal";
import ProductItem from "../../components/layout/ProductIem";
import store from "../../store";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import ProductsContainer from "../../components/layout/ProductsContainer";
import Container from "../../components/UI/Container";
import SectionTitle from "../../components/UI/SectionWithTitle";
import ProductsFallback from "../../components/layout/ProductsFallback";

import { productsLoader } from "../../routes/loaders/productsLoaders";


export default function TrendingProduct() {
  const loader: any = useRouteLoaderData("home-page");
  const { trendingProducts } = loader;

  return (
    <Container className="italic">
      <ProductModal />
      <SectionTitle h4="Top Trending Products" h5="Made The Hard Way" />
      <ProductsContainer>
        <Suspense fallback={<ProductsFallback />}>
          <Await resolve={trendingProducts}>
            {(loaded: IProduct[]) => {
              return loaded.map((i) => (
                <ProductItem product={i} key={i._id?.$oid} />
              ));
            }}
          </Await>
        </Suspense>
      </ProductsContainer>
    </Container>
  );
}

export function loader(loaderArgs: LoaderFunctionArgs) {
  loaderInitiation(loaderArgs)
  const fetchedProducts = store.getState().fetchedProducts.products;

  if (fetchedProducts.length > 0)
    return defer({
      trendingProducts: fetchedProducts,
    });
  else
    return defer({
      trendingProducts: productsLoader(),
    });
}
