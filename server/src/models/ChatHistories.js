const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatHistoriesSchema = new Schema({
	roomId: {
		type: Schema.Types.ObjectId,
		ref: "chat_rooms",
		required: true,
	},
	from: {
		type: String,
		default: "admin",
	},
	isRead: {
		type: Boolean,
		required: true,
		default: false,
	},
	message: {
		type: String,
		required: true,
		default: "",
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("chat_histories", ChatHistoriesSchema); //auto add s
