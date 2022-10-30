import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const foodSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
});

export default foodSlice.reducer;
export const authAction = foodSlice.actions;
export const initAuthState = initialState;
