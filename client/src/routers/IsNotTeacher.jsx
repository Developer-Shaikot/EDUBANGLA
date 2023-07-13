import { Navigate } from "react-router-dom";
import { useIsTeacherQuery } from "../services/apiSlice";
import Loading from "../components/loading/Loading";

const IsNotTeacher = ({ children }) => {
	const responseInfo = useIsTeacherQuery();

	if (responseInfo.isSuccess && responseInfo.data?.success) {
		return <Navigate to="/select-courses" replace />;
	} else if (responseInfo.isLoading) return <Loading />;
	return children;
};

export default IsNotTeacher;
