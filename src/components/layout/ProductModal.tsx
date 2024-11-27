import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../hooks/reduxHooks";
import convertToFraction from "../../ultil/convertToFraction";
import Modal from "../UI/Modal";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { PageUrlsList } from "../../ultil/UltilEnums";

function ProductModal() {
    const prodState = useAppSelector(({ productModal }) => productModal.product)
    const navigate = useNavigate()
    function navigateToDetail(productId: string) {
        navigate(`${PageUrlsList.Detail}/${productId}`)
    }
    return (
        <Modal >
            <div className="grid md:grid-cols-2 justify-center items-center gap-4 py-4">
                <img src={prodState.img1} alt={prodState.name}
                    className="h-52 md:h-auto" />
                <div className="flex flex-col gap-2 md:gap-4">
                    <h6 className="text-2xl font-semibold">{prodState.name}</h6>
                    <p className="text-xl text-zinc-600">{convertToFraction(prodState.price)}</p>
                    <div className=" overflow-auto max-h-80 md:max-h-96">
                        <p>{prodState.short_desc}</p>
                    </div>
                    <div>
                        <button onClick={() => navigateToDetail(prodState._id?.$oid!)} className="py-4 pl-5 pr-8 text-white bg-slate-800">
                            <FontAwesomeIcon icon={faCartShopping} className="mr-4" />
                            View Detail
                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    );
}

export default ProductModal;