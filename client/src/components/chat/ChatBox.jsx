import React, { useState } from "react";
import Chat from "./Chat";
import { AiOutlineClose } from "react-icons/ai";
import { useAddChatMutation, useGetChatsQuery } from "../../services/apiSlice";
import Spinner from "./../Spinner";

const ChatBox = ({ closeChat }) => {
	const responseInfo = useGetChatsQuery();
	const [addChat, addChatInfo] = useAddChatMutation();

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
					<AiOutlineClose onClick={closeChat} className="cursor-pointer" />
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

export default ChatBox;
