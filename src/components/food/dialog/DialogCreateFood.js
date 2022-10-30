import * as React from "react";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import FormFood from "../FormFood";
import { Container } from "@mui/system";

const initFood = {
	food_name: "",
	description: "",
	status: true,
	money: "",
};
const initCategories = [];
const initImageURLs = [];

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function DialogCreateFood({ open, handleClose }) {
	return (
		<>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<Container maxWidth="lg">
							<IconButton
								edge="start"
								color="inherit"
								onClick={handleClose}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>
						</Container>
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg">
					<FormFood
						value={{ initFood, initCategories, initImageURLs }}
						edit={false}
					/>
				</Container>
			</Dialog>
		</>
	);
}

export default DialogCreateFood;
