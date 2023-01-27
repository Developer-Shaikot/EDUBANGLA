import React, { useState } from "react";
import AddClass from "./AddClass";
import AddCourse from "./AddCourse";
import AddTopic from "./AddTopic";
import TopicContent from "./TopicContent";
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
			
            <div>
                <AddClass/>
            </div>
            
            <div>
                <AddCourse/>
            </div>

            <div>
                <AddTopic/>
            </div>

            <div>
                <TopicContent/>
            </div>
		</div>
	);
};

export default Uploads;