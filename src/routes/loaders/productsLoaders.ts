import store from "../../store"
import { addManyProducts, addOneProduct } from "../../store/fetchedProductsSlice";
import { IProduct } from "../../ultil/Models/interfaces/IProduct"
import { BackendAPI } from "../../ultil/UltilEnums"

async function dispatchProductsToStore(products: IProduct[] | IProduct) {
    if (Array.isArray(products))
        store.dispatch(addManyProducts(products))
    else
        store.dispatch(addOneProduct(products))
}

export async function productsLoader(): Promise<IProduct[]> {
    const response = await fetch(BackendAPI.products)
    const products = await response.json()
    dispatchProductsToStore(products)
    return products
}

export async function productLoader(productID: string) {
    const response = await fetch(`${BackendAPI.products}/${productID}`)
    const product = await response.json()
    dispatchProductsToStore(product)
    return product
}