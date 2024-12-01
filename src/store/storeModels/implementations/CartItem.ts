import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct";
import { ICartItem } from "../interfaces/ICartState";

export default class CartItem implements ICartItem {
    quatity: number | string;
    constructor(product: IProduct, quantiy?: number) {
        Object.assign(this, product)
        this.quatity = quantiy || '1'
    }
    _id: { $oid: string | undefined; } | undefined;
    category: string | undefined;
    img1: string | undefined;
    img2: string | undefined;
    img3: string | undefined;
    img4: string | undefined;
    long_desc: string | undefined;
    name: string | undefined;
    price: string | undefined;
    short_desc: string | undefined;
}