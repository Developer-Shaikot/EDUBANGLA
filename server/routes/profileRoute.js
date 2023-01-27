const router = require("express").Router();
const { getProfile, addProfile } = require("../controllers/profileController");
const upload = require("../middlewares/upload");

router.get("/:userId", getProfile);
router.post("/add/:userId", upload.single("profile-pic"), addProfile);

module.exports = router;
