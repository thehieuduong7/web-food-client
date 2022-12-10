const ChatNotifications = require("../models/ChatNotifications");

async function addUnseen({ roomId, to }, session) {
	let chatNotif;
	try {
		chatNotif = await ChatNotifications.findOne({
			roomId: roomId,
			to,
		}).orFail();
		chatNotif.amountMessageUnseen += 1;
		await chatNotif.save({ session });
	} catch (err) {
		chatNotif = new ChatNotifications({ roomId, to });
		await chatNotif.save({ session });
	}
	return chatNotif;
}

async function clearUnseen({ roomId, to }) {
	return await ChatNotifications.deleteOne({ roomId, to });
}
async function getNotification({ to }) {
	let chatNotif;
	try {
		chatNotif = await ChatNotifications.find({
			to,
		});
	} catch (err) {
		console.log({ err });
	}
	return chatNotif;
}

async function message({ socket }) {}

const notificationService = {
	addUnseen,
	clearUnseen,
	getNotification,
};
module.exports = notificationService;
