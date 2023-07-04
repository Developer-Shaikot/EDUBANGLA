const expressAsyncHandler = require("express-async-handler");
const Chat = require("../models/ChatModel");

exports.getChatController = expressAsyncHandler(async (req, res) => {
	const { userId } = req.cookies;

	if (!userId) return res.status(500).json({ message: "User id not found" });

	const chats = await Chat.findOne({ userId });

	if (chats) {
		return res.status(200).json({
			message: "Chats found",
			chats,
		});
	}

	res.status(404).json({
        userId,
		message: "Chats not found",
	});
});

exports.addChatController = expressAsyncHandler(async (req, res) => {
	const { userId } = req.cookies;

	if (!userId) return res.status(500).json({ message: "User id not found!" });

	const isExist = await Chat.findOne({ userId });

	if (!isExist) {
		await new Chat({ userId }).save();
	}

	const newTranscript = { text: req.body.text, time: Date.now() };

	const newChat = await Chat.findOneAndUpdate(
		{ userId },
		{ $push: { transcript: newTranscript } },
		{ upsert: true, new: true }
	);

	if (newChat) {
		return res.status(201).json({ message: "Chat content added", chat: newChat });
	}
	res.status(500).json({ message: "Chat not added" });
});
