const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const { generateToken, verifyToken } = require("../controllers/jwtController");

exports.registerUser = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const isEmailExits = await User.exists({ email });

	if (isEmailExits) {
		return res.status(401).json({
			success: false,
			message: "Email already in use",
		});
	}

	const hashedPass = await bcrypt.hash(password, 10);

	const newUser = await new User({ ...req.body, password: hashedPass }).save();

	res.status(201).json({
		success: true,
		message: "User created successfully",
		user: newUser,
	});
});

exports.loginUser = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select("name email user_type +password");

	if (user) {
		const isPswMatch = await bcrypt.compare(password, user.password);

		if (isPswMatch) {
			const token = generateToken({
				id: user._id,
				email: user.email,
				user_type: user.user_type,
			});

			// res.cookie("userId", user._id);
			res.cookie("userId", user._id, {
				maxAge: 6 * 60 * 60 * 1000, // 6 hour
				secure: process.env.NODE_ENV === "production" ? true : false,
				sameSite: process.env.NODE_ENV === "production" ? "none" : false,
			});

			// set httpOnly auth cookie to browser
			res.cookie("auth", token, {
				maxAge: 26 * 60 * 60 * 1000, // 6 hour
				secure: process.env.NODE_ENV === "production" ? true : false,
				httpOnly: process.env.NODE_ENV === "production" ? true : false,
				sameSite: process.env.NODE_ENV === "production" ? "none" : false,
			});

			return res.status(200).json({
				success: true,
				message: "Login successful!",
				token,
			});
		}
		return res.status(401).json({
			success: false,
			message: "Wrong credentials!",
		});
	}

	res.status(401).json({
		success: false,
		message: "Wrong credentials!",
	});
});

exports.logoutUser = expressAsyncHandler(async (req, res) => {
	res.cookie("auth", "", {
		maxAge: -1,
		secure: process.env.NODE_ENV === "production" ? true : false,
		httpOnly: process.env.NODE_ENV === "production" ? true : false,
		sameSite: process.env.NODE_ENV === "production" ? "none" : false,
	});
	res.status(200).json({
		success: true,
		message: "Logout successful",
	});
});

exports.isLoggedIn = expressAsyncHandler(async (req, res) => {
	if (req.cookies && req.cookies.auth) {
		return res.status(200).json({
			status: true,
			user: verifyToken(req.cookies.auth),
		});
	}

	return res.status(200).json({
		status: false,
		user: null,
	});
});

exports.getLoggedInUser = expressAsyncHandler(async (req, res) => {
	const token = req.cookies.auth;
	const user = verifyToken(token);

	if (user) {
		const userInfo = await User.findById(user.id);
		return res.status(200).json({
			status: true,
			user: userInfo,
		});
	}

	res.status(200).json({
		status: false,
		user: null,
	});
});

exports.isTeacher = expressAsyncHandler(async (req, res) => {
	const user = verifyToken(req.cookies?.auth);

	if (user.user_type === "teacher") {
		return res.status(200).json({
			success: true,
			message: "Current user is teacher",
		});
	}
	res.status(200).json({
		success: false,
		message: "Current user is not teacher",
	});
});

exports.logoutController = (req, res) => {
	res.clearCookie("auth");
	res.status(200).json({ success: true, message: "Logout successful" });
};
