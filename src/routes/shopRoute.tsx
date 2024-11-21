import { RouteObject } from "react-router-dom";
import { Fallback } from "../components/layout/Fallback";
import { lazy, Suspense } from "react";

const ShopRoot = lazy(() => import('../pages/shop/1ShopRoot'))
const ProductsBoard = lazy(() => import('../pages/shop/ProductsBoard'))

const shopRoute: RouteObject = {
    path: 'shop',
    element: <Suspense fallback={<Fallback />}>
        <ShopRoot />
    </Suspense>,
    children: [
        {
            path: 'all',
            element: <Suspense fallback={<Fallback />}>
                <ProductsBoard />
            </Suspense>,
            loader: () => import('../pages/shop/ProductsBoard').then(i => i.loader())
        },
        {
            path: ':category',
            element: <Suspense fallback={<Fallback />}>
                <p />
            </Suspense>,
        }
    ]
}

export default shopRoute