import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { AuthContext } from "../../helpers/context/AuthContext";
import { RatingService } from "../../helpers/service/ratingService";

import {
	FormControl,
	Grid,
	Typography,
	Button,
	TextField,
	Snackbar,
	Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import Loading from "../layout/Loading";
const initFood = {
	point: 5,
	content: "",
};
export default function RatingCard({ foodSpecific, reload }) {
	const {
		authState: { user },
	} = React.useContext(AuthContext);
	const [stateForm, setStateForm] = React.useState(initFood);

	const [loading, setLoading] = React.useState(false);
	const [alert, setAlert] = React.useState({
		type: "",
		show: null,
		message: "",
	});
	const ratingChange = (event, value) => {
		console.log(value);
		setStateForm((pre) => {
			return {
				...pre,
				point: value,
			};
		});
	};

	const handleChangeText = (e) => {
		setStateForm((pre) => {
			return {
				...pre,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = async () => {
		setLoading(true);
		try {
			await RatingService.saveRating({
				...stateForm,
				customerDtoId: user.id,
				productDtoId: foodSpecific.info.id,
			});
			reload();
			setAlert({
				type: "success",
				message: "rating success",
				show: true,
			});
		} catch (err) {
			setAlert({
				type: "error",
				message: "rating fail",
				show: true,
			});
		}
		setLoading(false);
	};
	if (loading) return <Loading />;
	return (
		<>
			<Grid
				container
				spacing={3}
				sx={{
					minHeight: "350px",
					border: 1,
					borderRadius: 5,
					// paddingY: 1,
					borderColor: "#E5E3E2",
					marginX: 0,
				}}
				justifyContent={"center"}
			>
				<Stack
					spacing={1}
					sx={{ paddingX: 10, paddingTop: 5, my: 0.5, minWidth: "1030px" }}
				>
					<Typography sx={{ mr: 1, my: 0.5, minWidth: "130px" }}>
						Account Info:
						<strong style={{ fontSize: 25, marginLeft: 5 }}>
							{user.fullname}
						</strong>
					</Typography>

					<Typography sx={{ mr: 1, my: 0.5, minWidth: "130px" }}>
						<strong>Rating Point</strong>
					</Typography>
					<Rating
						precision={0.5}
						name="size-large"
						defaultValue={stateForm["point"]}
						size="large"
						onChange={ratingChange}
					/>
					<FormControl
						sx={{ flexDirection: "column", alignItems: "flex-start" }}
					>
						<Typography sx={{ mr: 1, my: 0.5, minWidth: "130px" }}>
							<strong>Review</strong>
						</Typography>
						<TextField
							multiline
							required
							size="small"
							fullWidth
							rows={10}
							name="content"
							onChange={handleChangeText}
							value={stateForm.content}
						/>
					</FormControl>
					<br />
					<Button onClick={handleSubmit} variant="contained">
						Submit
					</Button>
				</Stack>
				<Snackbar
					open={alert.show}
					autoHideDuration={6000}
					onClose={() =>
						setAlert((pre) => {
							return { ...pre, show: false };
						})
					}
				>
					<Alert
						onClose={() =>
							setAlert((pre) => {
								return { ...pre, show: false };
							})
						}
						severity={alert.type}
						sx={{ width: "100%" }}
					>
						{alert.message}
					</Alert>
				</Snackbar>
			</Grid>
		</>
	);
}
