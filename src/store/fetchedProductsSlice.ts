import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../ultil/DataModels/interfaces/IProduct";
import IProductsListState from "./storeModels/interfaces/IProductsListState";

const initialState: IProductsListState = {
    products: []
}
const fetchedProductsSlice = createSlice({
    name: 'fetched-products',
    initialState,
    reducers: {
        addManyProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = [...state.products, ...action.payload]
        },
        addOneProduct(state, action: PayloadAction<IProduct>) {
            state.products = [...state.products, action.payload]
        }
    }
})

export const { addManyProducts, addOneProduct } = fetchedProductsSlice.actions
export default fetchedProductsSlice.reducer