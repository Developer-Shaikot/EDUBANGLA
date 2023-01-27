import React from "react";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";
// import IsLoggedIn from "./IsLoggedIn";
import Course from "./../pages/general/Course";
import Academy from "./../pages/dashboard/Academy";
import Audio from "../pages/blinded/Audio";
import CareerBuildingCourses from "./../pages/buildCareer/CareerBuildingCourses";
import TalkToExperts from "./../pages/buildCareer/TalkToExperts";
import ShareYourOpinion from "./../pages/buildCareer/ShareYourOpinion";
import Contact from "./../pages/support/Contact";
import ViewCourse from "../pages/general/ViewCourse";
import ViewTopic from "../pages/general/ViewTopic";
import ViewContent from "../pages/general/ViewContent";

const Routers = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Academy />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/select-courses" element={<Course />} />
				<Route path="/view-course" element={<ViewCourse />} />
				<Route path="/view-topic" element={<ViewTopic />} />
				<Route path="/topic-content" element={<ViewContent />} />
				<Route path="/audio-courses" element={<Audio />} />
				<Route path="/career-building-courses" element={<CareerBuildingCourses />} />
				<Route path="/talk-to-expert" element={<TalkToExperts />} />
				<Route path="/share-your-opinion" element={<ShareYourOpinion />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default Routers;
