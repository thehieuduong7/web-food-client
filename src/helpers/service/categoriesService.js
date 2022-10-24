import axios from "axios";

const API_CATEGORIES = process.env.REACT_APP_API_HOST + "/categories";

const getCategories = async () => {
	try {
		const res = await axios.get(`${API_CATEGORIES}`);
		return res.data;
	} catch (err) {
		console.log("err", err, err.response);
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server error",
			  };
	}
};
