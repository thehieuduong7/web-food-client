import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";
import moment from "moment/moment";

const Message = ({ message: { message, from, createAt }, name }) => {
	let create = moment(new Date(createAt)).format("hh:mm a");
	if (from === "app") {
		console.log({ from: true });
		return (
			<div className="d-flex justify-content-center">
				<p className="sentText">{ReactEmoji.emojify(message)}</p>
			</div>
		);
	}

	let isSentByCurrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if (from === trimmedName) {
		isSentByCurrentUser = true;
	}
	return isSentByCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10">{create}</p>
			<div className="messageBox backgroundBlue">
				<p className="messageText colorWhite">{ReactEmoji.emojify(message)}</p>
			</div>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox backgroundLight">
				<p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
			</div>
			<p className="sentText pl-10 ">{create}</p>
		</div>
	);
};

export default Message;
