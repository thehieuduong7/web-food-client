import { axiosPublic } from "../config/axiosConnect";

const API_CATEGORIES = process.env.REACT_APP_API_HOST + "/categories";

function createCategory(pros) {
	const { cateId, cateName, amount, image } = pros;
	return { id: cateId, name: cateName, amount, image };
}

const getCategories = async () => {
	try {
		const params = { page: 0, size: 100 };
		const query = "?" + new URLSearchParams(params).toString();
		const res = await axiosPublic.get(`${API_CATEGORIES}${query}`);
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
