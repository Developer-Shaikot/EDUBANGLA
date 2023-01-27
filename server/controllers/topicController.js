const expressAsyncHandler = require("express-async-handler");
const Topic = require("../models/TopicModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addTopic = expressAsyncHandler(async (req, res) => {
	const newTopic = await new Topic(req.body).save();

	res.status(201).json({
		success: true,
		message: "New topic added successfully",
		topic: newTopic,
	});
});

exports.getTopics = expressAsyncHandler(async (req, res) => {
	const { courseId } = req.params;
	const topic = await Topic.find({ course: courseId });

	res.status(201).json({
		success: true,
		message: "New topic added successfully",
		topic: topic,
	});
});
