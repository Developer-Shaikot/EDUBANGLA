import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../services/apiSlice";

const initialData = { name: "", email: "", phone: "", password: "" };
const error = "border-red-500";

export default function Register() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialData);
	const [register, registerResponseInfo] = useRegisterMutation();
	const [registerError, setRegisterLoginError] = useState(false);

	const handleError = () => {
		toast.error("Login failed");
		setRegisterLoginError(true);
		setFormData((prev) => ({ ...prev, password: "" }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		register(formData)
			.unwrap()
			.then((data) => {
				if (data.success) {
					toast.success("Registration successful");
					setRegisterLoginError(false);
					navigate("/login", { replace: true });
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
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
				<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
					<h1 className="text-3xl font-semibold text-center text-purple-500 uppercase">
						Register User
					</h1>
					<form className="mt-6" onSubmit={handleSubmit}>
						<div className="mb-6">
							<label
								htmlFor="name"
								className="block text-sm font-semibold text-gray-800"
							>
								Name
							</label>
							<input
								disabled={registerResponseInfo.isLoading}
								required
								name="name"
								onChange={handleOnChange}
								value={formData.name}
								type="text"
								className={
									"block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 " +
									(registerError && error)
								}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-800"
							>
								Email
							</label>
							<input
								disabled={registerResponseInfo.isLoading}
								required
								name="email"
								onChange={handleOnChange}
								value={formData.email}
								type="email"
								className={
									"block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 " +
									(registerError && error)
								}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-800"
							>
								Phone
							</label>
							<input
								disabled={registerResponseInfo.isLoading}
								required
								name="phone"
								onChange={handleOnChange}
								value={formData.phone}
								type="tel"
								className={
									"block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 " +
									(registerError && error)
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
								disabled={registerResponseInfo.isLoading}
								required
								value={formData.password}
								onChange={handleOnChange}
								name="password"
								type="password"
								className={
									"block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 " +
									(registerError && error)
								}
							/>
						</div>
						<Link to="/login" className="text-xs text-purple-500 hover:underline">
							Already have an account? Login now.
						</Link>
						<div className="mt-6">
							<button
								disabled={registerResponseInfo.isLoading}
								type="submit"
								className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-500"
							>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
