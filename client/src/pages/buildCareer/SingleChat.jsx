import { ediImage, userImage } from "../../constants/images";

function SingleChat({ text = "Hello!", index }) {
	const isEdisChat = index % 2 === 0;

	return (
		<div className="chat-message">
			<div className={`flex items-end ${!isEdisChat && "justify-end"}`}>
				<div
					className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
						isEdisChat ? "order-2 items-start" : "order-1 items-end"
					}`}
				>
					<div>
						<span
							className={`px-4 py-2 rounded-lg inline-block rounded-bl-none ${
								isEdisChat ? "bg-gray-300 text-gray-600" : "bg-blue-600 text-white"
							} `}
						>
							{text}
						</span>
					</div>
				</div>
				<img
					src={isEdisChat ? ediImage : userImage}
					alt="My profile"
					className={`w-6 h-6 rounded-full ${isEdisChat ? "order-1" : "order-2"}`}
				/>
			</div>
		</div>
	);
}

export default SingleChat;
