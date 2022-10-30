import {
	Container,
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	MenuItem,
	Pagination,
	Select,
	Typography,
} from "@mui/material";
import OptionViewFoods from "../../components/food/option/OptionViewFood";
import { useState } from "react";
import FoodCard from "../../components/food/FoodCard";
import { Sort } from "@mui/icons-material";
import { Box } from "@mui/system";

const dataFoods = [
	{
		id: 1,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 65 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 2,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 32 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 3,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 4,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 65 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 5,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 32 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 6,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 7,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu1"],
	},
	{
		id: 8,
		picture: "/image/foodImage.png",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
];

const maxPage = 5;
const pageSize = 8;
function ListFoodsPage() {
	const [page, setPage] = useState(1);
	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "70px" }}>
				<Grid container>
					<Grid item lg={3}>
						<OptionViewFoods />
					</Grid>
					<Grid
						item
						lg={9}
						justifyContent={"center"}
						direction="column"
						gap={5}
						sx={{ pl: 2 }}
					>
						<Grid container justifyContent={"end"}>
							<Box sx={{ display: "flex", alignItems: "flex-end" }}>
								<FormControl variant="standard" sx={{ m: 1, minWidth: 75 }}>
									<InputLabel id="demo-simple-select-standard-label">
										<Sort sx={{ color: "action.active" }} />
									</InputLabel>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										label="Age"
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Grid>
						<Grid container direction={"column"} gap={3}>
							<Grid container spacing={2} columnSpacing={4}>
								{dataFoods.map((e, index) => {
									return (
										<Grid key={index} item md={3} xs={6}>
											<FoodCard {...e} />
										</Grid>
									);
								})}
							</Grid>
						</Grid>
						<Grid container justifyContent={"end"}>
							<Pagination
								page={page}
								onChange={(e, page) => setPage(page)}
								count={maxPage}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Grid sx={{ position: "fixed", bottom: "150px", right: "10%" }}></Grid>
		</>
	);
}

export default ListFoodsPage;
