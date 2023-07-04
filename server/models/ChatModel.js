const { model, Schema } = require("mongoose");

const chatSchema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		transcript: [{ text: String, time: Date }],
	},
	{ timestamps: true }
);

module.exports = model("Chat", chatSchema)
