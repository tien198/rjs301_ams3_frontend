import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct"

export default interface ICartItem extends IProduct {
    quantity?: number | string
    total?: number | string
}