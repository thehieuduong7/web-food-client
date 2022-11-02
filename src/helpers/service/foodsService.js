import { axiosPublic, axiosPrivate } from "../config/axiosConnect";

const API_FOODS = process.env.REACT_APP_API_HOST + "/products";
const API_FOODS_SPECIFIC = `${API_FOODS}`;
function formatResponse(response) {
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
			status: status.toLowerCase(),
		},
		categories,
		images,
	};
}

function formatRequest(request) {
	let { info, categories, images } = request;
	let { id, name, description, price, totalSold } = info;
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
		throw err.response
			? err.response
			: {
					status: 500,
					message: "Server error",
			  };
	}
};
const createFood = async (food) => {
	try {
		let formFood = formatRequest(food);
		const res = await axiosPrivate.post(`${API_FOODS}`, formFood);
		const format = formatResponse(res.data);
		return format;
	} catch (err) {
		throw err.response
			? err.response
			: {
					status: 500,
					message: "Server error",
			  };
	}
};

export const foodsService = {
	getSpecific,
	showCategories,
	formatResponse,
	formatRequest,
	createFood,
};
