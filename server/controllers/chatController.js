const expressAsyncHandler = require("express-async-handler");
const Chat = require("../models/ChatModel");
const { runCompletion } = require("../utils/openAiHandler");

exports.getChatController = expressAsyncHandler(async (req, res) => {
	const { userId } = req.cookies;

	if (!userId) return res.status(500).json({ message: "User id not found" });

	const isExist = await Chat.findOne({ userId });

	if (!isExist) {
		await new Chat({
			userId,
			transcript: [{ text: "What can I help you with today?", time: Date.now() }],
		}).save();
	}

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
	const { text } = req.body;

	if (!userId) return res.status(500).json({ message: "User id not found!" });
	const result = await runCompletion(text);

	const newTranscripts = [
		{ text, time: Date.now() },
		{ text: result, time: Date.now() },
	];

	const newChat = await Chat.findOneAndUpdate(
		{ userId },
		{ $push: { transcript: { $each: newTranscripts } } },
		{ upsert: true, new: true }
	);

	if (newChat) {
		return res.status(201).json({ message: "Chat content added", chat: newChat });
	}
	res.status(500).json({ message: "Chat not added" });
});
