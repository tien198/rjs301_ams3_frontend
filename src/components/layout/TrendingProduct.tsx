import { PropsWithChildren, Suspense } from "react";
import { Fallback } from "./Fallback";
import { Await, defer, useRouteLoaderData } from "react-router-dom";
import Container from "../UI/Container";
import { SectionTitle } from "../UI/SectionWithTitle";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import ProductModal from "./ProductModal";
import ProductItem from "./ProductIem";
import store from "../../store";
import { setProducts as productsAction } from "../../store/fetchedProductsSlice";
import { useAppDispath } from "../../hooks/reduxHooks";
import productsLoader from "../../routes/loaders/products";

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
  const dispath = useAppDispath();
  function dispathProducts(products: IProduct[]) {
    dispath(productsAction(products));
  }

  return (
    <>
      <ProductModal />
      <Suspense fallback={<Fallback />}>
        <ProductsContainer>
          <Await resolve={trendingProducts}>
            {(loaded: IProduct[]) => {
              dispathProducts(loaded);
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

export function loader() {
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
