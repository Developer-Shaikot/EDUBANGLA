import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Header } from "../../components";
import "./Audio.css";

const contents = [
	{
		id: "1",
		title: "Class lecture 1",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674585289/eduBangla/videos/topic-audio-1674585241689_gzy4u7.mp3",
	},
	{
		id: "2",
		title: "Dev Ops",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836694/eduBangla/videos/DevOps_CI_CD_Explained_in_100_Seconds_1_zobi1h.mp3",
	},
	{
		id: "3",
		title: "Computer Science",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836706/eduBangla/videos/Software_Engineering_in_60_seconds_lc8krv.mp3",
	},
	{
		id: "4",
		title: "Brian Cox",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836753/eduBangla/videos/Brian_Cox_explains_quantum_mechanics_in_60_seconds_BBC_News_axwvhu.mp3",
	},
	{
		id: "5",
		title: "Quantum Mechanics",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836753/eduBangla/videos/Brian_Cox_explains_quantum_mechanics_in_60_seconds_BBC_News_axwvhu.mp3",
	},
	{
		id: "6",
		title: "What is Programming language?",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836763/eduBangla/videos/What_is_a_Programming_Language_in_60_seconds_a10etr.mp3",
	},
	{
		id: "7",
		title: "Climate Change",
		audio: "https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836765/eduBangla/videos/Climate_change_in_60_seconds_The_Royal_Society_cw0uxs.mp3",
	},
	{
		id: "8",
		title: "Intro to SWE",
		audio: "",
	},
];

const Audio = () => {
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="BlindED" title="Audio Course" />
			<div className="flex flex-wrap -mx-3 mb-6">
				{contents.map((item) => (
					<div key={item.id} className="w-full md:w-1/2 px-3 mb-6">
						<h3 className="mt-5 mb-3">
							<b>{item.title}</b>
						</h3>
						<AudioPlayer defaultCurrentTime="00.00" defaultDuration="00.00" src={item.audio} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Audio;
