import { useState } from "react";
import { storage } from "../../helpers/config/firebase";
import {
	ref,
	getStorage,
	getDownloadURL,
	uploadBytesResumable,
} from "firebase/storage";
const refFolder = ref(getStorage(), "files/Hieu_vungTau.jpeg");

function HomeTest() {
	console.log("ref", refFolder);

	const [imageD, setImageD] = useState(null);

	getDownloadURL(refFolder)
		.then((url) => {
			// `url` is the download URL for 'images/stars.jpg'

			// This can be downloaded directly:
			const xhr = new XMLHttpRequest();
			xhr.responseType = "blob";
			xhr.onload = (event) => {
				const blob = xhr.response;
			};
			xhr.open("GET", url);
			xhr.send();

			// Or inserted into an <img> element
			setImageD(url);
		})
		.catch((error) => {
			// Handle any errors
		});
	const [imgUrl, setImgUrl] = useState(null);
	const [progresspercent, setProgresspercent] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		const file = e.target[0]?.files[0];

		if (!file) return;

		const storageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgresspercent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log("url", downloadURL);
					setImgUrl(downloadURL);
				});
			}
		);
	};
	return (
		<>
			<img src={refFolder} alt="uploaded file" height={200} />
			<form
				onSubmit={handleSubmit}
				className="form"
				style={{ marginTop: "75px" }}
			>
				<input type="file" />
				<button type="submit">Upload</button>
			</form>
			{!imgUrl && (
				<div className="outerbar">
					<div className="innerbar" style={{ width: `${progresspercent}%` }}>
						{progresspercent}%
					</div>
				</div>
			)}
			{imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
		</>
	);
}

export default HomeTest;
