import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct"
import ICartItem from "./ICartItem"

export default interface ICartState {
    items: ICartItem[]
}

export interface IAddWithQuantityPayload {
    item: ICartItem
    quantity: number | string
}

export interface IUpdateQuantityPayload {
    id: string,
    amount: number
}