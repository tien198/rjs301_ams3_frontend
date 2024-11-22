import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import ProductModalReducer from "./productModalSlice";


const store = configureStore({
    reducer: {
        modal: modalReducer,
        productModal: ProductModalReducer
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch