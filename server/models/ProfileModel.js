const { model, Schema } = require("mongoose");

const profileSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		profilePicture: String,
		profilePictureCloudinaryId: String,
		about: String,
		email: {
			type: String,
			lowercase: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Profile", profileSchema);
