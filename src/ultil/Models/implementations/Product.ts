import { IProduct } from "../interfaces/IProduct";

export class Product implements IProduct {
    constructor() { }
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