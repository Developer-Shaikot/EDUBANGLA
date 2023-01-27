import React from 'react';
import { Header } from '../../components';

const Audio = () => {
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="BlindED" title="Audio Course" />
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674585289/eduBangla/videos/topic-audio-1674585241689_gzy4u7.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674585289/eduBangla/videos/topic-audio-1674585241689_gzy4u7.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6 ">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<audio controls>
						<source src="horse.ogg" type="audio/ogg" />
						<source src="horse.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</div>
	);
};

export default Audio;