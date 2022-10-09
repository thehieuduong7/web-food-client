import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
import Loadding from "../layout/Loadding";

function PrivateCustomRoute({ children }) {
	const { authState } = useContext(AuthContext);
	if (authState.authLoading) {
		return <Loadding />;
	} else if (authState.authorization) {
		return <>{children}</>;
	} else {
		return <Navigate to="/login" reqplace />;
	}
}

export default PrivateCustomRoute;
