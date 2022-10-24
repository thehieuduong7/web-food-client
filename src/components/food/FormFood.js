import {
	FormControl,
	Grid,
	Typography,
	Button,
	TextField,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { useState } from "react";
import SelectCategories from "../category/SelectCategories";
import UploadImage from "../form/UploadImage";

const initState = {
	food_name: "",
	description: "",
	status: true,
	money: "",
	categories: [],
};
function FormFood() {
	const [stateForm, setStateForm] = useState(initState);

	const handleChangeText = (e) => {
		setStateForm((pre) => {
			return {
				...pre,
				[e.target.name]: e.target.value,
			};
		});
	};
	const handleChangeAutocomplete = (e, value) => {
		console.log("e", e);
		setStateForm((pre) => {
			return {
				...pre,
				categories: value,
			};
		});
	};
	const handleSaveAndCountinue = (e) => {
		e.preventDefault();
		const form = new FormData();
		for (let i in stateForm) {
			form.append(i, stateForm[i]);
		}
		console.log(stateForm);
	};

	const [categories, setCategories] = useState();
	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{ minHeight: "350px", border: 1, paddingY: 5 }}
				component={"form"}
			>
				<Grid item lg={5} md={5} sx={{ border: 1, borderRadius: "16px" }}>
					<UploadImage />
				</Grid>
				<Grid item lg={7} md={7}>
					<Grid container direction="column" gap={2} sx={{ pr: 2 }}>
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
								name="food_name"
								onChange={handleChangeText}
								value={stateForm.food_name}
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
							<SelectCategories
								categoies={stateForm.categories}
								setCategories={handleChangeAutocomplete}
							/>
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
								value={true}
								onChange={handleChangeText}
								placeholder="Status"
								variant="standard"
								defaultValue={true}
							>
								<MenuItem value={true}>Available</MenuItem>
								<MenuItem value={false}>Sold Out</MenuItem>
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
								name="money"
								onChange={handleChangeText}
								value={stateForm.money}
							/>
							<Typography sx={{ mr: 1, my: 0.5, minWidth: "115px" }}>
								<strong>$</strong>
							</Typography>
						</FormControl>
						<FormControl sx={{ flexDirection: "row", gap: 2 }} fullWidth>
							<Button variant="outlined" color="inherit">
								Clear
							</Button>
							<Button
								type={"submit"}
								onClick={handleSaveAndCountinue}
								variant="outlined"
								color="inherit"
							>
								Save and continue
							</Button>
							<Button type={"submit"} variant="outlined" color="inherit">
								Save
							</Button>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default FormFood;
