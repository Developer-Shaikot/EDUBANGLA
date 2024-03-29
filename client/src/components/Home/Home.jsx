import robot from "./../../assets/images/robot.gif";
import Educative from "./../../assets/images/Online learning.gif";
import WhyChooseBG from "./../../assets/images/WhyChoose.svg";
import EduAvatar from "./../../assets/images/EduAavatar.svg";
import BookAvatar from "./../../assets/images/BookAvatar.svg";
import vector from "./../../assets/images/Group 119.svg";
import bestEdu from "./../../assets/images/bestEdu.svg";
import timerPart from "./../../assets/images/timerPart.svg";
import learnEdu from "./../../assets/images/educative.gif";
import careerBuildingImg from "./../../assets/images/career-building.png";
import classesImg from "./../../assets/images/classes.png";
import coursesImg from "./../../assets/images/courses.png";
import { useStateContext } from "../../contexts/ContextProvider";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const contents = [
	{
		id: "1",
		heading: "All Classes",
		description:
			"The Classes typically refer to educational or instructional sessions that are pre-recorded and made available for users to access at their convenience. These classes can cover a wide range of subjects, such as academic courses.",
		image: classesImg,
		path: "select-courses",
	},
	{
		id: "2",
		heading: "Audio Courses",
		description:
			"The Audio courses are structured educational programs that are designed to provide comprehensive instruction on a particular subject to the specific categories of students. This is often more in-depth and extensive compared to individual classes.",
		image: coursesImg,
		path: "audio-courses",
	},
	{
		id: "3",
		heading: "Career Building",
		description:
			"Career-building courses is an educational program or series of classes specifically designed to help individuals develop the skills, knowledge, and competencies necessary for advancing their careers.",
		image: careerBuildingImg,
		path: "career-building-courses",
	},
];

