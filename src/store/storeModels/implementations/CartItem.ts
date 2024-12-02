import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct";
import ICartItem from "../interfaces/ICartItem";


export default class CartItem implements ICartItem {
    quatity?: string | number
    total?: string | number
    totalCalc?() {
        this.total = Number(this.price) * Number(this.quatity)
        return this.total
    }
    constructor(product: IProduct, quantiy?: number) {
        this.quatity = quantiy || '1'
        Object.assign(this, product)
        this.totalCalc!()
    }
    _id?: {
        $oid?: string
    }
    category?: string
    img1?: string
    img2?: string
    img3?: string
    img4?: string
    long_desc?: string
    name?: string
    price?: string | number
    short_desc?: string
}