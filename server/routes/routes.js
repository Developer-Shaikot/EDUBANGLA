const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const courseRoute = require("./courseRoute");
const topicRoute = require("./topicRoute");
const profileRoute = require("./profileRoute");

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
		path: "/api/course",
		handler: courseRoute,
	},
	{
		path: "/api/topic",
		handler: topicRoute,
	},
];

module.exports = (app) => {
	routers.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
