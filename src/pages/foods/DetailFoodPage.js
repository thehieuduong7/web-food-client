import {
	Alert,
	Container,
	Divider,
	Grid,
	Snackbar,
	Typography,
} from "@mui/material";
import FormFood from "../../components/food/FormFood";
import InfoFood from "../../components/food/InfoFood";
import ListFoods from "../../components/food/ListFoods";
import { useState, useContext, useEffect } from "react";
import ListRating from "../../components/rating/ListRating";
import { useParams } from "react-router-dom";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import { CartsContext } from "../../helpers/context/CartsContext";

function DetailFoodPage() {
	let { id } = useParams();
	const {
		foodsState: { foodSpecific, listFoods },
		loadSpecific,
		loadListFoods,
	} = useContext(FoodsContext);
	const { alert, clearAlert } = useContext(CartsContext);

	useEffect(() => {
		loadSpecific(id);
		loadListFoods({ page: 0, size: 4 });
	}, [id]);
	return (
		<>
			<Snackbar
				open={alert.show}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				sx={{ minWidth: 350, mt: 2 }}
			>
				<Alert
					onClose={clearAlert}
					severity={alert.type}
					sx={{ width: "100%" }}
				>
					<Typography variant="body1" color="initial">
						{alert.message}
					</Typography>
				</Alert>
			</Snackbar>
			<Container sx={{ marginTop: "150px" }}>
				<InfoFood />
				<br></br>
				<Grid item>
					<h3
						style={{
							fontZize: "2.57142857rem",
							lineHeight: 1.33333333,
							fontWeight: "600",
							fontFamily:
								"SanomatGrabApp,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
						}}
					>
						Món Ăn Tương Tự
					</h3>
					<Divider />
				</Grid>
				<br></br>

				<ListFoods data={listFoods.data} />
				<br />
				<br />
				<Grid item>
					<h3
						style={{
							fontZize: "2.57142857rem",
							lineHeight: 1.33333333,
							fontWeight: "600",
							fontFamily:
								"SanomatGrabApp,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
						}}
					>
						ĐÁNH GIÁ SẢN PHẨM
					</h3>
				</Grid>
				<br></br>
				<ListRating />
			</Container>
		</>
	);
}

export default DetailFoodPage;
