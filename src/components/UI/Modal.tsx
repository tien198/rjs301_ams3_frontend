import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { hide as hideAction, setHideClass as fadingHide } from "../../store/modalSlice";
// css
import classes from './Modal.module.css'

function Modal({ children }: PropsWithChildren) {
    const hidden = useAppSelector(({ modal }) => modal.hiddenClass)
    const dispath = useAppDispatch()

    const hide = () => {
        dispath(fadingHide(classes['fading-hidden']))
        setTimeout(() => {
            dispath(hideAction())
        }, 300);
    }

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