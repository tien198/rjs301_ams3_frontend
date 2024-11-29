import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../ultil/DataModels/interfaces/IProduct";

interface ProductsState {
    products: IProduct[]
}

const initialState: ProductsState = {
    products: []
}

const fetchedDetailProductsSlice = createSlice({
    name: 'fetchedDetailProductsSlice',
    initialState,
    reducers: {
        addOneProduct(state, action: PayloadAction<IProduct>) {
            state.products = [...state.products, action.payload]
        }
    }
})

export const { addOneProduct } = fetchedDetailProductsSlice.actions
export default fetchedDetailProductsSlice.reducer;