import { useAppDispath } from "../../hooks/reduxHooks";
import { show as showAction } from "../../store/modalSlice";
import { setProduct } from "../../store/productModalSlice";
import convertToFraction from "../../ultil/convertToFraction";
import { IProduct } from "../../ultil/Models/interfaces/IProduct";
import { Fallback } from "./Fallback";
// css
import classes from "./ProductItem.module.css";

interface DetailProps {
  product: IProduct;
  className?: string;
  isFallback?: boolean;
}
export default function ProductItem({ product, className, isFallback = false }: DetailProps) {
  const dispath = useAppDispath();

  const show = () => {
    dispath(showAction());
    dispath(setProduct(product));
  };

  return (
    <section
      className={`flex flex-col gap-2 h-full justify-between items-center text-center
        ${classes["product-item"]} 
        ${classes["fade-out"]}
        ${className}`}
      onClick={show}>
      {isFallback
        ? <Fallback className={classes['img']} />
        : <img src={product.img1} alt={product.name}
          className={`object-contain ${classes['img']}`} />
      }
      <p>{isFallback ?
        product.name
        : product.name}</p>
      <span className="text-zinc-500">
        {isFallback ?
          <Fallback />
          : convertToFraction(product.price)} VND
      </span>
    </section>
  );
}
