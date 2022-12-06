import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	foodSpecific: {
		info: {},
		categories: [],
		images: [],
		loading: true,
		loaddingAction: false,
		error: null,
	},
	listFoods: {
		data: [],
		loading: true,
		filter: {},
		sort: {},
		page: 0,
		size: 100,
	},
};

const foodsSlice = createSlice({
	name: "food",
	initialState,
	reducers: {
		setSpecific(state, action) {
			const { info, categories, images, error } = action.payload;
			let { foodSpecific } = state;
			foodSpecific = {
				...foodSpecific,
				info,
				categories,
				images,
				loading: false,
				error,
			};
			state.foodSpecific = foodSpecific;
		},
		loadingSpecific(state, action) {
			state.foodSpecific.loading = action.payload;
		},
		loaddingAction(state, action) {
			state.foodSpecific.loaddingAction = action.payload;
		},
		setList(state, action) {
			const { data, filter, sort, page, size } = action.payload;
			state.listFoods = {
				...state.listFoods,
				loading: false,
				data,
				filter,
				sort,
				page,
				size,
			};
		},
		setLoadingList(state, action) {
			state.listFoods.loading = action.payload;
		},
	},
});

export default foodsSlice.reducer;
export const foodsAction = foodsSlice.actions;
export const initFoodsState = initialState;
