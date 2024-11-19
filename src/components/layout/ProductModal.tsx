import { forwardRef } from "react";
import Modal from "../UI/Modal";

const ProductModal = forwardRef(
    function (props, ref) {

        return (
            <Modal ref={ref}>

            </Modal>
        );
    })

export default ProductModal;