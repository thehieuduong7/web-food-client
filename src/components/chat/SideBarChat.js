import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { ChatOnlineContext } from "../../helpers/context/ChatOnlineContext";
import Loading from "../layout/Loading";

function SideBarChat({ loading, data, onClick }) {
	return (
		<>
			<Drawer
				sx={{
					width: 240,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: 240,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="right"
			>
				<Toolbar />
				<Divider />
				<List>
					{loading ? (
						<Loading />
					) : (
						data.map((e, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton onClick={onClick(e)}>
									<ListItemText primary={e.username} />
								</ListItemButton>
							</ListItem>
						))
					)}
				</List>
			</Drawer>
		</>
	);
}

export default SideBarChat;
