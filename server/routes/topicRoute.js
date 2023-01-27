const router = require("express").Router();
const { addTopic, getTopics } = require("../controllers/topicController");

router.get("/", getTopics);
router.post("/add", addTopic);

module.exports = router;
