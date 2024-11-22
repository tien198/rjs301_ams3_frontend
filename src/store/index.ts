import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import ProductModalReducer from "./productModalSlice";
import fetchedProductsReducer from "./fetchedProductsSlice";


const store = configureStore({
    reducer: {
        fetchedProducts: fetchedProductsReducer,
        modal: modalReducer,
        productModal: ProductModalReducer
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch