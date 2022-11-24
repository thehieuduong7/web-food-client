import Cookies from "universal-cookie";
import { axiosPrivate } from "../config/axiosConnect";
import { ResponseError } from "../ulti/ResponseError";

const LOCAL_STORAGE_TOKEN_NAME = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME;
const API_CUSTOMER = "http://localhost:8080/api/customers";

const updateCustomerById = async (customer) => {
	try {
		const res = await axiosPrivate.put(
			`${API_CUSTOMER}/${customer.id}`,
			customer
		);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const getCustomerById = async (id) => {
	try {
		const res = await axiosPrivate.get(`${API_CUSTOMER}/${id}`);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const getListCustomers = async (page, size) => {
	try {
		const res = await axiosPrivate.get(`${API_CUSTOMER}`, {
			params: {
				page: page,
				size: 6,
			},
		});

		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const saveCustomer = async (customers) => {
	try {
		const res = await axiosPrivate.post(`${API_CUSTOMER}`, customers);
		return res.data;
	} catch (err) {
		throw ResponseError(err);
	}
};

const deleteCustomerById = async (id) => {
	try {
		const res = await axiosPrivate.delete(`${API_CUSTOMER}/${id}`);
		return res.data;
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
		throw ResponseError(err);
	}
};

export const CustomersService = {
	getOrderByCustomer,
	saveCustomer,
	deleteCustomerById,
	getListCustomers,
	getCustomerById,
	updateCustomerById,
};
