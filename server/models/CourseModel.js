const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
	{
		class: {
			type: Schema.Types.ObjectId,
			ref: "Class",
			required: true,
		},
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
