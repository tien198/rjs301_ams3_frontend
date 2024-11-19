import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispath, useAppSelector } from "../../hooks/reduxHooks";
import { hide as hideAction } from "../../store/modalSlice";
// css
import classes from './Modal.module.css'

function Modal({ children }: PropsWithChildren) {
    const hidden = useAppSelector(({ modal }) => modal.hiddenClass)
    const hiddenDispath = useAppDispath()

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
            <div className={`${classes['modal']} `}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;