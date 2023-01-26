const router = require("express").Router();
const upload = require("../middlewares/upload");
const { addCourse } = require("../controllers/courseController");

router.post("/add", upload.single("course-img"), addCourse);

module.exports = router;
