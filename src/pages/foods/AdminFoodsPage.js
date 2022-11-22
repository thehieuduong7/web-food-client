import {
	Container,
	Divider,
	FormControl,
	Grid,
	Input,
	InputAdornment,
	Pagination,
	Paper,
	Typography,
} from "@mui/material";
import OptionViewFoods from "../../components/food/option/OptionViewFood";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useEffect, useState } from "react";
import DialogCreateFood from "../../components/food/dialog/DialogCreateFood";
import GridFoods from "../../components/food/GridFoods";
import { SearchRounded } from "@mui/icons-material";
import { FoodsContext } from "../../helpers/context/FoodsContext";

function AdminFoodsPage() {
	const { initSpecific } = useContext(FoodsContext);
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		initSpecific();
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Paper levation={3} sx={{ mr: 3, px: 3, py: 2 }}>
				<Grid container direction={"column"}>
					<Grid container>
						<Typography variant="h4" color="black" sx={{ fontWeight: "bold" }}>
							Menu foods
						</Typography>
					</Grid>
					<Divider sx={{ my: 2, borderColor: "grey.500" }} />
					<Grid container justifyContent={"end"}>
						<FormControl
							sx={{
								borderRadius: "16px",
								px: 2,
								minWidth: 150,
							}}
							variant="filled"
						>
							<Input
								id="standard-adornment-amount"
								sx={{
									alignItems: "flex-start",
								}}
								startAdornment={
									<InputAdornment position="start">
										<SearchRounded />
									</InputAdornment>
								}
							/>
						</FormControl>
					</Grid>
					<GridFoods />
				</Grid>
			</Paper>
			<Grid sx={{ position: "fixed", bottom: "10%", right: "10%" }}>
				<Fab color="primary" aria-label="add" onClick={handleClickOpen}>
					<AddIcon />
				</Fab>
				<DialogCreateFood open={open} handleClose={handleClose} />
			</Grid>
		</>
	);
}

export default AdminFoodsPage;
