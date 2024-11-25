import { DetailProps } from "."
import convertToFraction from "../../ultil/convertToFraction"
import AddToCartBtn from "./AddToCartBtn"

export default function DetailSide({ product, className }: DetailProps) {
    return (
        <div className={`${className} flex flex-col gap-4 h-full justify-between`}>
            <h1 className="uppercase text-black text-3xl 2xl:text-5xl">{product.name}</h1>
            <span className="text-xl">{convertToFraction(product.price)} VNĐ</span>
            <p>{product.short_desc}</p>
            <p><span className="uppercase text-black mr-2">Category:</span>{product.category}</p>
            <div>
                <AddToCartBtn />
            </div>
        </div>
    )
}