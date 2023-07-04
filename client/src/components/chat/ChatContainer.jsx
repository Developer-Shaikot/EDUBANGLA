import React, { useState } from "react";
import "./Chat.css";
import ChatButton from "./ChatButton";
import ChatBox from "./ChatBox";

const ChatContainer = () => {
    const [open, setOpen] = useState(false);

    const toggleChat = () => {
        setOpen(!open)
    }

    const closeChat = () => {
        setOpen(false)
    }

	return (
		<div className="z-60 relative">
			{open && <ChatBox closeChat={closeChat} />}
			<ChatButton open={open} toggleChat={toggleChat} />
		</div>
	);
};

export default ChatContainer;
