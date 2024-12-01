import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct"

export default interface ICartState {
    items: ICartItem[]
}

export interface ICartItem extends IProduct {
    quatity: number
}

export interface IUpdatePayload {
    id: string,
    amount: number
}