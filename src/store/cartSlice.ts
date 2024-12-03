import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICartState, { IAddWithQuantityPayload, IUpdateQuantityPayload } from './storeModels/interfaces/ICartState';
import CartItem from './storeModels/implementations/CartItem';


const initialState: ICartState = {
    items: []
}

function addWithQuantity(state: ICartState, action: PayloadAction<IAddWithQuantityPayload>) {
    // updItemsList : updated Items List
    const updItemsList = [...state.items]
    // exIndex : existed Index
    const exIndex = state.items.findIndex(i => i._id?.$oid === action.payload.item._id?.$oid)
    const exItem = updItemsList[exIndex]

    if (exItem) {
        const { item, quantity } = action.payload
        const addedQuantity = Number(exItem.quantity) + Number(quantity)
        console.log(addedQuantity);

        if (addedQuantity > 0) {
            const updItem = CartItem.createWithQuantity(item, addedQuantity)
            updItemsList[exIndex] = { ...updItem }
        }
        else {
            updItemsList.splice(exIndex, 1)
        }
    }
    else {
        const newItem = CartItem.createWithQuantity(action.payload.item, action.payload.quantity)
        updItemsList.push({ ...newItem })
    }

    state.items = updItemsList
}

/** @param action -  payload is an object {id:string, amount:number} */
function updateQuantity(state: ICartState, action: PayloadAction<IUpdateQuantityPayload>) {
    const updItemsList = [...state.items]
    const updIndex = state.items.findIndex(i => i._id?.$oid === action.payload.id)
    const updItem = updItemsList[updIndex]
    const updQuantity = Number(updItem.quantity) + Number(action.payload.amount)

    const itemInstance = CartItem.createWithQuantity(updItem, updQuantity)

    if (Number(itemInstance.quantity) < 0)
        updItemsList.splice(updIndex, 1)
    else
        updItemsList[updIndex] = itemInstance

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
        addItemWithQuantity: addWithQuantity,
        updateItemQuantity: updateQuantity,
        removeItem: remove
    }
})

export const { addItemWithQuantity, updateItemQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer