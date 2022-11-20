import { useContext, useEffect, useState } from "react";
import { CardGiftcard } from "@mui/icons-material";
import { AuthContext } from "../../../helpers/context/AuthContext";
import {
	AppBar,
	Button,
	Box,
	IconButton,
	Toolbar,
	Typography,
	Badge,
	Container,
} from "@mui/material";
import { FastfoodRounded } from "@mui/icons-material";
import ButtonUser from "./ButtonUser";
import { useNavigate } from "react-router-dom";
import { CartsContext } from "../../../helpers/context/CartsContext";

function NavBar() {
	const {
		cartsState: { amount },
	} = useContext(CartsContext);
	const navigation = useNavigate();
	const foodIconClick = () => {
		navigation("/");
	};

	const cartIconClick = () => {
		navigation("/carts/my");
	};

	return (
		<AppBar
			color={"transparent"}
			position="fixed"
			sx={{ zIndex: "10", background: "#FFFFFF" }}
		>
			<Container>
				<Toolbar
					sx={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
				>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={foodIconClick}
					>
						<FastfoodRounded />
					</IconButton>
					<Typography variant="h6" component="div" sx={{}}>
						<strong>GoodFood</strong>
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box>
						<IconButton
							size="large"
							aria-label="show new order"
							color="inherit"
							sx={{
								borderRadius: "12px",
								borderColor: "'error.main'",
								border: 1,
								mx: 1,
							}}
							onClick={cartIconClick}
						>
							<Badge badgeContent={amount} color="error">
								<CardGiftcard />
							</Badge>
						</IconButton>
						<ButtonUser />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
