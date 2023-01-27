import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useGetClassesQuery } from "../../services/apiSlice";
import ClassCourse from "./ClassCourse";

const Course = () => {
	const responseInfo = useGetClassesQuery();

	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header  category="Classes" title="Class List"  />
			<div className="flex flex-wrap -mx-3 mb-6">
				{responseInfo.isSuccess &&
					responseInfo.data?.class?.map((course, i) => (
						<ClassCourse
							key={i}
							classTitle={course.classTitle}
							classAvatar={course.classAvatar}
						/>
					))}
			</div>
		</div>
	);
};

export default Course;
