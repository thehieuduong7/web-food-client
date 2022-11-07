import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	authLoading: true,
	isAuthenticated: false,
	authorization: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth(state, action) {
			const { user } = action.payload;
			return {
				...state,
				authLoading: false,
				user,
				isAuthenticated: user,
				authorization: user ? user.role : null,
			};
		},
		setLoadingAuth(state, action) {
			return {
				...state,
				authLoading: action.payload,
			};
		},
		logout(state) {
			return {
				...state,
				isAuthenticated: false,
				user: null,
				authorization: null,
			};
		},
	},
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
export const initAuthState = initialState;
