const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatRoomsSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	lastestJoin: {
		type: Date,
		default: Date.now,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("chat_rooms", ChatRoomsSchema); //auto add s
