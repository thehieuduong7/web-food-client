const { default: mongoose } = require("mongoose");
const ChatHistories = require("../models/ChatHistories");
const ChatRooms = require("../models/ChatRooms");
async function findOrCreateRoom({ id, username }, session) {
	let room;
	try {
		room = await ChatRooms.findOneAndUpdate(
			{ id },
			{ lastestJoin: Date.now(), username },
			{ new: true, session }
		);
		if (!room) throw Error("not found");
	} catch (err) {
		room = new ChatRooms({ id, username });
		await room.save({ session });
	}
	return room;
}

async function addChatHistories({ roomId, from, message }, session) {
	const chat = new ChatHistories({ roomId, from, message });
	await chat.save({ session });
	return chat;
}

async function sendMessage({ room: { id, username }, message, from }) {
	let chatHistory;

	const session = await mongoose.startSession();
	session.startTransaction();
	try {
		const room = await findOrCreateRoom({ id, username }, session);
		chatHistory = await addChatHistories(
			{
				roomId: room._id,
				from,
				message,
			},
			session
		);
		await session.commitTransaction();
	} catch (err) {
		console.log({ err });
	}
	await session.endSession();
	return chatHistory;
}

async function getRooms() {
	const rooms = await ChatRooms.find().sort({ lastestJoin: "desc" });
	console.log({ rooms });
	return rooms;
}

async function getChatHistory(userId) {
	let chats = [];
	let room;
	try {
		room = await ChatRooms.findOne({ id: userId }).select(
			"id username lastestJoin"
		);
		chats = await ChatHistories.find({ roomId: room._id })
			.sort({
				createAt: "asc",
			})
			.select("message from createAt");
	} catch (err) {
		console.log({ err });
		chats = [];
	}
	return {
		room,
		chats,
	};
}
async function clear() {
	await ChatRooms.deleteMany({});
	await ChatHistories.deleteMany({});
}

const chatsService = {
	sendMessage,
	getRooms,
	getChatHistory,
	clear,
};
module.exports = chatsService;
