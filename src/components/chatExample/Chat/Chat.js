import React, { useState, useContext } from "react";

import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";
import { AuthContext } from "../../../helpers/context/AuthContext";
import { ChatOnlineContext } from "../../../helpers/context/ChatOnlineContext";
import { Container, Grid, Paper } from "@mui/material";

const Chat = ({ currentUser, roomName }) => {
	const [message, setMessage] = useState("");
	const { sendMessage, chatOnlineState } = useContext(ChatOnlineContext);
	const handleSendMessage = (event) => {
		event.preventDefault();
		if (message !== "") {
			sendMessage(message);
		}
		setMessage("");
	};

	return (
		<div className="outerContainer-chat">
			<div className="container-chat p-0">
				<InfoBar room={roomName} />
				<Messages
					messages={chatOnlineState.chatHistories.data}
					histories={chatOnlineState.chatHistories.dataHistories}
					loading={chatOnlineState.chatHistories.loading}
					name={currentUser}
				/>

				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={handleSendMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
