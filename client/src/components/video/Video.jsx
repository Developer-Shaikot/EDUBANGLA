import React from "react";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

const Video = ({ title, src, description }) => {
	return (
		<div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
			<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
				<div className="w-full h-auto max-w-full">
					<Player>
						<source src={src} type="video/mp4" />
					</Player>
				</div>
				<div className="flex w-full justify-between mb-2 p-3">
					<div className="w-full px-3 mb-6 mt-5 p-2 md:mb-0">
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
