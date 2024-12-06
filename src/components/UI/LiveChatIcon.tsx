import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { createPortal } from "react-dom";
import LiveChatBoxModal from "./LiveChatBoxModal";

export default function LiveChatIcon() {
    const [isBounce, setIsBounce] = useState(true)
    const [isLiveChatHidden, setIsLiveChatHidden] = useState(true)
    function showLiveChat() {
        setIsBounce(prev => !prev)
        setIsLiveChatHidden(prev => !prev)
    }
    return createPortal(
        <>
            <LiveChatBoxModal hidden={isLiveChatHidden} />
            <div className="fixed bottom-6 right-7 z-50"
                onClick={showLiveChat}>
                <FontAwesomeIcon icon={faFacebookMessenger} bounce={isBounce} className="text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer p-1 rounded-full bg-black text-white" />
            </div>
        </>
        , document.getElementById('live-chat-icon')!
    )
}
