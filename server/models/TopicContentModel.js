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
		topicImg: String,
		topicImgCloudinaryId: String,
		topicVideo: String,
		topicVideoCloudinaryId: String,
		topicAudio: String,
		topicAudioCloudinaryId: String,
	},
	{ timestamps: true }
);

module.exports = model("TopicContent", topicContentModel);
