import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../ultil/DataModels/interfaces/IProduct";
import IProductState from "./storeModels/interfaces/IProductState";

const initialState: IProductState = {
    product: {}
}

const productModalSlice = createSlice({
    name: 'product-modal',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<IProduct>) {
            state.product = action.payload
        }
    }
})

export const { setProduct } = productModalSlice.actions
export default productModalSlice.reducer