import { Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import CardStatistic from "../../components/order/CardStatistic";
import GridListOrder from "../../components/order/GridListOrder";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";
import dayjs from "dayjs";

function AdminOrderPage() {
	const [value, setValue] = useState(dayjs());

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Paper levation={3} sx={{ mr: 3, px: 3, py: 2 }}>
				<Grid container direction={"column"}>
					<Grid container>
						<Typography variant="h4" color="black" sx={{ fontWeight: "bold" }}>
							List Order
						</Typography>
					</Grid>
					<Divider sx={{ my: 2, borderColor: "grey.500" }} />
					<Grid container spacing={4} justifyContent="flex-end">
						<Grid item lg={2}>
							<CardStatistic status={"ORDERED"} />
						</Grid>
						<Grid item lg={2}>
							<CardStatistic status={"ACCEPTED"} />
						</Grid>
						<Grid item lg={2}>
							<CardStatistic status={"REJECTED"} />
						</Grid>
					</Grid>
					<Divider sx={{ my: 2 }} />

					<Grid container sx={{ pr: 5, mt: 3 }}>
						<Grid container justifyContent={"end"}>
							<DesktopDatePicker
								label="Date"
								inputFormat="MM/DD/YYYY"
								value={value}
								onChange={handleChange}
								renderInput={(params) => (
									<TextField {...params} sx={{ maxWidth: 170 }} />
								)}
							/>
						</Grid>

						<GridListOrder />
					</Grid>
				</Grid>
			</Paper>
		</>
	);
}

export default AdminOrderPage;
