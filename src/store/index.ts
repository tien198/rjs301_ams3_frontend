import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";


const store = configureStore({
    reducer: {
        modal: modalReducer,
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch