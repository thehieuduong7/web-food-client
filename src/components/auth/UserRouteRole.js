import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import NotAccessPage from "./NotAccessPage";
import { AuthContext } from "../../helpers/context/AuthContext";
import Loading from "../layout/Loading";
import PermitDeniedPage from "../../pages/error/PermitDeniedPage";

const UserRouteRole = ({ children }) => {
	const {
		authState: { authLoading, authorization },
	} = useContext(AuthContext);

	if (authLoading) {
		return <Loading />;
	} else if (authorization === "customer") {
		return <>{children}</>;
	} else {
		return <PermitDeniedPage />;
	}
};

export default UserRouteRole;
