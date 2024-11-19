import { PropsWithChildren, useEffect } from "react";
import classes from './Modal.module.css'
import { createPortal } from "react-dom";
import { useAppDispath, useAppSelector } from "../../hooks/reduxHooks";
import { show as showAction, hide as hideAction } from "../../store/modalSlice";

function Modal({ children }: PropsWithChildren) {
    const hidden = useAppSelector(({ modal }) => modal.hiddenClass)
    const hiddenDispath = useAppDispath()

    const show = () => hiddenDispath(showAction())
    const hide = () => hiddenDispath(hideAction())

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key.toLowerCase() === 'escape')
                hide()
        })
    }, [])

    return createPortal(
        <div className={hidden}>
            <div className={classes['backdrop']} onClick={hide}></div>
            <div className={`${classes['modal']} overflow-auto h-96`}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;