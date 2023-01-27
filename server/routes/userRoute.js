const router = require("express").Router();
const {
	registerUser,
	loginUser,
	getLoggedInUser,
	logoutController,
	isLoggedIn,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getLoggedInUser);
router.get("/isLoggedIn", isLoggedIn);
router.patch("/logout", logoutController);

module.exports = router;
