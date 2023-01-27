import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useViewCoursesQuery } from "../../services/apiSlice";
import ViewCourseContent from "./ViewCourseContent";

const ViewCourse = () => {
	const getCourseInfo = useViewCoursesQuery();
	console.log(getCourseInfo);
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<div className="flex flex-wrap -mx-3 mb-2">
				{getCourseInfo.isLoading ? (
					<Loading />
				) : (
					getCourseInfo.data?.courses.map((course) => (
						<ViewCourseContent
							courseImg={course.courseImg}
							courseTitle={course.courseName}
							courseBody={course.description}
							courseId={course._id}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default ViewCourse;
