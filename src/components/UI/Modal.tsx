import { forwardRef, PropsWithChildren, useEffect, useImperativeHandle, useState } from "react";
import classes from './Modal.module.css'
import { createPortal } from "react-dom";

const Modal = forwardRef(
    function ({ children }: PropsWithChildren, ref) {
        const [hidden, setHidden] = useState('hidden')

        const show = () => setHidden('')
        const hide = () => setHidden('hidden')

        useImperativeHandle(ref, () => {
            return {
                open: () => show(),
                close: () => hide()
            }
        })

        useEffect(() => {
            window.addEventListener('keydown', e => {
                if (e.key.toLowerCase() === 'escape')
                    hide()
            })
        }, [])

        return createPortal(
            <div className={hidden}>
                <div className={classes['backdrop']} onClick={hide}></div>
                <div className={classes['modal']}>
                    {children}
                    <div className="flex flex-row-reverse">
                        <button onClick={hide}>Close</button>
                    </div>
                </div>
            </div>,
            document.getElementById('modal')!
        );
    })

export default Modal;