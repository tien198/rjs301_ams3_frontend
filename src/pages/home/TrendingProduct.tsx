import { PropsWithChildren, Suspense } from "react";
import { Fallback } from "../../components/layout/Fallback";
import { Await, defer, LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";
import Container from "../../components/UI/Container";
import { SectionTitle } from "../../components/UI/SectionWithTitle";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import ProductModal from "../../components/layout/ProductModal";
import ProductItem from "../../components/layout/ProductIem";
import store from "../../store";
import { productsLoader } from "../../routes/loaders/productsLoaders";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";

function ProductsContainer({ children }: PropsWithChildren) {
  return (
    <Container className="italic">
      <SectionTitle h4="Top Trending Products" h5="Made The Hard Way" />
      <div className="grid gap-10 justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
        {children}
      </div>
    </Container>
  );
}

export default function TrendingProduct() {
  const loader: any = useRouteLoaderData("home-page");
  const { trendingProducts } = loader;


  return (
    <>
      <ProductModal />
      <Suspense fallback={<Fallback />}>
        <ProductsContainer>
          <Await resolve={trendingProducts}>
            {(loaded: IProduct[]) => {
              return loaded.map((i) => (
                <ProductItem product={i} key={i._id?.$oid} />
              ));
            }}
          </Await>
        </ProductsContainer>
      </Suspense>
    </>
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
