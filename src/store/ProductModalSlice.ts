import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../ultil/Models/implementations/Product";
import { IProduct } from "../ultil/Models/interfaces/IProduct";

interface ProdState {
    product: IProduct
}
const initialState: ProdState = {
    product: new Product()
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