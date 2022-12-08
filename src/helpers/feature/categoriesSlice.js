import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	loading: true,
	categories: [],
	specific: {
		loading: true,
		data: null,
	},
	error: null,
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		loading(state, action) {
			return {
				...state,
				loading: action.payload,
			};
		},
		setData(state, action) {
			const { categories } = action.payload;
			return {
				...state,
				categories,
			};
		},
		updateData(state, action) {
			const { category } = action.payload;
			let isCreate = true;
			let categories = state.categories.map((e) => {
				if (e.id == category.id) {
					isCreate = false;
					return category;
				} else {
					return e;
				}
			});
			console.log({ isCreate });

			return {
				...state,
				categories: isCreate ? [...state.categories, category] : categories,
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
		setLoadingSpecific(state, action) {
			state.specific.loading = action.payload;
		},
		setSpecific(state, action) {
			state.specific.data = action.payload;
		},
	},
});

export default categoriesSlice.reducer;
export const categoriesAction = categoriesSlice.actions;
export const initCategoriesState = initialState;
