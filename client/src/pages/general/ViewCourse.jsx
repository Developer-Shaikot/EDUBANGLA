import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

const ViewCourse = () => {
	const navigate = useNavigate();

	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="View Course" title="Course List" />
			<div className="flex flex-wrap -mx-3 mb-2">
            

				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<div
						onClick={() => navigate("/view-topic")}
						className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-6"
					>
						<img
							className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674791363/eduBangla/images/fav_icon_kggp1y.png"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so
								far, in reverse chronological order.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<div
						onClick={() => navigate("/view-topic")}
						className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-6"
					>
						<img
							className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674791363/eduBangla/images/fav_icon_kggp1y.png"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so
								far, in reverse chronological order.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<div
						onClick={() => navigate("/view-topic")}
						className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-6"
					>
						<img
							className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674791363/eduBangla/images/fav_icon_kggp1y.png"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so
								far, in reverse chronological order.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewCourse;
