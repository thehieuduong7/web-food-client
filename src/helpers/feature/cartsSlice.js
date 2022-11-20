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
			const { productId, amount } = action.payload;
			state.amount += amount;
			state.carts = state.carts.map((e) => {
				if (e.productId === productId) {
					e.cartPrice = (e.cartPrice / e.amount) * (e.amount + amount);
					e.amount += amount;
				}
				return e;
			});
		},
		setLoading(state, action) {
			return {
				...state,
				loading: action.payload,
			};
		},
		setSelected(state, action) {
			const { id, selected } = action.payload;
			state.carts = state.carts.map((e) => {
				if (e.id === id) {
					e.selected = selected;
				}
				return e;
			});
		},
	},
});

export const cartsReducer = cartsSlice.reducer;
export const cartsAction = cartsSlice.actions;
export const initCartsState = initialState;
