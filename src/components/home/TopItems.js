import { Container, Grid, Button } from "@mui/material";
import FoodCard from "../food/FoodCard";

const dataTopFood = [
	{
		id: 1,
		picture:
			"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C3UGENNJVZBCHA/hero/0e303ff8a893439b8e2a4453b231c853_1664146040308751335.jpg",
		name: "Bún Bò Huế 65 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 2,
		picture:
			"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C3UGENNJVZBCHA/hero/0e303ff8a893439b8e2a4453b231c853_1664146040308751335.jpg",
		name: "Bún Bò Huế 32 - Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 3,
		picture:
			"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C3UGENNJVZBCHA/hero/0e303ff8a893439b8e2a4453b231c853_1664146040308751335.jpg",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
	{
		id: 3,
		picture:
			"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C3UGENNJVZBCHA/hero/0e303ff8a893439b8e2a4453b231c853_1664146040308751335.jpg",
		name: "Bún Bò Huế 32- Khâm Thiên",
		category: ["Bún", "Phở Mì", " Hủ tiếu"],
	},
];

function TopItems(pros) {
	return (
		<Container maxWidth={"xl"}>
			<Grid container direction={"column"} gap={3}>
				<Grid item>
					<h1
						style={{
							fontZize: "2.57142857rem",
							lineHeight: 1.33333333,
							fontWeight: "600",
							fontFamily:
								"SanomatGrabApp,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
						}}
					>
						Top Food in GoodFood
					</h1>
				</Grid>
				<Grid container spacing={2} columnSpacing={4}>
					{dataTopFood.map((e) => {
						return (
							<Grid item md={3} xs={6}>
								<FoodCard {...e} />
							</Grid>
						);
					})}
				</Grid>
				<Grid container justifyContent="center">
					<Button color="inherit" size={"large"} fullWidth>
						See more ...
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}

export default TopItems;
