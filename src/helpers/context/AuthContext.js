import authReducer, { initAuthState, authAction } from "../feature/authSlice";
import { createContext, useReducer, useEffect, useState, useRef } from "react";
import { authService } from "../service/authService";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [authState, dispatch] = useReducer(authReducer, initAuthState);
	const [alertAuth, setAlertAuth] = useState({
		show: false,
		type: "error",
		message: "fail",
	});
	const timeout = useRef(null);
	const clearAlert = () => {
		timeout.current = null;
		setAlertAuth((pre) => {
			return { ...pre, show: false };
		});
	};
	const setAlertFail = ({ message }) => {
		if (timeout) {
			clearTimeout(timeout.current);
		}
		setAlertAuth({
			show: true,
			type: "error",
			message,
		});
		timeout.current = setTimeout(() => {
			clearAlert();
		}, 3000);
	};

	const loginUser = async (userForm) => {
		dispatch(authAction.setLoadingAuth(true));
		try {
			await authService.login(userForm);
			await loadingUser();
		} catch (err) {
			setAlertFail(err);
			dispatch(authAction.setLoadingAuth(false));
		}
	};

	const loadingUser = async () => {
		dispatch(authAction.setLoadingAuth(true));
		try {
			const res = await authService.loadUser();
			dispatch(
				authAction.setAuth({
					user: res,
				})
			);
			return res;
		} catch (err) {
			dispatch(authAction.setAuth({}));
			return err;
		}
	};
	const registerUser = async (userForm) => {
		authAction.setLoadingAuth(true);
		try {
			const res = await authService.register(userForm);
			return res;
		} catch (err) {
			return err;
		}
	};
	const logout = () => {
		authService.logout();
		dispatch(authAction.logout());
	};
	useEffect(() => {
		loadingUser();
	}, []);
	const authContextData = {
		authState,
		dispatch,
		loginUser,
		loadingUser,
		registerUser,
		logout,
		alertAuth,
		clearAlert,
		setAlertFail,
	};
	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
