import { Container, Grid, Pagination } from "@mui/material";
import OptionViewFoods from "../../components/food/option/OptionViewFood";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DialogCreateFood from "../../components/food/dialog/DialogCreateFood";
import GridFoods from "../../components/food/GridFoods";

const dataFoods = [
	{
		id: 1,
		picture: "#",
		name: "Bún Bò Huế 65 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 2,
		picture: "#",
		name: "Bún Bò Huế 32 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 3,
		picture: "#",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 3,
		picture: "#",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 4,
		picture: "#",
		name: "Bún Bò Huế 65 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 5,
		picture: "#",
		name: "Bún Bò Huế 32 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 6,
		picture: "#",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 7,
		picture: "#",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
];

function AdminFoodsPage() {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<GridFoods />
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
