import axios from "axios";
import { axiosPrivate } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const LOCAL_STORAGE_TOKEN_NAME = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME;
const API_VERIFY = process.env.REACT_APP_API_HOST + "/auth";
const API_LOGIN = process.env.REACT_APP_API_HOST + "/auth/login";
const API_REGISTER = process.env.REACT_APP_API_HOST + "/auth/register";

const setAuthToken = (connection, token) => {
	if (token) {
		axiosPrivate.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axiosPrivate.defaults.headers.common["Authorization"];
	}
};

function formatResponse(response) {
	const { lastName, roleName } = response;
	return {
		username: lastName,
		role: roleName === "ROLE_ADMIN" ? "admin" : "customer",
	};
}

const logout = () => {
	localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
	setAuthToken();
};

const login = async (userForm) => {
	try {
		const res = await axios.post(`${API_LOGIN}`, userForm);
		if (res.data)
			localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken);
	} catch (err) {
		throw ResponseError(err);
	}
};
const loadUser = async () => {
	if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
		setAuthToken(axiosPrivate, localStorage[LOCAL_STORAGE_TOKEN_NAME]);
	} else {
		throw Error("Dont have token");
	}

	try {
		const res = await axiosPrivate.get(`${API_VERIFY}`);
		return formatResponse(res.data);
	} catch (err) {
		logout();
		throw ResponseError(err);
	}
};
const register = async (userForm) => {
	if (userForm.password !== userForm.confirmPassword) {
		throw Error("confirm password not matching!");
	}
	try {
		const res = await axios.post(`${API_REGISTER}`, userForm);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};
export const authService = {
	setAuthToken,
	login,
	logout,
	loadUser,
	register,
};
