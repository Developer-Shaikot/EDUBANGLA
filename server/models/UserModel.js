const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			lowercase: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		designation: String,
		institution: String,
		phone: String,
		user_type: {
			type: String,
			enum: ["student", "teacher", "admin"],
			default: "student",
		},
	},
	{ timestamps: true }
);

module.exports = model("User", userSchema);
