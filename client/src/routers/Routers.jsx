import React from 'react';
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";
import IsLoggedIn from "./IsLoggedIn";



const Routers = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={

						<Dashboard />

					}
				/>
				<Route
					path="/login"
					element={
						<Login />
					}
				/>
				<Route
					path="/select-course"
					element={

						<Course />

					}
				/>
				<Route
					path="/audio-course"
					element={

						<Audio />

					}
				/>
				<Route
					path="/career-building-courses"
					element={

						<CareerBuildingCourses />

					}
				/>
				<Route
					path="/talk-to-expert"
					element={

						<TalkToExperts />

					}
				/>
				<Route
					path="/share-your-opinion"
					element={

						<ShareYourOpinion />

					}
				/>
				<Route
					path="/contacts"
					element={
						<Contacts/>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default Routers;