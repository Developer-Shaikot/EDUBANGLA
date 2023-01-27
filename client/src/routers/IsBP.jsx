import { Navigate } from "react-router-dom";
import { useIsBPQuery } from "../services/apiSlice";
import Loading from "../components/loading/Loading";

const IsBp = ({ children }) => {
	const responseInfo = useIsBPQuery();

	if (responseInfo.isSuccess && responseInfo.data?.user?.user_type === "brand-promoter") {
		return children;
	} else if (responseInfo.isLoading) return <Loading />;
	return <Navigate to="/" replace />;
};

export default IsBp;
