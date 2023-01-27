const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const courseRoute = require("./courseRoute");
const topicRoute = require("./topicContentRoute");
const profileRoute = require("./profileRoute");
const classRoute = require("./classRoute");
const audioRoute = require("./audioRoute");

const routers = [
	{
		path: "/",
		handler: homeRoute,
	},
	{
		path: "/api/user",
		handler: userRoute,
	},
	{
		path: "/api/profile",
		handler: profileRoute,
	},
	{
		path: "/api/class",
		handler: classRoute,
	},
	{
		path: "/api/course",
		handler: courseRoute,
	},
	{
		path: "/api/topic",
		handler: topicRoute,
	},
	{
		path: "/api/audio",
		handler: audioRoute,
	},
];

module.exports = (app) => {
	routers.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
