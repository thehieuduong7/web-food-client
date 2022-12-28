import { axiosPrivate } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";
import { cartsService } from "./cartsService";
const API_ORDERS = process.env.REACT_APP_API_HOST + "/orders";
const API_CUSTOMER = process.env.REACT_APP_API_HOST + "/customers";
function formatOrderDetail(detail) {
	const {
		id,
		product: { productId, productName },
		unitPrice,
		amount,
		orderItemPrice,
	} = detail;
	return {
		id,
		productName,
		productId,
		amount,
		price: unitPrice,
		totalPrice: orderItemPrice,
	};
}
function formatCustomer(customer) {
	const { id, firstName, lastName, phone, email, address } = customer;
	return {
		id,
		fullname: `${lastName} ${firstName}`,
		phone,
		email,
		address,
	};
}

function formatResponse(response) {
	let { id, status, totalPrice, updatedAt, customer, oderDetails } = response;
	return {
		id,
		statusOrder: status,
		totalPrice: totalPrice,
		createAt: updatedAt,
		customer: formatCustomer(customer),
		orderDetails: oderDetails.map(formatOrderDetail),
	};
}
const saveOrder = async (order) => {
	console.log(order);
	try {
		const res = await axiosPrivate.post(`${API_ORDERS}`, order);
		const { orderDetails } = order;
		await orderDetails.forEach(async (e) => {
			await cartsService.deleteCartById(e.id);
		});
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
const getOrders = async ({ filter }) => {
	const params = { ...filter };
	const query = "?" + new URLSearchParams(params).toString();
	try {
		const res = await axiosPrivate.get(`${API_ORDERS}${query}`);
		return res.data.map(formatResponse);
	} catch (err) {
		throw ResponseError(err);
	}
};
const statisticStatusOrder = (statuses) => {
	const statistic = {
		ORDERED: 0,
		ACCEPTED: 0,
		REJECTED: 0,
	};
	statuses.forEach((e) => {
		statistic[e] += 1;
	});
	return statistic;
};
const setRejectOrder = async (id) => {
	const body = {
		orderStatus: "REJECTED",
	};
	try {
		await axiosPrivate.patch(`${API_ORDERS}/${id}`, body);
	} catch (err) {
		throw ResponseError(err);
	}
};

const setAcceptOrder = async (id) => {
	const body = {
		orderStatus: "ACCEPTED",
	};
	try {
		await axiosPrivate.patch(`${API_ORDERS}/${id}`, body);
	} catch (err) {
		throw ResponseError(err);
	}
};

const getOrderByCustomer = async (id) => {
	try {
		const res = await axiosPrivate.get(`${API_CUSTOMER}/${id}/orders`, {
			params: {
				page: 0,
				size: 8,
			},
		});
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
export const ordersService = {
	getOrders,
	setRejectOrder,
	setAcceptOrder,
	statisticStatusOrder,
	saveOrder,
	getOrderByCustomer,
};
