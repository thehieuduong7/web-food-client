import axios from "axios";
import { axiosPublic } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const API_ROOMS = process.env.REACT_APP_API_CHAT + "/rooms";

const getChatHistories = async (roomId) => {
	try {
		const res = await axiosPublic.get(`${API_ROOMS}/${roomId}`, axios);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const getRooms = async () => {
	try {
		const res = await axiosPublic.get(`${API_ROOMS}`, axios);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

export const chatOnlineService = {
	getChatHistories,
	getRooms,
};
