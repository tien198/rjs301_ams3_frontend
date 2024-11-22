import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../ultil/Models/interfaces/IProduct";

interface ProductsState {
    products: IProduct[]
}
const initialState: ProductsState = {
    products: []
}
const fetchedProductsSlice = createSlice({
    name: 'fetched-products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = action.payload
        }
    }
})

export const { setProducts } = fetchedProductsSlice.actions
export default fetchedProductsSlice.reducer