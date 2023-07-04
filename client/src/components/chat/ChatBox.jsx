import React from "react";
import Chat from "./Chat";
import { AiOutlineClose } from "react-icons/ai";

const ChatBox = ({ closeChat }) => {
	return (
		<div className="fixed z-[99999] bottom-40 right-4 rounded-md shadow-lg bg-white text-white w-80 ">
			<div className="relative h-[100%]">
				<div className="bg-[#8b4692] py-3 px-4 rounded-t-lg text-lg flex items-center justify-between">
					<strong>EduBangla</strong>
					<AiOutlineClose onClick={closeChat} className="cursor-pointer" />
				</div>
				<div className="h-[340px] text-black p-4 overflow-scroll mb-10">
					<Chat index={0} />
					<Chat index={1} />
					<Chat index={2} />
					<Chat index={3} />
					<Chat index={4} />
				</div>
				<div className="absolute bottom-[-40px] w-[100%] rounded-b-lg p-3 shadow-top">
					<form className="w-[100%]">
						<input
							placeholder="Ask Edi anything..."
							type="text"
							className="w-[100%] p-1 text-black focus:border-none focus:outline-none"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
