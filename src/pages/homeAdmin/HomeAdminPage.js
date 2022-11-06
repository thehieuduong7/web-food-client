import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Logout, MenuBook, Store } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
import PermitDeniedPage from "../error/PermitDeniedPage";
import Loading from "../../components/layout/Loading";
import { Grid, Button, MenuItem } from "@mui/material";

const drawerWidth = 240;

export default function HomeAdminPage() {
	const {
		authState: { authLoading, authorization },
		logout,
	} = React.useContext(AuthContext);
	const nagivate = useNavigate();
	const handleClickMenu = () => {
		nagivate("/admin/foods");
	};
	const handleClickStore = () => {
		nagivate("/");
	};
	const handleLogout = () => {
		logout();
	};
	if (authLoading) {
		return <Loading />;
	} else if (authorization !== "admin") {
		return <PermitDeniedPage />;
	}
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						Good food
					</Typography>
					<MenuItem onClick={handleClickStore}>
						<ListItemIcon>
							<Store fontSize="small" />
						</ListItemIcon>
						Store
					</MenuItem>
					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Logout
					</MenuItem>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						<ListItem disablePadding>
							<ListItemButton onClick={handleClickMenu}>
								<ListItemIcon>
									<MenuBook />
								</ListItemIcon>
								<ListItemText primary={"Menu"} />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "75px" }}>
				<Outlet />
			</Box>
		</Box>
	);
}
