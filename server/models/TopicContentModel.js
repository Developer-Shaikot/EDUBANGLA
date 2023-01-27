const { Schema, model } = require("mongoose");

const topicContentModel = new Schema(
	{
		topic: {
			type: Schema.Types.ObjectId,
			ref: "Topic",
		},
		teacherName: String,
		topicName: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		topicVideo: String,
		topicVideoCloudinaryId: String,
		views: Number,
	},
	{ timestamps: true }
);

module.exports = model("TopicContent", topicContentModel);
