import { axiosPublic, axiosPrivate } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const API_FOODS = process.env.REACT_APP_API_HOST + "/products";
const API_FOODS_SPECIFIC = `${API_FOODS}`;
export function formatResponse(response) {
	if (!response) {
		response = {
			productName: "",
			description: "",
			price: "",
			status: "active",
			categories: [],
			images: [],
		};
	}
	let {
		productId,
		productName,
		description,
		price,
		totalSold,
		status,
		categories,
		images,
		rating,
	} = response;
	categories = categories.map((e) => {
		return { id: e.cateId, name: e.cateName };
	});
	images = images.map((e) => {
		return { url: e.imageURL };
	});
	return {
		info: {
			id: productId,
			name: productName,
			description: description,
			price,
			totalSold,
			status: status,
			rating,
		},
		categories,
		images,
	};
}

function formatRequest(request) {
	let { info, categories, images } = request;
	let { id, name, description, price, totalSold, status } = info;
	categories = categories.map((e) => {
		return e.id;
	});
	images = images.map((e) => {
		return { imageURL: e.url };
	});
	return {
		productId: id,
		productName: name,
		description,
		price,
		status,
		totalSold,
		categoryIds: categories,
		imageDtos: images,
	};
}

const showCategories = (categories) => {
	categories.map((e) => e.cateName).join("-");
};
const getSpecific = async (id) => {
	try {
		const res = await axiosPublic.get(`${API_FOODS_SPECIFIC}/${id}`);
		const format = formatResponse(res.data);
		return format;
	} catch (err) {
		throw ResponseError(err);
	}
};
const createFood = async (food) => {
	try {
		let formFood = formatRequest(food);
		const res = await axiosPrivate.post(`${API_FOODS}`, formFood);
		const format = formatResponse(res.data);
		return {
			status: 200,
			message: "Create success",
			data: format,
		};
	} catch (err) {
		throw ResponseError(err);
	}
};

const updateFood = async (food) => {
	try {
		let formFood = formatRequest(food);
		const res = await axiosPrivate.put(
			`${API_FOODS}/${formFood.productId}`,
			formFood
		);
		const format = formatResponse(res.data);

		return {
			status: 200,
			message: "Update success",
			data: format,
		};
	} catch (err) {
		console.log(err);
		throw ResponseError(err);
	}
};
const getFoods = async (page, size, filter, sortBy) => {
	const params = { page, size, ...filter, sortBy };
	if (!filter.category) delete params.category;
	const query = "?" + new URLSearchParams(params).toString();
	console.log({ query });
	try {
		const res = await axiosPublic.get(`${API_FOODS}${query}`);
		return res.data.map(formatResponse);
	} catch (err) {
		throw ResponseError(err);
	}
};

export const foodsService = {
	getSpecific,
	showCategories,
	formatResponse,
	formatRequest,
	createFood,
	getFoods,
	updateFood,
};
