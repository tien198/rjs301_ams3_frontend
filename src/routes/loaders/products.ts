import store from "../../store"
import { setProducts as productsAction } from "../../store/fetchedProductsSlice";
import { IProduct } from "../../ultil/Models/interfaces/IProduct"
import { BackendAPI } from "../../ultil/UltilEnums"

async function dispatchProductsToStore(products: IProduct[]) {
    store.dispatch(productsAction(products))
}

export default async function productsLoader(): Promise<IProduct[]> {
    const response = await fetch(BackendAPI.products)
    const products = await response.json()
    dispatchProductsToStore(products)
    return products
}