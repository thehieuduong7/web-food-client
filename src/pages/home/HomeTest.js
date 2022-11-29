import { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import { ImageUtil } from "../../helpers/util/uploadImage";
import AdminChatsPage from "../chat/AdminChatsPage";
import Chat from "../../components/chatExample/Chat/Chat";
function HomeTest() {
	console.log("hoemtest");
	return (
		<>
			<Chat />
		</>
	);
}

export default HomeTest;
