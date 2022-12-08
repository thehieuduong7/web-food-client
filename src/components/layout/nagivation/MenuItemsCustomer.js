import { MenuItem, ListItemIcon } from "@mui/material";
import { Chat, MenuBook, Timeline } from "@mui/icons-material";
import { Store, Grading } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function MenuItemsCustomer() {
	const navigate = useNavigate();
	const orderClick = () => {
		navigate("/orders/history");
	};
	const chatClick = () => {
		navigate("/chat");
	};
	const menuClick = () => {
		navigate("/foods");
	};
	return (
		<>
			<MenuItem onClick={menuClick}>
				<ListItemIcon>
					<MenuBook fontSize="small" />
				</ListItemIcon>
				Menu
			</MenuItem>
			<MenuItem onClick={orderClick}>
				<ListItemIcon>
					<Store fontSize="small" />
				</ListItemIcon>
				Your Order
			</MenuItem>

			<MenuItem onClick={chatClick}>
				<ListItemIcon>
					<Chat fontSize="small" />
				</ListItemIcon>
				Chat
			</MenuItem>
		</>
	);
}

export default MenuItemsCustomer;
