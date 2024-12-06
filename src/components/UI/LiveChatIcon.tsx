import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function LiveChatIcon() {
    const [isBounce, setIsBounce] = useState(true)
    return createPortal(
        <div className="fixed bottom-6 right-7 z-40"
            onClick={() => setIsBounce(prev => !prev)}>
            <FontAwesomeIcon icon={faFacebookMessenger} bounce={isBounce} className="text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer p-1 rounded-full bg-black text-white" />
        </div>
        , document.getElementById('live-chat-icon')!
    )
}
