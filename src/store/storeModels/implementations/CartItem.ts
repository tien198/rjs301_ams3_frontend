import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct";
import { ICartItem } from "../interfaces/ICartState";

export default class CartItem implements ICartItem {
    quatity: number;
    constructor(product: IProduct, quantiy?: number) {
        Object.assign(this, product)
        this.quatity = quantiy || 1
    }
}