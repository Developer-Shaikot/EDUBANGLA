const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const courseRoute = require("./courseRoute");
const topicRoute = require("./topicRoute");
const profileRoute = require("./profileRoute");
const classRoute = require("./classRoute");
const audioRoute = require("./audioRoute");
const chatRoute = require("./chatRoute");
const topicContentRoute = require("./topicContentRoute");

const routers = [
	{
		path: "/",
		handler: homeRoute,
	},
	{
		path: "/user",
		handler: userRoute,
	},
	{
		path: "/profile",
		handler: profileRoute,
	},
	{
		path: "/class",
		handler: classRoute,
	},
	{
		path: "/course",
		handler: courseRoute,
	},
	{
		path: "/topic",
		handler: topicRoute,
	},

	{
		path: "/topicContent",
		handler: topicContentRoute,
	},
	{
		path: "/audio",
		handler: audioRoute,
	},
	{
		path: "/chat",
		handler: chatRoute,
	},
];

module.exports = (app) => {
	routers.forEach((router) => {
		app.use("/api" + router.path, router.handler);
	});
};
