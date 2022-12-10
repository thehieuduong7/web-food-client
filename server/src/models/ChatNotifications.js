const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatNotificationsSchema = new Schema({
	to: {
		type: String,
		require: true,
	},
	roomId: {
		type: Number,
		required: true,
	},
	amountMessageUnseen: {
		type: Number,
		require: true,
		default: 1,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("chat_notifications", ChatNotificationsSchema); //auto add s
