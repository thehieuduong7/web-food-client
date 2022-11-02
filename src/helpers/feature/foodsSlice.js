import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	foodSpecific: {
		info: {},
		categories: {},
		images: {},
		loading: true,
		loadingCreate: false,
		messageError: undefined,
	},
};

const foodsSlice = createSlice({
	name: "food",
	initialState,
	reducers: {
		setSpecific(state, action) {
			const { info, categories, images } = action.payload;
			let { foodSpecific } = state;
			foodSpecific = {
				...foodSpecific,
				info,
				categories,
				images,
				loading: false,
			};
			state.foodSpecific = foodSpecific;
		},
		loadingSpecific(state, action) {
			state.foodSpecific.loading = action.payload;
		},
		loadingCreate(state, action) {
			state.foodSpecific.loadingCreate = action.payload;
		},
		setError(state, action) {
			state.foodSpecific.messageError = action.message;
		},
	},
});

export default foodsSlice.reducer;
export const foodsAction = foodsSlice.actions;
export const initFoodsState = initialState;
