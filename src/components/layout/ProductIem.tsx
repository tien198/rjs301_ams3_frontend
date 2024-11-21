import { useAppDispath } from '../../hooks/reduxHooks';
import { show as showAction } from '../../store/modalSlice';
import { setProduct } from '../../store/ProductModalSlice';
import convertToFraction from '../../ultil/convertToFraction';
import { IProduct } from '../../ultil/Models/interfaces/IProduct';
// css
import classes from './ProductItem.module.css'

interface IProductItemProp {
    product: IProduct
}
export default function ProductItem({ product }: IProductItemProp) {

    const dispath = useAppDispath()

    const show = () => {
        dispath(showAction())
        dispath(setProduct(product))
    }

    return (
        <section className={`flex flex-col gap-2 items-center ${classes['product-item']}`}
            onClick={show}>
            <img src={product.img1} alt={product.name} />
            <p>{product.name}</p>
            <span className='text-zinc-500'>{convertToFraction(product.price)} VND</span>
        </section>
    )
}
