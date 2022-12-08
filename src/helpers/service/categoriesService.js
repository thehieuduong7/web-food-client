import { axiosPrivate, axiosPublic } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const API_CATEGORIES = process.env.REACT_APP_API_HOST + "/categories";

function categoryResponse(pros) {
	const { cateId, cateName, amount, description, image } = pros;
	return { id: cateId, name: cateName, amount, description, image };
}
function categoryRequest(pros) {
	const { id, name, amount, description, image } = pros;
	return { cateId: id, cateName: name, amount, description, image };
}

const updateCategory = async (pros) => {
	const req = categoryRequest(pros);
	const id = req.cateId;
	delete req.cateId;
	try {
		const res = await axiosPrivate.put(`${API_CATEGORIES}/${id}`, req);
		return categoryResponse(res.data);
	} catch (err) {
		throw ResponseError(err);
	}
};

const createCategory = async (pros) => {
	const req = categoryRequest(pros);
	try {
		const res = await axiosPrivate.post(`${API_CATEGORIES}`, req);
		return categoryResponse(res.data);
	} catch (err) {
		throw ResponseError(err);
	}
};

const getCategories = async () => {
	try {
		const params = { page: 0, size: 100 };
		const query = "?" + new URLSearchParams(params).toString();
		const res = await axiosPublic.get(`${API_CATEGORIES}${query}`);
		return res.data.map(categoryResponse);
	} catch (err) {
		throw ResponseError(err);
	}
};

export const categoriesService = {
	getCategories,
	createCategory,
	updateCategory,
};
