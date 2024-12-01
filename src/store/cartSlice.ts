import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../ultil/DataModels/interfaces/IProduct";
import ICartState, { ICartItem, IUpdatePayload } from "./storeModels/interfaces/ICartState";
import CartItem from "./storeModels/implementations/CartItem";


const initialState: ICartState = {
    items: []
}

function add(state: ICartState, action: PayloadAction<IProduct>) {
    // updItemsList : updated Items List
    const updItemsList = [...state.items]
    // exIndex : existed Index
    const exIndex = state.items.findIndex(i => i._id?.$oid === action.payload._id?.$oid)
    const exItem = updItemsList[exIndex]
    if (exItem) {
        const updItem: ICartItem = {
            ...updItemsList[exIndex],
            quatity: exItem.quatity! + 1
        }
        updItemsList[exIndex] = updItem
    }
    else {
        updItemsList.push(new CartItem(action.payload))
    }

    state.items = updItemsList
}


function updateQuantity(state: ICartState, action: PayloadAction<IUpdatePayload>) {
    const updItemsList = [...state.items]
    const updIndex = state.items.findIndex(i => i._id?.$oid === action.payload.id)
    const updItem = { ...updItemsList[updIndex] }
    updItem.quatity += action.payload.amount

    if (updItem.quatity <= 0)
        updItemsList.splice(updIndex, 1)
    else
        updItemsList[updIndex] = updItem
    state.items = updItemsList
}
/** @param action - payload is productId */
function remove(state: ICartState, action: PayloadAction<string>) {
    state.items = state.items.filter(i => i._id?.$oid !== action.payload)
}

const cartSlice = createSlice({
    name: '',
    initialState,
    reducers: {
        addToCart: add,
        updateItemQuantity: updateQuantity,
        removeItem: remove
    }
})

export const { addToCart, updateItemQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer