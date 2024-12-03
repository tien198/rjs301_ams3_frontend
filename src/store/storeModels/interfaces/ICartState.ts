import ICartItem from "./ICartItem"

export default interface ICartState {
    items: ICartItem[]
    currentItemIndex: number
}

export interface IItemWithQuantityPayload {
    item: ICartItem
    quantity: number | string
}
