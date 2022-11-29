import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	chatHistories: {
		loading: true,
		dataHistories: [],
		data: [],
		room: {},
	},
	rooms: {
		data: [],
		loading: true,
	},
};
const chatOnlineSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setRooms(state, action) {
			const { loading, data } = action.payload;
			state.rooms = {
				...state.rooms,
				loading,
				data,
			};
		},
		appendRooms(state, action) {
			const room = action.payload;
			const rooms = state.rooms.data.filter((e) => e.id !== room.id);
			state.rooms.data = [room, ...rooms];
		},
		setHistories(state, action) {
			state.chatHistories = {
				...state.chatHistories,
				...action.payload,
			};
		},
		appendMessage(state, action) {
			const { data } = action.payload;
			state.chatHistories = {
				...state.chatHistories,
				loading: false,
				data: [...state.chatHistories.data, data],
			};
		},
	},
});
export const chatOnlineReducer = chatOnlineSlice.reducer;
export const chatOnlineAction = chatOnlineSlice.actions;
export const initchatOnlineState = initialState;
