import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<img
				className="onlineIcon"
				src={"/icons/onlineIcon.png"}
				alt="online icon"
			/>
			<h3>{room}</h3>
		</div>
		<div className="rightInnerContainer">
			{/* <IconButton size="large" color="error">
				<Close />
			</IconButton> */}
		</div>
	</div>
);

export default InfoBar;
