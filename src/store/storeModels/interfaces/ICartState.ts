import ICartItem from "./ICartItem"

export default interface ICartState {
    items: ICartItem[]
}

export interface IUpdatePayload {
    id: string,
    amount: number
}