import React from "react";
import { format } from "date-fns";
import { ediImage, userImage } from "../../constants/images";

const Chat = ({ index, time = new Date.now(), text }) => {
	const isEdisChat = index % 2 === 0;

	return (
		<div className={`flex gap-2.5 mb-4 ${isEdisChat ? "float-left" : "float-right"}`}>
			<img
				src={isEdisChat ? ediImage : userImage}
				alt="user"
				className={`h-12 w-22 mt-2 ${isEdisChat ? "order-1" : "order-2"}`}
			/>
			<div className={isEdisChat ? "order-2" : "order-1"}>
				<div className={`mb-1 flex gap-1 items-center ${!isEdisChat && "justify-end"}`}>
					<span className={`ml-1 text-sm ${isEdisChat ? "order-1" : "order-2"}`}>
						{isEdisChat ? "Edi" : "You"}
					</span>
					<span
						className={`text-[12px] text-gray-700 mt-[1px] ${
							isEdisChat ? "order-2" : "order-1"
						}`}
					>{`${format(new Date(time), "p")}`}</span>
				</div>
				<div
					className={`inline-block ${
						isEdisChat ? "bg-[#f0f4f9]" : "bg-[#0084ff] text-white float-right"
					} p-2 rounded-md text-sm`}
				>
					{text}
				</div>
			</div>
		</div>
	);
};

export default Chat;
