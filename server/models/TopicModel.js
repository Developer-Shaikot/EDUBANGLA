const { Schema, model } = require("mongoose");

const topicSchema = new Schema(
	{
		course: {
			type: Schema.Types.ObjectId,
			ref: "Course",
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

module.exports = model("Topic", topicSchema);
