import React from "react";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";
import IsLoggedIn from "./IsLoggedIn";
import Course from "./../pages/general/Course";
import Audio from "../pages/blinded/Audio";
import CareerBuildingCourses from "./../pages/buildCareer/CareerBuildingCourses";
import TalkToExperts from "./../pages/buildCareer/TalkToExperts";
import ShareYourOpinion from "./../pages/buildCareer/ShareYourOpinion";
import Contact from "./../pages/support/Contact";
import ViewCourse from "../pages/general/ViewCourse";
import ViewTopic from "../pages/general/ViewTopic";
import ViewContent from "../pages/general/ViewContent";
import Login from "../pages/login/Login";
import Register from "./../pages/register/Register";
import IsAlreadyLoggedIn from "./IsAlreadyLoggedIn";
import Uploads from "../pages/dashboard/Uploads";

const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<IsLoggedIn>
						<Uploads />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/register"
				element={
					<IsAlreadyLoggedIn>
						<Register />
					</IsAlreadyLoggedIn>
				}
			/>
			<Route
				path="/login"
				element={
					<IsAlreadyLoggedIn>
						<Login />
					</IsAlreadyLoggedIn>
				}
			/>
			<Route
				path="/select-courses"
				element={
					<IsLoggedIn>
						<Course />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/view-course"
				element={
					<IsLoggedIn>
						<ViewCourse />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/view-topic"
				element={
					<IsLoggedIn>
						<ViewTopic />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/topic-content"
				element={
					<IsLoggedIn>
						<ViewContent />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/audio-courses"
				element={
					<IsLoggedIn>
						<Audio />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/career-building-courses"
				element={
					<IsLoggedIn>
						<CareerBuildingCourses />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/talk-to-expert"
				element={
					<IsLoggedIn>
						<TalkToExperts />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/share-your-opinion"
				element={
					<IsLoggedIn>
						<ShareYourOpinion />
					</IsLoggedIn>
				}
			/>
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default Routers;
