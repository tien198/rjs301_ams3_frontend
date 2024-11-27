import { LoaderFunctionArgs } from "react-router-dom";
import ProductsContainer from "../../components/layout/ProductsContainer";
import store from "../../store";

interface Props {
    className?: string
}
export default function RelatedProducts({ className }: Props) {

    return (
        <div className={className}>
            <h4 className="text-2xl uppercase">Related Products</h4>
            <ProductsContainer >
                <div>
                    <button className="text-xl text-red-600 mt-6">Add Related Products in here (don't forget)</button>
                    <p className="text-zinc-500 italic">Reuse `ProductContainer` in `Home`</p>

                </div>
            </ProductsContainer>
        </div>
    );
}

export function relatedoader(args: LoaderFunctionArgs) {
    const related = store.getState().fetchedProducts.products.filter(i => i.category)

}