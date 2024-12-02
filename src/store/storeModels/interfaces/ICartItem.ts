import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct"

export default interface ICartItem extends IProduct {
    quatity?: number | string
    total?: number | string
}