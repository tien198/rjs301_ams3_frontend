import { IProduct } from "../../../ultil/DataModels/interfaces/IProduct";
import ICartItem from "./ICartItem";


export default interface IProductState {
    product: IProduct | ICartItem
}