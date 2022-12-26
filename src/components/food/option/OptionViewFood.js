import {
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Typography,
	Input,
	InputAdornment,
	Divider,
	Paper,
} from "@mui/material";

import { SearchRounded } from "@mui/icons-material";
import FilterCategories from "../../catetories/FilterCategories";

function OptionViewFoods({ categoriesOption, searchName, onChangeSearchName }) {
	return (
		<>
			<Paper elevation={3}>
				<Grid
					container
					direction="column"
					alignItems="center"
					sx={{ minHeight: "150px" }}
				>
					<Typography
						variant="h5"
						component="h5"
						sx={{ mt: 2, fontWeight: "bold" }}
					>
						MENU
					</Typography>

					<Divider />

					<Grid container>
						<FormControl
							fullWidth
							sx={{ borderRadius: "16px", px: 2 }}
							variant="filled"
						>
							<Input
								id="standard-adornment-amount"
								value={searchName}
								onChange={onChangeSearchName}
								startAdornment={
									<InputAdornment position="start">
										<SearchRounded />
									</InputAdornment>
								}
							/>
						</FormControl>

						<FilterCategories {...categoriesOption} />
					</Grid>
				</Grid>
			</Paper>
		</>
	);
}

export default OptionViewFoods;