const Home = () => {
	const { activeMenu } = useStateContext();
	const navigate = useNavigate();

	return (
		<div
			style={{
				position: "relative",
				backgroundColor: "#fff",
				width: "100%",
				height: "6251px",
				textAlign: "left",
				fontSize: "20px",
				color: "#000",
				fontFamily: "Poppins",
				marginTop: "2px",
			}}
			className="shadow-md"
		>
			{!activeMenu && (
				<img
					style={{
						position: "absolute",
						top: "222px",
						left: "565px",
						width: "136px",
						height: "155px",
						objectFit: "cover",
					}}
					alt=""
					src={robot}
				/>
			)}
			<div
				style={{
					position: "absolute",
					top: "834px",
					left: "4%",
					borderRadius: "3px 3px 0px 0px",
					backgroundColor: "#fff",
					borderTop: "2px solid #a855f7",
					borderRight: "2px solid #a855f7",
					borderLeft: "2px solid #a855f7",
					boxSizing: "border-box",
					width: "27%",
					height: "128px",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "833px",
					left: "66%",
					borderRadius: "3px 3px 0px 0px",
					backgroundColor: "#fff",
					borderTop: "2px solid #a855f7",
					borderRight: "2px solid #a855f7",
					borderLeft: "2px solid #a855f7",
					boxSizing: "border-box",
					width: "27%",
					height: "129px",
				}}
			/>
			<div
				className="text-center"
				style={{
					position: "absolute",
					top: "860px",
					left: "10.3%",
					fontSize: "32px",
					fontWeight: "600",
				}}
			>
				Academic <br /> Courses
			</div>
			<div
				style={{
					position: "absolute",
					top: "861px",
					left: "69%",
					fontSize: "30px",
					fontWeight: "600",
					textAlign: "center",
					display: "inline-block",
					width: "240px",
					height: "73px",
				}}
			>
				Career Building Courses
			</div>
			<div
				style={{
					position: "absolute",
					top: "834px",
					left: "35%",
					borderRadius: "3px 3px 0px 0px",
					backgroundColor: "#fff",
					borderTop: "2px solid #a855f7",
					borderRight: "2px solid #a855f7",
					borderLeft: "2px solid #a855f7",
					boxSizing: "border-box",
					width: "27%",
					height: "128px",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "875px",
					left: "38%",
					fontSize: "32px",
					fontWeight: "600",
					display: "inline-block",
					width: "250px",
					height: "45px",
				}}
			>
				Audio Courses
			</div>
			<b
				style={{
					position: "absolute",
					top: "4%",
					left: "calc(50% - 45%)",
					fontSize: "90px",
					fontFamily: "Montserrat",
					color: "#a855f7",
				}}
			>
				<span>Edu</span>
				<span style={{ color: "#292345" }}>Bangla</span>
			</b>
			<b
				style={{
					position: "absolute",
					top: "27%",
					left: "10%",
					fontSize: "64px",
					display: "inline-block",
					fontFamily: "Montserrat",
					color: "#292345",
					width: "546px",
				}}
			>
				Best Education
			</b>
			<div
				style={{
					position: "absolute",
					top: "6.3%",
					left: "5.8%",
					fontSize: "28px",
					fontWeight: "600",
					fontFamily: "Montserrat",
					color: "#292345",
					display: "inline-block",
					width: "539px",
					height: "34px",
				}}
			>
				A learning app based on Quality and Blind education
			</div>
			<button
				style={{
					cursor: "pointer",
					border: "none",
					padding: "0",
					backgroundColor: "transparent",
					position: "absolute",
					top: "8%",
					left: "6%",
					borderRadius: "3px",
					background: "linear-gradient(180deg, #a855f7 11.64%, rgba(215, 85, 247, 0.62))",
					width: "144px",
					height: "47px",
					color: "white",
				}}
			>
				See More
			</button>
			<div
				style={{
					position: "absolute",
					top: "2892px",
					left: "365px",
					width: "172px",
					height: "47px",
					fontSize: "16px",
					color: "#fff",
				}}
			>
				<button
					style={{
						cursor: "pointer",
						border: "none",
						padding: "0",
						backgroundColor: "transparent",
						position: "absolute",
						top: "0px",
						left: "0px",
						borderRadius: "3px",
						background:
							"linear-gradient(180deg, #a855f7 11.64%, rgba(215, 85, 247, 0.62))",
						width: "172px",
						height: "47px",
					}}
				>
					Enroll Now
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					top: "79.2%",
					left: "57.5%",
					fontSize: "16px",
					fontWeight: "600",
					color: "#fff",
					display: "inline-block",
					width: "82px",
					height: "27px",
				}}
			>
				See More
			</div>
			<img
				style={{
					position: "absolute",
					top: "182px",
					left: "57%",
					width: "40%",
					objectFit: "cover",
				}}
				alt=""
				src={Educative}
			/>
			<img
				style={{
					position: "absolute",
					top: "962px",
					width: "100%",
				}}
				alt=""
				src={WhyChooseBG}
			/>
			<div
				style={{
					position: "absolute",
					top: "1110px",
					left: "50%",
					translate: "-50%",
					borderRadius: "5px",
					backgroundColor: "#a855f7",
					width: "484px",
					height: "74px",
				}}
			/>
			<b
				style={{
					position: "absolute",
					top: "1371px",
					left: "10%",
					fontSize: "32px",
				}}
			>
				Best Education
			</b>
			<b
				style={{
					position: "absolute",
					top: "1309px",
					left: "50%",
					translate: "-50%",
					fontSize: "32px",
				}}
			>
				Top Management
			</b>
			<b
				style={{
					position: "absolute",
					whiteSpace: "nowrap",
					top: "1371px",
					right: "10%",
					fontSize: "32px",
				}}
			>
				Quality Meeting
			</b>
			<b
				style={{
					position: "absolute",
					top: "1129px",
					left: "50%",
					translate: "-50%",
					fontSize: "25px",
					display: "inline-block",
					color: "#fff",
					width: "425px",
					height: "36px",
				}}
			>
				Why Choose EduBangla Platform
			</b>
			<img
				style={{
					position: "absolute",
					top: "28%",
					left: "60%",
					width: "32%",
					objectFit: "cover",
				}}
				alt=""
				src={bestEdu}
			/>
			<div
				style={{
					position: "absolute",
					top: "29%",
					left: "7.5%",
					fontSize: "25px",
					textAlign: "justify",
					display: "inline-block",
					width: "611px",
					height: "299px",
				}}
			>
				EduBangla: Empowering learners with innovative courses, interactive modules, and
				video lectures. Inclusive features for physically challenged students and addressing
				educational limitations in rural areas. Equity sharing with teachers, career
				guidance, and institution collaborations. Revolutionizing education, ensuring the
				best opportunities for all.
			</div>
			<div
				style={{
					position: "absolute",
					top: "3232px",
					left: "calc(50% - 192px)",
					borderRadius: "5px",
					backgroundColor: "#a855f7",
					width: "362px",
					height: "74px",
				}}
			/>
			<b
				style={{
					position: "absolute",
					top: "3251px",
					left: "50%",
					translate: "-50%",
					fontSize: "25px",
					display: "inline-block",
					color: "#fff",
					width: "274px",
					height: "36px",
				}}
			>
				Choose Your Courses
			</b>
			{/* --------------------- dynamic ---------------------- */}
			<div className="absolute top-[3441px] px-5 flex gap-10 items-center justify-center w-full">
				{contents.map((item) => (
					<div
						key={item.id}
						style={{
							borderRadius: "20px",
							backgroundColor: "#fff",
							boxShadow: "0px 4px 30px rgba(193, 128, 255, 0.32)",
							flexBasis: "33%",
							height: "580px",
						}}
					>
						<img
							style={{
								borderRadius: "20px 20px 0px 0px",
								width: "100%",
								objectFit: "cover",
								zIndex: "999",
								marginBottom: "12px",
								marginTop: "10px",
							}}
							alt="hello-world"
							src={item.image}
						/>
						<b className="pb-5 px-5 text-[25px] font-thin">{item.heading}</b>
						<div
							onClick={() => navigate(`/${item.path}`)}
							className="text-[19px] mt-3 px-5 cursor-pointer hover:text-[#313131c6] transition-all"
						>
							{item.description}
						</div>
					</div>
				))}
			</div>
			<img
				style={{
					position: "absolute",
					top: "70%",
					width: "50%",
					objectFit: "cover",
				}}
				alt=""
				src={learnEdu}
			/>
			<b
				style={{
					position: "absolute",
					top: "4344px",
					left: "55%",
					fontSize: activeMenu ? "40px" : "60px",
					display: "inline-block",
					fontFamily: "Montserrat",
					width: "45%",
					color: "#514d68",
				}}
			>
				<p style={{ margin: "0" }}>
					<span style={{ color: "#514d68" }}>Watch the</span>
					<span style={{ color: "#a855f7" }}>{` `}</span>
					<span style={{ color: "#514d68" }}>{`video `}</span>
					<span style={{ color: "#a855f7" }}>{`to learn `}</span>
					<span>{`more about `}</span>
					<span style={{ color: "#a855f7" }}>{`EduBangla `}</span>
				</p>
			</b>
			<div
				style={{
					position: "absolute",
					top: activeMenu ? "72.8%" : "74%",
					left: "55.5%",
					fontSize: "24px",
					textAlign: "justify",
					display: "inline-block",
					width: "38%",
				}}
			>
				Discover EduBangla's innovative features and its impact on education by watching the
				informative video. Join the education revolution today! Unlock your potential with
				EduBangla's cutting-edge educational platform. Embrace the future of learning and
				expand your knowledge horizons.
			</div>
			<div
				style={{
					position: "absolute",
					top: "5051px",
					left: "50%",
					translate: "-50%",
					width: "422px",
					height: "84px",
					fontSize: "36px",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "0px",
						left: "0px",
						width: "422px",
						height: "84px",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: "0px",
							left: "0px",
							borderRadius: "10px",
							border: "3px solid #a855f7",
							boxSizing: "border-box",
							width: "422px",
							height: "84px",
						}}
					/>
				</div>
				<b
					style={{
						position: "absolute",
						top: "19px",
						left: "40.53px",
						display: "inline-block",
						background: "linear-gradient(180deg, #9e50e9, #e650e9)",
						webkitBackgroundClip: "text",
						webkitTextFillColor: "transparent",
						width: "365.97px",
						height: "41px",
					}}
				>
					Let’s Keep In Touch
				</b>
			</div>
			<div
				style={{
					position: "absolute",
					top: "6143px",
					left: "0px",
					backgroundColor: "#7d28cd",
					width: "100%",
					height: "108px",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "6155px",
					left: "calc(50% - 424px)",
					fontSize: "24px",
					fontWeight: "600",
					color: "#fff",
					textAlign: "center",
					display: "inline-block",
					width: "888px",
					height: "84px",
				}}
			>
				<p style={{ margin: "0" }}>{`COPYRIGHT 2023 BY EDUBANGLA `}</p>
				<p style={{ margin: "0" }}>Powered by Team RunTime _Terror</p>
			</div>
			<div
				style={{
					position: "absolute",
					top: "5222px",
					left: activeMenu ? "20px" : "50px",
					borderRadius: "5px",
					backgroundColor: "#fff",
					boxShadow: "0px 4px 30px 2px rgba(193, 128, 255, 0.43)",
					width: activeMenu ? "410px" : "607px",
					height: "718px",
				}}
			/>
			<b
				style={{
					position: "absolute",
					top: "5278px",
					left: activeMenu ? "45px" : "100px",
					fontSize: activeMenu ? "31px" : "40px",
					display: "inline-block",
					fontFamily: "Montserrat",
					color: "#292345",
					width: "399px",
					height: "48px",
				}}
			>
				Free Consultation
			</b>
			<div
				style={{
					position: "absolute",
					top: "5374px",
					left: activeMenu ? "44px" : "113px",
					borderRadius: "10px",
					backgroundColor: "rgba(238, 223, 251, 0.15)",
					border: "2px solid #a855f7",
					boxSizing: "border-box",
					width: activeMenu ? "360px" : "476px",
					height: "64px",
				}}
			>
				<input placeholder="Name" className="input-control" />
			</div>
			<div
				style={{
					position: "absolute",
					top: "5465px",
					left: activeMenu ? "44px" : "113px",
					borderRadius: "10px",
					backgroundColor: "rgba(238, 223, 251, 0.15)",
					border: "2px solid #a855f7",
					boxSizing: "border-box",
					width: activeMenu ? "360px" : "476px",
					height: "64px",
				}}
			>
				<input placeholder="Email Address" type="email" className="input-control" />
			</div>
			<div
				style={{
					position: "absolute",
					top: "5557px",
					left: activeMenu ? "44px" : "113px",
					borderRadius: "10px",
					backgroundColor: "rgba(238, 223, 251, 0.15)",
					border: "2px solid #a855f7",
					boxSizing: "border-box",
					width: activeMenu ? "360px" : "476px",
					height: "64px",
				}}
			>
				<input placeholder="Phone Number" type="tel" className="input-control" />
			</div>
			<div
				style={{
					position: "absolute",
					top: "5648px",
					left: activeMenu ? "44px" : "113px",
					borderRadius: "10px",
					backgroundColor: "rgba(238, 223, 251, 0.15)",
					border: "2px solid #a855f7",
					boxSizing: "border-box",
					width: activeMenu ? "360px" : "476px",
					height: "159px",
				}}
			>
				<textarea className="input-control" placeholder="Your message..."></textarea>
			</div>
			<div
				style={{
					position: "absolute",
					top: "5848.26px",
					left: "313.59px",
					width: "161.26px",
					height: "39.86px",
					fontSize: "16px",
					color: "#fff",
				}}
			>
				<button
					type="submit"
					style={{
						cursor: "pointer",
						border: "none",
						padding: "0",
						backgroundColor: "#a855f7",
						position: "absolute",
						top: "0px",
						left: activeMenu ? "-55px" : "50%",
						translate: "-70%",
						width: "161.26px",
						height: "39.86px",
					}}
				>
					Send Message
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					top: "5223px",
					right: activeMenu ? "20px" : "50px",
					borderRadius: "5px",
					background:
						"linear-gradient(213.12deg, rgba(121, 22, 215, 0.8), rgba(208, 100, 226, 0.93))",
					boxShadow: "0px 4px 20px 2px rgba(0, 0, 0, 0.12)",
					width: "50%",
					height: "718px",
				}}
			/>
			<b
				style={{
					position: "absolute",
					top: "5268px",
					// left: activeMenu ? "615px" : "874px",
					right: "19%",
					fontSize: "40px",
					fontFamily: "Montserrat",
					color: "#fff",
				}}
			>
				Google Map
			</b>
			<img
				style={{
					position: "absolute",
					top: "1421px",
					left: "17%",
					width: "105px",
					height: "105px",
				}}
				alt=""
				src={EduAvatar}
			/>
			<div>
				<img
					style={{
						position: "absolute",
						top: "1421px",
						right: "17%",
						width: "105px",
						height: "105px",
					}}
					alt=""
					src={vector}
				/>
			</div>
			<img
				style={{
					position: "absolute",
					top: "1380px",
					left: "50%",
					translate: "-50%",
					width: "142px",
					height: "142px",
				}}
				alt=""
				src={BookAvatar}
			/>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20666.06650648045!2d90.36840800216177!3d23.701730868383905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688745012977!5m2!1sen!2sbd"
				width="40%"
				height="450"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="map"
				style={{
					position: "absolute",
					top: "5360px",
					left: "52%",
					width: "40%",
					height: "534px",
					objectFit: "cover",
				}}
			></iframe>
			<img
				style={{
					position: "absolute",
					height: "0.78%",
					width: "3.37%",
					top: "13.97%",
					right: "27.74%",
					bottom: "85.24%",
					left: "68.88%",
					maxWidth: "100%",
					overflow: "hidden",
					maxHeight: "100%",
				}}
				alt=""
				src="/mask-group.svg"
			/>
			<img
				style={{
					position: "absolute",
					height: "0.61%",
					width: "2.64%",
					top: "14.06%",
					right: "57.78%",
					bottom: "85.33%",
					left: "39.58%",
					maxWidth: "100%",
					overflow: "hidden",
					maxHeight: "100%",
				}}
				alt=""
				src="/vector1.svg"
			/>
			<img
				style={{
					position: "absolute",
					height: "0.61%",
					width: "2.64%",
					top: "14.06%",
					right: "88.82%",
					bottom: "85.33%",
					left: "8.54%",
					maxWidth: "100%",
					overflow: "hidden",
					maxHeight: "100%",
				}}
				alt=""
				src="/vector2.svg"
			/>
			<b
				style={{
					position: "absolute",
					top: "2392px",
					left: activeMenu ? "4%" : "7%",
					fontSize: "48px",
					display: "inline-block",
					fontFamily: "Montserrat",
					width: activeMenu ? "600px" : "656px",
					height: "175px",
					color: "#292345",
				}}
			>
				<span>Let’s Learn with me and I will Help you to</span>
				<span
					className="pl-3"
					style={{
						background: "linear-gradient(180deg, #f755f1 11.98%, #a855f7 75.52%)",
						webkitBackgroundClip: "text",
						webkitTextFillColor: "transparent",
					}}
				>
					study
				</span>
				<span> for any Time</span>
			</b>
			<div
				style={{
					position: "absolute",
					top: "2361px",
					left: "56%",
					background:
						"linear-gradient(210.85deg, rgba(143, 51, 231, 0.85), rgba(213, 76, 236, 0.85) 98.72%, rgba(101, 16, 241, 0.39) 99.62%, rgba(147, 48, 241, 0.85))",
					boxShadow: "0px 4px 30px 2px rgba(193, 128, 255, 0.42)",
					width: "32.5%",
					height: "9.8%",
				}}
			/>
			<b
				style={{
					position: "absolute",
					top: "2406px",
					right: "13%",
					fontSize: "20px",
					display: "inline-block",
					color: "#fff",
					textAlign: "center",
					width: "29%",
					height: "130px",
				}}
			>
				Register your free account and get immediate access to online courses
			</b>

			<div
				style={{
					position: "absolute",
					top: "2593px",
					right: "17%",
					letterSpacing: "0.06em",
					fontWeight: "500",
					color: "#fff",
					display: "inline-block",
					width: "285px",
					height: "40px",
				}}
			>
				Your Full Name
				<input type="text" className="modern-input mb-3" />
			</div>
			<div
				style={{
					position: "absolute",
					top: "2709px",
					right: "17%",
					letterSpacing: "0.06em",
					fontWeight: "500",
					color: "#fff",
					display: "inline-block",
					width: "285px",
					height: "40px",
				}}
			>
				Your Email Address
				<input type="email" className="modern-input mb-3" />
			</div>
			<div
				style={{
					position: "absolute",
					top: "2825px",
					right: "17%",
					letterSpacing: "0.06em",
					fontWeight: "500",
					color: "#fff",
					display: "inline-block",
					width: "285px",
					height: "40px",
				}}
			>
				Your Phone Number
				<input type="tel" className="modern-input" />
			</div>
			<img
				style={{
					position: "absolute",
					top: "2632px",
					left: "936px",
					width: "388px",
					height: "2px",
				}}
				alt=""
				src="/line-11.svg"
			/>
			<img
				style={{
					position: "absolute",
					top: "2748px",
					left: "936px",
					width: "388px",
					height: "2px",
				}}
				alt=""
				src="/line-11.svg"
			/>
			<img
				style={{
					position: "absolute",
					top: "2864px",
					left: "936px",
					width: "388px",
					height: "2px",
				}}
				alt=""
				src="/line-11.svg"
			/>
			<div
				style={{
					position: "absolute",
					top: "2922px",
					left: "80%",
					width: "125px",
					height: "34px",
					fontSize: "16px",
					color: "#fff",
				}}
			>
				<button
					style={{
						cursor: "pointer",
						border: "2px solid #fff",
						padding: "0",
						backgroundColor: "transparent",
						position: "absolute",
						top: "-26%",
						left: "-160%",
						boxSizing: "border-box",
						width: "125px",
						height: "34px",
					}}
				>
					Get It Now
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					top: "2638px",
					left: activeMenu ? "4%" : "98px",
					width: "696px",
					height: "183px",
					fontSize: "50px",
					color: "#292345",
					fontFamily: "Montserrat",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "0px",
						left: activeMenu ? "290px" : "367px",
						background:
							"linear-gradient(215.59deg, #cca2f4, rgba(193, 128, 255, 0.32))",
						width: activeMenu ? "114px" : "145px",
						height: activeMenu ? "132px" : "183px",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "0px",
						left: "0px",
						background:
							"linear-gradient(215.59deg, #cca2f4, rgba(193, 128, 255, 0.32))",
						width: activeMenu ? "114px" : "145px",
						height: activeMenu ? "132px" : "183px",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "0px",
						left: activeMenu ? "140px" : "184px",
						background:
							"linear-gradient(215.59deg, #cca2f4, rgba(193, 128, 255, 0.32))",
						width: activeMenu ? "114px" : "145px",
						height: activeMenu ? "132px" : "183px",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "0px",
						left: activeMenu ? "433px" : "552px",
						background:
							"linear-gradient(215.59deg, #cca2f4, rgba(193, 128, 255, 0.32))",
						width: activeMenu ? "114px" : "145px",
						height: activeMenu ? "132px" : "183px",
					}}
				/>
				<b
					style={{
						position: "absolute",
						top: activeMenu ? "13px" : "45px",
						left: activeMenu ? "24px" : "35px",
					}}
				>
					181
				</b>
				<div
					style={{
						position: "absolute",
						top: activeMenu ? "75px" : "106px",
						left: activeMenu ? "23px" : "37px",
						fontSize: "25px",
						fontWeight: "500",
						color: "#000",
					}}
				>
					DAYS
				</div>
				<div
					style={{
						position: "absolute",
						top: activeMenu ? "79px" : "106px",
						left: activeMenu ? "151px" : "209px",
						fontSize: "25px",
						fontWeight: "500",
						color: "#000",
					}}
				>
					HOURS
				</div>
				<div
					style={{
						position: "absolute",
						top: activeMenu ? "84px" : "106px",
						left: activeMenu ? "304px" : "380px",
						fontSize: activeMenu ? "18px" : "25px",
						fontWeight: "500",
						color: "#000",
					}}
				>
					MINUTES
				</div>
				<div
					style={{
						position: "absolute",
						top: activeMenu ? "84px" : "106px",
						left: activeMenu ? "440px" : "560px",
						fontSize: activeMenu ? "20px" : "25px",
						fontWeight: "500",
						color: "#000",
					}}
				>
					SECONDS
				</div>
				<b
					style={{
						position: "absolute",
						top: activeMenu ? "19px" : "45px",
						left: activeMenu ? "181px" : "240px",
					}}
				>
					6
				</b>
				<b
					style={{
						position: "absolute",
						top: activeMenu ? "22px" : "45px",
						left: activeMenu ? "319px" : "406px",
					}}
				>
					49
				</b>
				<b
					style={{
						position: "absolute",
						top: activeMenu ? "23px" : "45px",
						left: activeMenu ? "457px" : "594px",
					}}
				>
					53
				</b>
			</div>
			<img
				style={{
					height: "85.5%",
					width: "100%",
				}}
				alt=""
				src={timerPart}
			/>
		</div>
	);
};

export default Home;
