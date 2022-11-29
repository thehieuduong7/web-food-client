import { Box, CssBaseline, Grid } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import SideBarChat from "../../components/chat/SideBarChat";
import Chat from "../../components/chatExample/Chat/Chat";
import Loading from "../../components/layout/Loading";
import { AuthContext } from "../../helpers/context/AuthContext";
import { ChatOnlineContext } from "../../helpers/context/ChatOnlineContext";

function AdminChatsPage() {
	const {
		chatOnlineState: {
			rooms,
			chatHistories: { room },
		},
		loadRooms,
		joinRoom,
		initSocket,
		closeSocket,
	} = useContext(ChatOnlineContext);
	const {
		authState: { user },
	} = useContext(AuthContext);

	useEffect(() => {
		initSocket();

		loadRooms();
		return () => closeSocket();
	}, []);

	const handleClickRoom = (selectRoom) => {
		if (room.id !== selectRoom.id) {
			return () => {
				joinRoom({ room: selectRoom, from: user.username });
			};
		}
	};
	if (rooms.loading) return <Loading />;
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Box component="main" sx={{ flexGrow: 1 }}>
					<Grid
						container
						justifyContent={"center"}
						border={1}
						sx={{ borderColor: "#D3D3D3", borderRadius: "15px" }}
						direction={"column"}
					>
						<Chat currentUser={user.username} roomName={room.username} />
					</Grid>
				</Box>
				<SideBarChat
					data={rooms.data}
					loading={rooms.loading}
					onClick={handleClickRoom}
				/>
			</Box>
		</>
	);
}

export default AdminChatsPage;
