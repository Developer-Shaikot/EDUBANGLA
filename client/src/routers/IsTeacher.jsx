import { Navigate } from "react-router-dom";
import { useIsTeacherQuery } from "../services/apiSlice";
import Loading from "../components/loading/Loading";

const IsTeacher = ({ children }) => {
	const responseInfo = useIsTeacherQuery();

	if (responseInfo.isSuccess && responseInfo.data?.success) {
		return children;
	} else if (responseInfo.isLoading) return <Loading />;
	return <Navigate to="/select-courses" replace />;
};

export default IsTeacher;
