import React, { useState, useEffect } from "react";
import { Form, Image } from "react-bootstrap";

export const ImageUpload = ({ defaultValue }) => {
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();

	if (defaultValue && !preview) {
		setPreview(defaultValue);
	}
	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}
		const objectUrl = URL.createObjectURL(selectedFile);
		console.log("objectUrl", objectUrl);

		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			setPreview(defaultValue);
			return;
		}
		console.log("file", typeof e.target.files[0]);
		// I've kept this example simple by using the first image instead of multiple
		setSelectedFile(e.target.files[0]);
	};

	return (
		<>
			<Image
				fluid
				src={preview}
				alt="hello"
				// height={"100%"}
				width={"100%"}
				style={{ mt: 3, aspectRatio: "2 / 1" }}
			/>
			{/* {preview && (
				<Image
					fluid
					src={preview}
					alt="hello"
					// height={"100%"}
					width={"100%"}
					style={{ mt: 3, aspectRatio: "2 / 1" }}
				/>
			)} */}
			<Form.Group
				controlId="formFileSm"
				className="w-100"
				onChange={onSelectFile}
			>
				<Form.Control type="file" size="sm" accept="image/*" />
			</Form.Group>
		</>
	);
};
