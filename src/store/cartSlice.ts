import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../ultil/DataModels/interfaces/IProduct';
import ICartState, { IAddWithQuantityPayload, IUpdateQuantityPayload } from './storeModels/interfaces/ICartState';
import ICartItem from './storeModels/interfaces/ICartItem';
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
    const updItem = { ...updItemsList[updIndex] }
    // updItem.quatity = Number(updItem.quatity) + Number(action.payload.amount)

    // if (updItem.quatity <= 0)
    //     updItemsList.splice(updIndex, 1)
    // else
    //     updItemsList[updIndex] = updItem
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