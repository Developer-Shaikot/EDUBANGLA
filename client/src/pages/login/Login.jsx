import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../services/apiSlice";

const initialData = { email: "", password: "" };
const error = "border-red-500";

export default function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialData);
	const [login, loginResponseInfo] = useLoginMutation();
	const [loginError, setLoginError] = useState(false);

	const handleError = () => {
		toast.error("Login failed");
		setLoginError(true);
		setFormData((prev) => ({ ...prev, password: "" }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login(formData)
			.unwrap()
			.then((data) => {
				if (data.success) {
					toast.success("Login successful");
					setLoginError(false);
					navigate("/audio-courses", { replace: true });
					setFormData(initialData);
				} else {
					handleError();
				}
			})
			.catch(() => {
				handleError();
			});
	};

	const handleOnChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div className="m-2 md:m-10 mt-24 p-2 bg-white rounded-3xl">
			<img
				style={{
					width: "400px",
					margin: "10px auto"
				}}
				src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1674837865/eduBangla/images/cover-removebg-preview_wjlg3y.png"
				alt=""
			/>{" "}
			<div className="relative flex flex-col min-h-screen overflow-hidden mt-12">
				<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">

					<h1 className="text-3xl font-semibold text-center text-purple-500 uppercase">
						Log in
					</h1>
					<form className="mt-6" onSubmit={handleSubmit}>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-800"
							>
								Email
							</label>
							<input
								disabled={loginResponseInfo.isLoading}
								required
								name="email"
								onChange={handleOnChange}
								value={formData.email}
								type="email"
								className={
									"block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 " +
									(loginError && error)
								}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="password"
								className="block text-sm font-semibold text-gray-800"
							>
								Password
							</label>
							<input
								disabled={loginResponseInfo.isLoading}
								required
								value={formData.password}
								onChange={handleOnChange}
								name="password"
								type="password"
								className={
									"block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 " +
									(loginError && error)
								}
							/>
						</div>
						<Link to="/register" className="text-xs text-purple-500 hover:underline">
							Don't have an account? Register Now
						</Link>
						<div className="mt-6">
							<button
								disabled={loginResponseInfo.isLoading}
								type="submit"
								className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-500"
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
