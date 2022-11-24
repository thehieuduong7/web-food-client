import axios from "axios";
import { axiosPrivate } from "../config/axiosConnect";

const API_ORDER = process.env.REACT_APP_API_HOST + "/rates";

const saveRating = async (rate) => {
	try {
		const res = await axiosPrivate.post(`${API_ORDER}`, rate);
		console.log(res);
		return res.data;
	} catch (err) {
		console.log("err", err, err.response);
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server",
			  };
	}
};

export const RatingService = {
	saveRating,
};
