import React, { useState } from "react";
import "./Chat.css";
import ChatButton from "./ChatButton";
import ChatBox from "./ChatBox";

const ChatContainer = () => {
    const [open, setOpen] = useState(false);

    const toggleChat = () => {
        setOpen(!open)
    }

	return (
		<div>
			{open && <ChatBox />}
			<ChatButton open={open} toggleChat={toggleChat} />
		</div>
	);
};

export default ChatContainer;
