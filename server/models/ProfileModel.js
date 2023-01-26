const { model, Schema } = require("mongoose");

const profileSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		profilePicture: String,
		about: String,
		email: {
			type: String,
			lowercase: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Profile", profileSchema);
