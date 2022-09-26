import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	authLoading: true,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth(state, action) {
			const { user, isAuthenticated } = action.payload;
			return {
				...state,
				authLoading: false,
				isAuthenticated,
				user,
			};
		},
		loadingAuth(state) {
			return {
				...state,
				authLoading: true,
			};
		},
		logout(state) {
			return {
				...state,
				authLoading: false,
				isAuthenticated: false,
				user: null,
			};
		},
	},
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
export const initAuthState = initialState;
