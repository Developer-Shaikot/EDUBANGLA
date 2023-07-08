import { AiOutlineCloudUpload } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import { FaFileAudio } from "react-icons/fa";
import { MdOutlineContacts, MdOutlinePostAdd, MdWorkOutline, MdHome } from "react-icons/md";
import { GiTalk } from "react-icons/gi";

export const links = [
	{
		title: "Dashboard",
		links: [
			{
				name: "Upload Content",
				route: "",
				icon: <AiOutlineCloudUpload />,
			},
		],
	},

	{
		title: "General",
		links: [
			{
				name: "Home",
				route: "",
				icon: <MdHome />,
			},
			{
				name: "Select Classes",
				route: "select-courses",
				icon: <GoFileSubmodule />,
			},
		],
	},

	{
		title: "Blinded",
		links: [
			{
				name: "Audio Courses",
				route: "audio-courses",
				icon: <FaFileAudio />,
			},
		],
	},

	{
		title: "Build-Carrier",
		links: [
			{
				name: "Career Building Courses",
				route: "career-building-courses",
				icon: <MdWorkOutline />,
			},
			{
				name: "Talk To Experts",
				route: "talk-to-expert",
				icon: <GiTalk />,
			},
			{
				name: "Share Your Opinion",
				route: "share-your-opinion",
				icon: <MdOutlinePostAdd />,
			},
		],
	},

	{
		title: "Support",
		links: [
			{
				name: "Contacts",
				route: "contact",
				icon: <MdOutlineContacts />,
			},
		],
	},
];
