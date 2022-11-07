import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
import Loading from "../layout/Loading";

function PrivateCustomRoute({ children }) {
	const { authState } = useContext(AuthContext);
	if (authState.authLoading) {
		return <Loading />;
	} else if (authState.authorization) {
		return <>{children}</>;
	} else {
		return <Navigate to="/login" reqplace />;
	}
}

export default PrivateCustomRoute;
