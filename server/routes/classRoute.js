const router = require("express").Router();
const { addClass } = require("../controllers/classController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

router.get("/", getClasses);
router.post("/add", verifyToken, addClass);

module.exports = router;
