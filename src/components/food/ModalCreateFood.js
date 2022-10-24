import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { TextField, Box, Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SelectCategories from "../category/SelectCategories";
import { ImageUpload } from "../form/ImageUpload";

function ButtonCreateFood() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [categories, setCategories] = React.useState([]);

	return (
		<>
			<Fab color="primary" aria-label="add" onClick={handleShow}>
				<AddIcon />
			</Fab>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Create new food</Modal.Title>
				</Modal.Header>
				<Box component="form" autoComplete="off">
					<Modal.Body>
						<Grid container maxWidth={"md"} gap={3}>
							<TextField label="Food name" fullWidth />
							<SelectCategories setCategories={setCategories} />
							<TextField label="Unit price" fullWidth />
							<TextField label="Description" multiline rows={3} fullWidth />
							<ImageUpload />
						</Grid>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button type={"submit"} variant="primary">
							Save and continue
						</Button>
						<Button type={"submit"} variant="primary">
							Save
						</Button>
					</Modal.Footer>
				</Box>
			</Modal>
		</>
	);
}

export default ButtonCreateFood;
