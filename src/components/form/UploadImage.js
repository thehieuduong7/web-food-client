import React, { useState, useEffect } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

import { Chip, Avatar, Paper } from "@mui/material";

function UploadImage({ images, setImages }) {
	const [objURLs, setobjURLs] = useState([]);
	const handleAppend = () => {};

	const [selectedFile, setSelectedFile] = useState(null);
	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}
		// I've kept this example simple by using the first image instead of multiple
		setSelectedFile(e.target.files[0]);
	};
	return (
		<>
			<div className="d-flex flex-column">
				<div className="d-flex pe-3">
					<div className="flex-grow-1">
						<Form.Group controlId="formFileSm" className="w-100 border-0">
							<Form.Control type="file" size="md" accept="image/*" />
						</Form.Group>
					</div>
					<div className="ms-2">
						<Button>upload</Button>
					</div>
				</div>
				<Paper
					sx={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						listStyle: "none",
						p: 0.5,
						m: 0,
					}}
					component="ul"
				>
					<Chip
						avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
						label="Avatar"
						variant="outlined"
					/>
				</Paper>
			</div>
		</>
	);
}

export default UploadImage;
