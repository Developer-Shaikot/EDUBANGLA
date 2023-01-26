const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
	{
		courseName: {
			type: String,
			trim: true,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		course_type: {
			type: String,
			required: true,
			enum: ["general", "blind"],
			default: "general",
		},
		courseImg: String,
		courseImgCloudinaryId: String,
	},
	{ timestamps: true }
);

module.exports = model("Course", courseSchema);
