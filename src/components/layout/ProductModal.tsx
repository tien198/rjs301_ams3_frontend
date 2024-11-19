import { useAppSelector } from "../../hooks/reduxHooks";
import Modal from "../UI/Modal";

function ProductModal() {

    const prodState = useAppSelector(({ productModal }) => productModal.product)
    return (
        <Modal >
            <div className="grid md:grid-cols-2 items-center gap-4 ">
                <img src={prodState.img1} alt={prodState.name}
                    className="w-full" />
                <div className="flex flex-col justify-center gap-4">
                    <h6>{prodState.name}</h6>
                    <p>{prodState.price}</p>
                    <div className="overflow-auto h-3/5">
                        <p>{prodState.long_desc}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProductModal;