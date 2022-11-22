import { Pages } from "@mui/icons-material";
import {
	FormControl,
	Grid,
	Typography,
	Button,
	TextField,
	InputLabel,
	Select,
	MenuItem,
	Alert,
	Paper,
} from "@mui/material";
import { useContext, useState } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import SelectCategories from "../category/SelectCategories";
import UploadImage from "../form/UploadImage";
import CreateFood from "./option/CreateFood";
import UpdateFood from "./option/UpdateFood";

function FormFood({ edit }) {
	const {
		foodsState: { foodSpecific },
		alert,
	} = useContext(FoodsContext);
	const [stateForm, setStateForm] = useState(foodSpecific.info);
	const [categories, setCategories] = useState(foodSpecific.categories);
	const [imageURLs, setImageURLs] = useState(foodSpecific.images);
	const handleChangeText = (e) => {
		setStateForm((pre) => {
			return {
				...pre,
				[e.target.name]: e.target.value,
			};
		});
	};
	const formFood = {
		info: stateForm,
		categories,
		images: imageURLs,
	};
	console.log(imageURLs);

	const option = edit ? (
		<UpdateFood data={formFood} />
	) : (
		<CreateFood data={formFood} />
	);

	return (
		<>
			<Paper elevation={6} sx={{ px: 2 }}>
				<Grid
					container
					spacing={2}
					sx={{ minHeight: "350px", paddingY: 5, mx: 0 }}
					component={"form"}
				>
					<Grid item lg={5} md={5} sx={{ border: 1, borderRadius: "16px" }}>
						<UploadImage value={imageURLs} setState={setImageURLs} />
					</Grid>
					<Grid item lg={7} md={7}>
						<Grid container direction="column" gap={2} sx={{ pr: 2 }}>
							<Grid container>
								{alert.show && (
									<Alert severity={alert.type} sx={{ width: "100%" }}>
										{alert.message}
									</Alert>
								)}
							</Grid>
							<FormControl
								sx={{ flexDirection: "row", alignItems: "flex-start", pr: 2 }}
							>
								<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
									<strong>Food name:</strong>
								</Typography>
								<TextField
									variant="standard"
									required
									fullWidth
									name="name"
									onChange={handleChangeText}
									value={stateForm.name}
								/>
							</FormControl>
							<FormControl
								sx={{ flexDirection: "row", alignItems: "flex-start", pr: 2 }}
								required
							>
								<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
									<strong>Description:</strong>
								</Typography>
								<TextField
									name="description"
									variant="standard"
									multiline
									maxRows={5}
									fullWidth
									onChange={handleChangeText}
									value={stateForm.description}
								/>
							</FormControl>
							<FormControl
								sx={{ flexDirection: "row", alignItems: "flex-start", pr: 2 }}
							>
								<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
									<strong>Category:</strong>
								</Typography>
								<SelectCategories value={categories} setState={setCategories} />
							</FormControl>

							<FormControl
								sx={{ flexDirection: "row", alignItems: "flex-start", pr: 2 }}
							>
								<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
									<strong>Status:</strong>
								</Typography>

								<Select
									labelId="demo-simple-select-standard-label"
									name="status"
									value={stateForm.status}
									onChange={handleChangeText}
									placeholder="Status"
									variant="standard"
								>
									<MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
									<MenuItem value={"DELETED"}>Not now</MenuItem>
								</Select>
							</FormControl>
							<FormControl
								sx={{ flexDirection: "row", alignItems: "flex-start", pr: 2 }}
							>
								<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
									<strong>Money:</strong>
								</Typography>

								<TextField
									variant="standard"
									sx={{ width: 115 }}
									required
									name="price"
									onChange={handleChangeText}
									value={stateForm.price}
								/>
								<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
									<strong>$</strong>
								</Typography>
							</FormControl>
							{option}
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
}

export default FormFood;
