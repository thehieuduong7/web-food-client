import Cookies from "universal-cookie";
import { axiosPrivate } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const LOCAL_STORAGE_TOKEN_NAME = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME;
const API_CATEGORY = "http://localhost:8080/api/categories";

const getCategoryById = async (id) => {
	try {
		const res = await axiosPrivate.get(`${API_CATEGORY}/${id}`);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const getCategory = async (page) => {
	try {
		const res = await axiosPrivate.get(`${API_CATEGORY}`, {
			params: {
				page: page,
				size: 8,
			},
		});
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const deleteCategory = async (cateId) => {
	try {
		const res = await axiosPrivate.delete(`${API_CATEGORY}/${cateId}`);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const saveCategory = async (category) => {
	try {
		const res = await axiosPrivate.post(`${API_CATEGORY}`, category);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const updateCategory = async (category) => {
	try {
		const res = await axiosPrivate.put(
			`${API_CATEGORY}/${category.cateId}`,
			category
		);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const getListCategories = async (page) => {
	try {
		const res = await axiosPrivate.get(`${API_CATEGORY}`, {
			params: {
				page: page,
				size: 8,
			},
		});

		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const getListProductByCategory = async (id) => {
	try {
		const res = await axiosPrivate.get(`${API_CATEGORY}/${id}/products`, {
			params: {
				page: 0,
				size: 8,
			},
		});

		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

export const CategoryService = {
	updateCategory,
	getCategoryById,
	deleteCategory,
	saveCategory,
	getListCategories,
	getCategory,
	getListProductByCategory,
};
