import { IProduct } from "../interfaces/IProduct";

export class Product implements IProduct {
    constructor() {
        this._id = { $oid: '' }
        this.category = ''
        this.name = ''
        this.img1 = ''
        this.img2 = ''
        this.img3 = ''
        this.img4 = ''
        this.short_desc = ''
        this.long_desc = ''
        this.price = ''
    }
    _id?: { $oid?: string; };
    category?: string;
    name?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    short_desc?: string;
    long_desc?: string;
    price?: string;
}