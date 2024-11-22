import { useEffect, useRef, useState } from "react";
import { useAppDispath } from "../../hooks/reduxHooks";
import { show as showAction } from "../../store/modalSlice";
import { setProduct } from "../../store/productModalSlice";
import convertToFraction from "../../ultil/convertToFraction";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
// css
import classes from "./ProductItem.module.css";

interface IProductItemProp {
  product: IProduct;
  className?: string;
}
export default function ProductItem({ product, className }: IProductItemProp) {
  const dispath = useAppDispath();
  const [hidden, setHidden] = useState("hidden");
  const imgRef = useRef<HTMLImageElement>(null);

  const show = () => {
    dispath(showAction());
    dispath(setProduct(product));
  };
  useEffect(() => {
    if (imgRef.current?.complete) setHidden("");
    else
      imgRef.current?.addEventListener("load", () => {
        setHidden("");
      });
  }, [hidden]);

  return (
    <section
      className={`flex flex-col gap-2 items-center 
        ${classes["product-item"]} 
        ${classes["fade-out"]}
        ${hidden} 
        ${className}`}
      onClick={show}
    >
      <img
        ref={imgRef}
        src={product.img1}
        alt={product.name}
        className="object-contain"
      />
      <p>{product.name}</p>
      <span className="text-zinc-500">
        {convertToFraction(product.price)} VND
      </span>
    </section>
  );
}
