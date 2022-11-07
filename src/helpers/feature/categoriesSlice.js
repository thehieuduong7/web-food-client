import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	loading: true,
	categories: [],
	error: null,
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		loading(state) {
			return {
				...state,
				loading: true,
			};
		},
		setData(state, action) {
			const { categories } = action.payload;
			return {
				...state,
				loading: false,
				categories,
			};
		},
		clear(state) {
			return {
				...state,
				loading: false,
				categories: [],
			};
		},
		setError(state, action) {
			const { message } = action.payload;
			return {
				...state,
				loading: false,
				categories: [],
				error: message,
			};
		},
	},
});

export default categoriesSlice.reducer;
export const categoriesAction = categoriesSlice.actions;
export const initCategoriesState = initialState;
