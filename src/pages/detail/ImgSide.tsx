import { useState } from "react"
import { DetailProps } from "."

interface ThumbnailProps {
    imgSrc?: string
    imgAlt?: string
    onHandleThumbnail?: Function
}
function Thumbnail({ imgSrc, imgAlt, onHandleThumbnail }: ThumbnailProps) {
    return <img src={imgSrc} alt={imgAlt}
        onClick={onHandleThumbnail?.bind(null, [imgSrc])}
        className="cursor-pointer h-full" />
}

interface ThumbnailListProps extends DetailProps, ThumbnailProps { }
function ThumbnailList({ product, onHandleThumbnail }: ThumbnailListProps) {
    return (
        <div className="flex flex-col gap-2 h-full">
            {product.img1 && <Thumbnail imgSrc={product.img1} imgAlt={product.name!} onHandleThumbnail={onHandleThumbnail} />}
            {product.img2 && <Thumbnail imgSrc={product.img2} imgAlt={product.name!} onHandleThumbnail={onHandleThumbnail} />}
            {product.img3 && <Thumbnail imgSrc={product.img3} imgAlt={product.name!} onHandleThumbnail={onHandleThumbnail} />}
            {product.img4 && <Thumbnail imgSrc={product.img4} imgAlt={product.name!} onHandleThumbnail={onHandleThumbnail} />}
        </div>
    )
}

export default function ImgSide({ product, className }: DetailProps) {
    const [currentImg, setCurrentImg] = useState<string>(product.img1!)

    return (
        <div className={`${className} grid grid-cols-4 gap-4`}>
            <div className="col-start-1 col-end-2">
                <ThumbnailList product={product} onHandleThumbnail={setCurrentImg} />
            </div>
            <div className="col-start-2 col-end-5">
                <img src={currentImg} alt={product.name} className="h-full w-full object-cover" />
            </div>
        </div>
    )
}