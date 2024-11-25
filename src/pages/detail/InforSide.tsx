import { DetailProps } from "."
import convertToFraction from "../../ultil/convertToFraction"

export default function DetailSide({ product, className }: DetailProps) {
    return (
        <div className={`${className} flex flex-col gap-4 h-full justify-between`}>
            <h1 className="uppercase text-black text-3xl">{product.name}</h1>
            <span className="text-xl">{convertToFraction(product.price)} VNĐ</span>
            <p>{product.short_desc}</p>
            <p><span className="uppercase text-black mr-2">Category:</span>{product.category}</p>
            <div>
                <button className="text-xl text-red-600">Add To Cart Button (don't forget)</button>
            </div>
        </div>
    )
}