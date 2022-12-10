const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const { connect } = require("./src/config/mongoDBConnect");
// const { sendMessage } = require("./src/services/chatsService");
const router = require("./router");
const chatsService = require("./src/services/chatsService");
const storageSocket = require("./src/services/storageSockets");
const notificationService = require("./src/services/notificationService");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
connect();
app.use(cors());
app.use(router);

io.on("connect", (socket) => {
	console.log("------------");
	console.log({ id: socket.id });
	socket.on("joinRoom", ({ room, from }, onError) => {
		console.log({ id: socket.id, room, from });
		try {
			const sock = storageSocket.addSocket({ socketId: socket.id, room, from });
			socket.join(room.id);
			io.to(sock.room.id).emit("message", {
				from: "app",
				message: `wellcome ${sock.from}`,
				createAt: Date.now(),
			});
			notificationService.clearUnseen({
				roomId: sock.room.id,
				to: from === "admin" ? sock.room.username : "admin",
			});
		} catch (err) {
			onError(err);
		}
	});

	socket.on("sendMessage", async (message, onError) => {
		try {
			const sock = storageSocket.getSpecific(socket.id);

			socket.to(sock.room.id).broadcast.emit("isReceiving");
			socket.emit("isSending");

			const chat = await chatsService.sendMessage({
				room: sock.room,
				message,
				from: sock.from,
			});
			io.to(sock.room.id).emit("message", {
				from: chat.from,
				message: chat.message,
				createAt: chat.createAt,
			});
			io.to("admin").emit("reloadRooms", sock.room);
		} catch (err) {
			console.log(err);
			onError(err);
		}
	});

	socket.on("init", async (username) => {
		socket.join(username);
	});

	socket.on("disconnect", () => {
		console.log({ left: socket.id });
		try {
			const sock = storageSocket.removeSocket(socket.id);
			if (sock) {
				io.to(sock.room.id).emit("message", {
					from: "app",
					message: `left ${sock.from}`,
					createAt: Date.now(),
				});
			}
		} catch (err) {
			console.log({ err });
		}
	});
});

server.listen(process.env.PORT || 5000, () =>
	console.log(`Server has started.`)
);
