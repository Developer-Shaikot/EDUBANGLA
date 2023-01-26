const expressAsyncHandler = require("express-async-handler");
const Course = require("../models/CourseModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addCourse = expressAsyncHandler(async (req, res) => {
	const courseImg = req.file?.path;

	let result = {};
	if (courseImg) {
		result = await cloudinary.uploader.upload(courseImg, {
			folder: "eduBangla/images",
		});
	}

	const newCourse = await new Course({
		...req.body,
		courseImg: result.secure_url || "",
		courseImgCloudinaryId: result.public_id || "",
	}).save();

	res.status(201).json({
		success: true,
		message: "New course added successfully",
		topic: newCourse,
	});
});
