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
import {
	Category,
	Chat,
	Group,
	ListAlt,
	Logout,
	MenuBook,
	Store,
	ThumbUpAltSharp,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
import PermitDeniedPage from "../error/PermitDeniedPage";
import Loading from "../../components/layout/Loading";
import { Grid, Button, MenuItem } from "@mui/material";

const drawerWidth = 240;
const MenuOptions = [
	{
		name: "Foods",
		icon: <MenuBook />,
		redirect: "/admin/foods",
	},
	{
		name: "List Orders",
		icon: <ListAlt />,
		redirect: "/admin/orders",
	},
	{
		name: "Categories",
		icon: <Category />,
		redirect: "/admin/categories",
	},
	{
		name: "Customer",
		icon: <Group />,
		redirect: "/admin/customers",
	},
	{
		name: "Chat",
		icon: <Chat />,
		redirect: "/admin/chat",
	},
];
export default function HomeAdminPage() {
	const {
		authState: { authLoading, authorization },
		logout,
	} = React.useContext(AuthContext);
	const nagivate = useNavigate();
	const handleClickOption = (redirect) => {
		return () => nagivate(redirect);
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
					{/* <MenuItem onClick={handleClickStore}>
						<ListItemIcon>
							<Store fontSize="small" />
						</ListItemIcon>
						Store
					</MenuItem> */}
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
						{MenuOptions.map((e, index) => (
							<ListItem disablePadding key={index}>
								<ListItemButton onClick={handleClickOption(e.redirect)}>
									<ListItemIcon>{e.icon}</ListItemIcon>
									<ListItemText primary={e.name} />
								</ListItemButton>
							</ListItem>
						))}

						{/* <ListItemButton onClick={handleClickMenu}>
							<ListItemIcon>
								<LunchDiningIcon />
							</ListItemIcon>
							<ListItemText primary={"Products"} />
						</ListItemButton>

						<ListItemButton onClick={handleClickCustomers}>
							<ListItemIcon>
								<GroupIcon />
							</ListItemIcon>
							<ListItemText primary={"Customers"} />
						</ListItemButton>

						<ListItemButton onClick={handleClickOrder}>
							<ListItemIcon>
								<LocalMallIcon />
							</ListItemIcon>
							<ListItemText primary={"Orders"} />
						</ListItemButton>
						<ListItemButton onClick={handleClickMenu}>
							<ListItemIcon>
								<SellIcon />
							</ListItemIcon>
							<ListItemText primary={"Vouchers"} />
						</ListItemButton> */}
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "75px" }}>
				<Outlet />
			</Box>
		</Box>
	);
}
