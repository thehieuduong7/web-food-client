// import { Button, Modal, Form } from "react-bootstrap";
// import { TextField, Box, Grid, Fab } from "@mui/material";
// import { ImageUpload } from "../form/ImageUpload";

// function ModalUpdateFood(pros) {
// 	return (
// 		<>
// 			<Modal
// 				show={pros.show}
// 				onHide={pros.handleClose}
// 				backdrop="static"
// 				keyboard={false}
// 			>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Create new food</Modal.Title>
// 				</Modal.Header>
// 				<Box component="form" autoComplete="off">
// 					<Modal.Body>
// 						<Grid container maxWidth={"md"} gap={3}>
// 							<TextField label="Food name" fullWidth />
// 							<SelectCategories setCategories={setCategories} />
// 							<TextField label="Unit price" fullWidth />
// 							<TextField label="Description" multiline rows={3} fullWidth />
// 							<ImageUpload defaultValue={"C:/Users/PC/Desktop/van_gogh.jpg"} />
// 						</Grid>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button variant="secondary" onClick={handleClose}>
// 							Close
// 						</Button>
// 						<Button type={"submit"} variant="primary">
// 							Save and continue
// 						</Button>
// 						<Button type={"submit"} variant="primary">
// 							Save
// 						</Button>
// 					</Modal.Footer>
// 				</Box>
// 			</Modal>
// 		</>
// 	);
// }

// export default ModalUpdateFood;
