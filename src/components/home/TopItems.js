import { Container, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FoodCard from "../food/FoodCard";
import Loading from "../layout/Loading";

function TopItems({ dataTopFood, loading }) {
	const navigate = useNavigate();
	const onclickViewAll = () => {
		navigate("/foods");
	};

	return (
		<Container>
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
					{loading ? (
						<Loading />
					) : (
						dataTopFood.map((e) => {
							return (
								<Grid item md={3} xs={6}>
									<FoodCard {...e} />
								</Grid>
							);
						})
					)}
				</Grid>
				<Grid container justifyContent="center">
					<Button
						color="inherit"
						size={"large"}
						fullWidth
						onClick={onclickViewAll}
						sx={{ fontWeight: "bold" }}
					>
						See more ...
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}

export default TopItems;
