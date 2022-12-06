import axios from "axios";
import { axiosPrivate } from "../config/axiosConnect";
import { foodsService } from "./foodsService";

const API_CART = process.env.REACT_APP_API_HOST;

const getCartQuantity = async (customerId) => {
	try {
		const res = await axios.get(
			`${API_CART}/customers/${customerId}/carts/quantity`
		);
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

const getListCart = async (customerId) => {
	try {
		const res = await axios.get(`${API_CART}/carts/customers/${customerId}`);
		let fill = await Promise.all(
			res.data.map(async (e) => {
				let pro = await foodsService.getSpecific(e.productId);
				return {
					...e,
					food: pro,
				};
			})
		);
		return fill;
	} catch (err) {
		console.log("err", err, err.response);
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server    ",
			  };
	}
};

const deleteCartById = async (cartId) => {
	try {
		const res = await axiosPrivate.delete(`${API_CART}/carts/${cartId}`);

		return res.data;
	} catch (err) {
		console.log("err", err, err.response);
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server    ",
			  };
	}
};

const appendCarts = async (cart) => {
	try {
		const res = await axios.post(`${API_CART}/carts`, cart);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log("err", err, err.response);
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server    ",
			  };
	}
};

export const cartsService = {
	getCartQuantity,
	appendCarts,
	getListCart,
	deleteCartById,
};
