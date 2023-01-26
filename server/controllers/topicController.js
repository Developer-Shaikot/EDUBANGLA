const expressAsyncHandler = require("express-async-handler");
const Topic = require("../models/TopicModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addTopic = expressAsyncHandler(async (req, res) => {
	const results = await Promise.all([
		handleUpload(req, "topic-img", "images"),
		handleUpload(req, "topic-video", "videos"),
		handleUpload(req, "topic-audio", "videos"),
	]);

	let imgRes, vidRes, audRes;

	results.forEach((result) => {
		if (result.resource_type === "image") {
			imgRes = result;
		} else if (result.is_audio) {
			audRes = result;
		} else {
			vidRes = result;
		}
	});

	const newTopic = await new Topic({
		...req.body,
		topicImg: imgRes ? imgRes.secure_url : "",
		topicImgCloudinaryId: imgRes ? imgRes.public_id : "",
		topicVideo: vidRes ? vidRes.secure_url : "",
		topicVideoCloudinaryId: vidRes ? vidRes.public_id : "",
		topicAudio: audRes ? audRes.secure_url : "",
		topicAudioCloudinaryId: audRes ? audRes.public_id : "",
	}).save();

	res.status(201).json({
		success: true,
		message: "New topic added successfully",
		topic: newTopic,
	});
});

const handleUpload = expressAsyncHandler((req, type, folderName) => {
	if (req.files?.[type]?.[0]) {
		return cloudinary.uploader.upload(req.files[type][0].path, {
			resource_type: folderName.slice(0, -1),
			folder: "eduBangla/" + folderName,
		});
	}
	return false;
});
