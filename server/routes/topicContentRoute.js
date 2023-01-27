const router = require("express").Router();
const upload = require("../middlewares/upload");
const { addTopicContent, getTopicContent } = require("../controllers/topicContentController");

router.get("/", getTopicContent);
router.post(
	"/add",
	upload.fields([
		{ name: "topic-img", maxCount: 1 },
		{ name: "topic-video", maxCount: 1 },
		{ name: "topic-audio", maxCount: 1 },
	]),
	addTopicContent
);

module.exports = router;
