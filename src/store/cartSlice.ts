import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICartState, { IItemWithQuantityPayload } from './storeModels/interfaces/ICartState';
import CartItem from './storeModels/implementations/CartItem';


const initialState: ICartState = {
    items: [],
    currentItemIndex: 0
}

function setCurrent(state: ICartState, action: PayloadAction<number>) {
    state.currentItemIndex = action.payload
}

function addWithQuantity(state: ICartState, action: PayloadAction<IItemWithQuantityPayload>) {
    // updItemsList : updated Items List
    const updItemsList = [...state.items]
    // exIndex : existed Index
    const exIndex = state.items.findIndex(i => i._id?.$oid === action.payload.item._id?.$oid)
    const exItem = updItemsList[exIndex]
    const { item, quantity } = action.payload

    if (exItem) {
        const addedQuantity = Number(exItem.quantity) + Number(quantity)

        if (addedQuantity >= 0) {
            const updItem = CartItem.createWithQuantity(item, addedQuantity)
            updItemsList[exIndex] = { ...updItem }
        }
        else {
            updItemsList.splice(exIndex, 1)
        }
    }
    else if (Number(quantity) >= 0) {
        const newItem = CartItem.createWithQuantity(action.payload.item, quantity)
        updItemsList.push({ ...newItem })
    }

    state.items = updItemsList
}

/** @param action -  payload is an object {id:string, quantity:number} */
function updateQuantity(state: ICartState, action: PayloadAction<IItemWithQuantityPayload>) {
    const updItemsList = [...state.items]
    const updIndex = state.items.findIndex(i => i._id?.$oid === action.payload.item._id?.$oid)
    const updItem = updItemsList[updIndex]

    if (updItem) {
        const updQuantity = Number(action.payload.quantity)

        if (updQuantity >= 0) {
            const itemInstance = CartItem.createWithQuantity(updItem, updQuantity)
            updItemsList[updIndex] = { ...itemInstance }
        }
        else
            updItemsList.splice(updIndex, 1)
    }
    state.items = updItemsList
}

/** @param action - payload is productId */
function remove(state: ICartState, action: PayloadAction<string>) {
    state.items = state.items.filter(i => i._id?.$oid !== action.payload)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCurrentItemIndex: setCurrent,
        addItemWithQuantity: addWithQuantity,
        updateItemQuantity: updateQuantity,
        removeItem: remove
    }
})

export const { setCurrentItemIndex, addItemWithQuantity, updateItemQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer