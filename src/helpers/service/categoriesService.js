import { axiosPublic } from "../config/axiosConnect";

const API_CATEGORIES = process.env.REACT_APP_API_HOST + "/categories";

function createCategory(pros) {
	const { cateId, cateName, amount } = pros;
	return { id: cateId, name: cateName, amount };
}

const getCategories = async () => {
	try {
		const res = await axiosPublic.get(`${API_CATEGORIES}`);
		return res.data.map(createCategory);
	} catch (err) {
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server error",
			  };
	}
};

export const categoriesService = {
	getCategories,
};
