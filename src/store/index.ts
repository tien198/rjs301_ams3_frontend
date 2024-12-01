import { configureStore } from "@reduxjs/toolkit";
import logoReducer from "./logoSlice";
import modalReducer from "./modalSlice";
import productModalReducer from "./productModalSlice";
import fetchedProductsReducer from "./fetchedProductsSlice";
import fetchedDetailProductsReducer from "./fetchedDetailProductsSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        logoState: logoReducer,
        fetchedProducts: fetchedProductsReducer,
        fetchedDetailProducts: fetchedDetailProductsReducer,
        modal: modalReducer,
        productModal: productModalReducer,
        cart: cartSlice
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch