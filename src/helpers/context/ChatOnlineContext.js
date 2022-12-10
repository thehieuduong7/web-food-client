import { useReducer, useRef } from "react";
import io from "socket.io-client";
import {
	chatOnlineAction,
	chatOnlineReducer,
	initchatOnlineState,
} from "../feature/chatOnlineSlice";
import { chatOnlineService } from "../service/chatOnlineService";

const { createContext } = require("react");
const ENDPOINT = "http://localhost:5000";

export const ChatOnlineContext = createContext();
function ChatOnlineContextProvider({ children }) {
	const [chatOnlineState, dispatch] = useReducer(
		chatOnlineReducer,
		initchatOnlineState
	);

	const socketRef = useRef();
	const initSocket = () => {
		socketRef.current = io(ENDPOINT);
		socketRef.current.on("message", (message) => {
			dispatch(
				chatOnlineAction.appendMessage({
					data: message,
				})
			);
		});
		socketRef.current.on("reloadRooms", (room) => {
			if (room) dispatch(chatOnlineAction.appendRooms(room));
		});
	};
	const closeSocket = async () => {
		await socketRef.current.close();
		socketRef.current.off("connect");
		socketRef.current.off("disconnection");
		socketRef.current = null;
		chatOnlineAction.setHistories({
			room: null,
		});
	};
	const joinRoom = async ({ room, from }) => {
		await closeSocket();
		initSocket();
		dispatch(
			chatOnlineAction.setHistories({
				loading: true,
				data: [],
				room: room,
			})
		);
		let res;
		try {
			res = await chatOnlineService.getChatHistories(room.id);
		} catch (err) {
			console.log({ err });
		}
		dispatch(
			chatOnlineAction.setHistories({
				loading: false,
				dataHistories: res ? [...res.chats] : [],
			})
		);

		socketRef.current.emit("joinRoom", { room, from }, (error) => {
			alert(String(error));
		});
	};
	const sendMessage = (message) => {
		socketRef.current.emit("sendMessage", message, (error) => {
			alert(String(error));
		});
	};
	const loadRooms = async () => {
		let rooms;
		dispatch(chatOnlineAction.setRooms({ loading: true }));
		try {
			rooms = await chatOnlineService.getRooms();
		} catch (err) {
			console.log({ err });
		}
		dispatch(
			chatOnlineAction.setRooms({ loading: false, data: rooms ? rooms : [] })
		);
	};

	const value = {
		initSocket,
		closeSocket,
		joinRoom,
		sendMessage,
		loadRooms,
		chatOnlineState,
	};
	return (
		<ChatOnlineContext.Provider value={value}>
			{children}
		</ChatOnlineContext.Provider>
	);
}

export default ChatOnlineContextProvider;
