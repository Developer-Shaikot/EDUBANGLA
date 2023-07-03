import React from "react";

const ChatIcon = ({ open }) =>
	open ? (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-7 h-7"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	) : (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-7 h-7"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
			/>
		</svg>
	);

const ChatButton = ({ open, toggleChat }) => {
	return (
		<div
			onClick={toggleChat}
			className="w-[54px] h-[54px] fixed bottom-20 right-4 z-10 bg-[#8b4692] rounded-full flex justify-center text-white items-center cursor-pointer"
		>
			<ChatIcon open={open} />
		</div>
	);
};

export default ChatButton;
