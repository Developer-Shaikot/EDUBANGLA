import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";
// import { useAddCategoryMutation } from "../../services/apiSlice";

const initialData = { name: "", description: "", category: "" };

const Uploads = () => {
	const [formData, setFormData] = useState(initialData);
	// const [addCategory, responseInfo] = useAddCategoryMutation();

	const handleSubmit = (e) => {
		// e.preventDefault();
		// console.log(formData);
		// addCategory({ formData })
		// 	.unwrap()
		// 	.then((res) => {
		// 		if (res.status === "added") {
		// 			toast.success("New category added");
		// 			e.target.reset();
		// 			setFormData(initialData);
		// 		} else {
		// 			toast.error("Couldn't add the category");
		// 		}
		// 	})
		// 	.catch((e) => toast.error(e.message));
	};

	const handleOnChange = (e) => {
		// if (e.target.name === "category") {
		// 	return setFormData((prev) => ({
		// 		...prev,
		// 		category: e.target.files[0],
		// 	}));
		// }

		// setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<div className="mb-10">
				<Header category="Dashboard" title="Add Classes" />
			</div>

			<span className="sr-only">Icon description</span>
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							Name
						</label>

						<input
							// disabled={responseInfo.isLoading}
							required
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							placeholder="Jane"
							name="name"
							value={formData.name}
							onChange={handleOnChange}
						/>
					</div>
					
				</div>
			</form>
		</div>
	);
};

export default Uploads;