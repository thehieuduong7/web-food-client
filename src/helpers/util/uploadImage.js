import axios from "axios";
import { axiosPublic } from "../config/axiosConnect";
import { v4 as uuidv4 } from "uuid";

const API_CLOUD = "https://api.cloudinary.com/v1_1/dk2peasgq/image/upload";

const uploadImage = async (file) => {
	let myuuid = uuidv4();
	// file.name = myuuid + ".png";
	const newFile = new File([file], myuuid + ".png", { type: "image/png" });

	const formData = new FormData();
	formData.append("file", newFile);
	formData.append("upload_preset", "zrzpey5y");
	try {
		const res = await axiosPublic.post(`${API_CLOUD}`, formData);
		return res.data;
	} catch (err) {
		console.log("err", err, err.response);
		throw err.response.data
			? err.response.data
			: {
					status: 500,
					message: "Server    ",
			  };
	}
};

export const ImageUtil = {
	uploadImage,
};
