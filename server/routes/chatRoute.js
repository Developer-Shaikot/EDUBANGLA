const router = require("express").Router();
const { getChatController, addChatController } = require("../controllers/chatController");

router.get("/all", getChatController);
router.post("/add", addChatController);

module.exports = router;
