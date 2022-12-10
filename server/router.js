const express = require("express");
const chatsService = require("./src/services/chatsService");
const notificationService = require("./src/services/notificationService");
const router = express.Router();

router.get("/", (req, res) => {
	res.send({ response: "Server is up and running." }).status(200);
});

router.get("/rooms/:id", async (req, res) => {
	const { id } = req.params;
	const chats = await chatsService.getChatHistory(id);
	res.json(chats);
});

router.get("/rooms", async (req, res) => {
	const rooms = await chatsService.getRooms();
	res.json(rooms);
});

router.get("/clear", async (req, res) => {
	await chatsService.clear();
	res.json({});
});

router.get("/notificate/:username", async (req, res) => {
	const notif = await notificationService.getNotification({
		to: req.query.username,
	});
	res.json(notif);
});

module.exports = router;
