import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	amount: 0,
	carts: [],
	loading: true,
};

const cartsSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCarts(state, action) {
			const { amount, carts } = action.payload;
			return {
				...state,
				amount,
				carts,
			};
		},
		appendAmount(state, action) {
			state.amount += action.payload;
		},
		setLoading(state, action) {
			return {
				...state,
				loading: action.payload,
			};
		},
	},
});

export const cartsReducer = cartsSlice.reducer;
export const cartsAction = cartsSlice.actions;
export const initCartsState = initialState;
