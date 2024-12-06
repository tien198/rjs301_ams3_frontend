import { createPortal } from 'react-dom';
import classes from './LiveChatBoxModal.module.scss';

interface Props {
    hidden: Boolean

}
function LiveChatBoxModal({ hidden = true }: Props) {
    const hiddenClass = hidden ? 'hidden' : ''
    return createPortal(
        <div className={`${classes['modal']} ${hiddenClass}`}>

        </div>,
        document.getElementById('live-chat-box-modal')!
    );
}

export default LiveChatBoxModal;