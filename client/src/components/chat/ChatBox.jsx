import React, { useState } from "react";
import Chat from "./Chat";
import { AiOutlineClose } from "react-icons/ai";
import { useAddChatMutation, useGetChatsQuery } from "../../services/apiSlice";
import Spinner from "./../Spinner";
import { useNavigate } from "react-router-dom";

const ChatBox = ({ closeChat }) => {
	const responseInfo = useGetChatsQuery();
	const [addChat, addChatInfo] = useAddChatMutation();

	const navigate = useNavigate();

	const [text, setText] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addChat({ text }).unwrap();
		setText("");
	};

	return (
		<div className="fixed z-[99999] bottom-40 right-4 rounded-md shadow-lg bg-white text-white w-80 ">
			<div className="relative h-[100%]">
				<div className="bg-[#8b4692] py-3 px-4 rounded-t-lg text-lg flex items-center justify-between">
					<strong>EduBangla</strong>
					<div className="flex items-center gap-2">
						<ExpandIcon onClick={() => navigate("/talk-to-expert")} />
						<AiOutlineClose onClick={closeChat} className="cursor-pointer" />
					</div>
				</div>
				<div className="h-[340px] text-black p-4 overflow-scroll mb-10">
					{responseInfo.isSuccess &&
						responseInfo.data?.chats?.transcript?.map((data, i) => (
							<Chat key={data._id} text={data.text} time={data.time} index={i} />
						))}

					{addChatInfo.isLoading && (
						<Chat
							text={text}
							time={Date.now()}
							index={responseInfo.data?.chats?.transcript.length}
						/>
					)}
				</div>
				<div className="absolute bottom-[-40px] w-[100%] rounded-b-lg p-3 shadow-top flex items-center">
					<form className="w-[100%]" onSubmit={handleSubmit}>
						<input
							disabled={addChatInfo.isLoading}
							required
							value={text}
							onChange={(e) => setText(e.target.value)}
							name="text"
							placeholder="Ask Edi anything..."
							type="text"
							className="w-[100%] p-1 text-black focus:border-none focus:outline-none"
						/>
					</form>
					{addChatInfo.isLoading && <Spinner />}
				</div>
			</div>
		</div>
	);
};

function ExpandIcon({onClick}) {
	return (
		<svg
			onClick={onClick}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-5 h-5 cursor-pointer"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
			/>
		</svg>
	);
}

export default ChatBox;
