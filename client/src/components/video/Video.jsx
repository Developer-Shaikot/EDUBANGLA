import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const Video = ({title, src, views}) => {
	return (
		<div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
				<video className="w-full h-auto max-w-full" controls>
					<source
						src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674585276/eduBangla/videos/topic-video-1674585241651_g30a5q.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full md:w-1/2 px-3 mb-6 mt-5 p-2 md:mb-0">
						<h2>Title</h2>
						<p>Your browser does not support the video tag.</p>
					</div>

					<div className="w-full md:w-1/2 px-3 mb-6 mt-5 p-2 md:mb-0">
						<AiOutlineLike />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
