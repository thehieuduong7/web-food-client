import axios from "axios";
import moment from "moment";
import { axiosPublic } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const API_ROOMS = process.env.REACT_APP_API_CHAT + "/rooms";

const getChatHistories = async (roomId) => {
	try {
		const res = await axiosPublic.get(`${API_ROOMS}/${roomId}`, axios);
		const group_by_time = res.data.chats.reduce((pre, current, index) => {
			let timeCurr = moment(new Date(current.createAt)); // new Date(current.createAt);

			if (pre.length === 0) {
				let msg = {
					from: "app",
					message: `${timeCurr.toDate().toDateString()}`,
					createAt: current.createAt,
				};
				return [msg, current];
			} else {
				let timePre = moment(new Date(pre.at(-1).createAt)); // new Date(pre.at(-1).createAt);
				if (timePre.format("DD/MM/YYYY") === timeCurr.format("DD/MM/YYYY")) {
					return [...pre, current];
				} else {
					let msg = {
						from: "app",
						message: `${timeCurr.toDate().toDateString()}`,
						createAt: current.createAt,
					};
					return [...pre, msg, current];
				}
			}
		}, []);
		console.log({ group_by_time });
		return {
			...res.data,
			chats: group_by_time,
		};
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
