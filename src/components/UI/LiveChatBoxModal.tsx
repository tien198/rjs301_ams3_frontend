import { createPortal } from 'react-dom';
import classes from './LiveChatBoxModal.module.scss';

interface Props {
    displayClass?: string
}
function LiveChatBoxModal({ displayClass = 'hidden' }: Props) {
    return createPortal(
        <div className={`${classes['modal']} ${displayClass}`}>

        </div>,
        document.getElementById('live-chat-box-modal')!
    );
}

export default LiveChatBoxModal;