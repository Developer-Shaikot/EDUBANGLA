const router = require("express").Router();
const upload = require("../middlewares/upload");
const { addTopic } = require("../controllers/topicController");

router.post(
	"/add",
	upload.fields([
		{ name: "topic-img", maxCount: 1 },
		{ name: "topic-video", maxCount: 1 },
		{ name: "topic-audio", maxCount: 1 },
	]),
	addTopic
);

module.exports = router;
