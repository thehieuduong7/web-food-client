import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useContext } from "react";
import Chat from "../../components/chatExample/Chat/Chat";
import Loading from "../../components/layout/Loading";
import { AuthContext } from "../../helpers/context/AuthContext";
import { ChatOnlineContext } from "../../helpers/context/ChatOnlineContext";

function ClientChatsPage() {
	const {
		chatOnlineState: { rooms },
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
		joinRoom({ room: user, from: user.username });
		return () => closeSocket();
	}, []);
	if (rooms.loading) return <Loading />;
	return (
		<>
			<Container maxWidth={"lg"} sx={{ marginTop: 10 }}>
				<Grid
					container
					justifyContent={"center"}
					border={1}
					sx={{ borderColor: "#D3D3D3", borderRadius: "15px" }}
					direction={"column"}
				>
					<Chat currentUser={user.username} roomName={"admin"} />
				</Grid>
			</Container>
		</>
	);
}

export default ClientChatsPage;
