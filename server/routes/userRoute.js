const { registerUser, loginUser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.patch("/logout")

module.exports = router;
