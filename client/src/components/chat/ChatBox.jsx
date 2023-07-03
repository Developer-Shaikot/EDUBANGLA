import React from "react";

const ChatBox = () => {
	return (
		<div className="fixed z-20 bottom-40 right-4 rounded-md shadow-lg bg-white text-white w-80 ">
			<div className="relative h-[100%]">
				<div className="bg-[#8b4692] py-3 px-4 rounded-t-lg text-lg">
					<strong>EduBangla</strong>
				</div>
				<div className="h-[360px] text-black p-3">
					<div className="flex gap-2.5">
						<img
							src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1688380355/eduBangla/images/robot-chatbot-icon-sign-free-vector-removebg-preview_apm8sm.png"
							alt="edi"
							className="h-14 w-10 mt-2"
						/>
						<div>
							<div className="mb-2">
								<span className="ml-1">Edi</span>
								<span className="text-sm text-gray-700 ml-3">{`${new Date().getHours()}:${new Date().getMinutes()}`}</span>
							</div>
							<div className="">
								<div className="inline-block bg-[#f0f4f9] p-2 rounded-md text-sm">
									What can I help you with today?
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 w-[100%] rounded-b-lg p-3 shadow-top">
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
