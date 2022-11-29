import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import Loading from "../../layout/Loading";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ loading, histories, messages, name }) => (
	<ScrollToBottom className="messages">
		{loading ? (
			<Loading />
		) : (
			histories.map((message, i) => (
				<div key={i}>
					<Message message={message} name={name} />
				</div>
			))
		)}
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Messages;
