const sockets = {};

const addSocket = ({ socketId, room, from }) => {
	if (!room) throw { error: "not foudn room." };
	sockets[socketId] = { room, from: from === "admin" ? from : room.username };
	return sockets[socketId];
};

const removeSocket = (id) => {
	const temp = sockets[id];
	delete sockets[id];
	return temp;
};

const getSpecific = (id) => sockets[id];
const storageSocket = { addSocket, removeSocket, getSpecific, sockets };
module.exports = storageSocket;
