import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
import { CardGiftcard } from "@mui/icons-material";
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

function NavBar() {
	const {
		authState: { isAuthenticated, user },
		logout,
	} = useContext(AuthContext);
	console.log("isAuthenticated", isAuthenticated);
	const navigate = useNavigate();

	const ButtonUser = isAuthenticated ? (
		<Button
			onClick={logout}
			color="inherit"
			sx={{
				borderRadius: "12px",
				borderColor: "'error.main'",
				border: 1,
				py: "12px",
				mx: 1,
			}}
		>
			Logout
		</Button>
	) : (
		<Button
			onClick={() => navigate("/login")}
			color="inherit"
			sx={{
				borderRadius: "12px",
				borderColor: "'error.main'",
				border: 1,
				py: "12px",
				mx: 1,
			}}
		>
			Login/Sign up
		</Button>
	);

	return (
		<AppBar color={"transparent"} position="fixed">
			<Container maxWidth={"xl"}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
					>
						<FastfoodRounded />
					</IconButton>
					<Typography variant="h6" component="div" sx={{}}>
						GoodFood
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
						>
							<Badge badgeContent={4} color="error">
								<CardGiftcard />
							</Badge>
						</IconButton>
						{ButtonUser}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
