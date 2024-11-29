import store from "../../store"
import { addManyProducts } from "../../store/fetchedProductsSlice";
import { addOneProduct as addOneProductToDetailProducts } from "../../store/fetchedDetailProductsSlice";
import { IProduct } from "../../ultil/DataModels/interfaces/IProduct"
import { BackendAPI } from "../../ultil/ultilEnums"

async function dispatchProductsToStore(products: IProduct[] | IProduct) {
    if (Array.isArray(products))
        store.dispatch(addManyProducts(products))
    else
        store.dispatch(addOneProductToDetailProducts(products))
}

export async function getProducts(): Promise<IProduct[]> {
    const response = await fetch(BackendAPI.products)
    const products = await response.json()
    return products
}

export async function productsLoader(): Promise<IProduct[]> {
    const products = await getProducts()
    dispatchProductsToStore(products)
    return products
}



export async function productLoader(productID: string) {
    const response = await fetch(`${BackendAPI.products}/${productID}`)
    const product = await response.json()
    dispatchProductsToStore(product)
    return product
}