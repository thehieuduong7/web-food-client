import { Container, Grid } from "@mui/material";
import FormFood from "../../components/food/FormFood";
import InfoFood from "../../components/food/InfoFood";
import ListFoods from "../../components/food/ListFoods";
import { useState, useContext, useEffect } from "react";
import RatingCard from "../../components/rating/RatingCard";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import { useParams } from "react-router-dom";
import ListRating from "../../components/rating/ListRating";
function RatingPage() {
	let { id } = useParams();
	const {
		foodsState: { foodSpecific, listFoods },
		loadSpecific,
		loadListFoods,
	} = useContext(FoodsContext);

	useEffect(() => {
		loadSpecific(id);
		loadListFoods({ page: 0, size: 4 });
	}, []);
	return (
		<>
			<Container sx={{ marginTop: "150px" }}>
				<Grid container direction={"column"} gap={3}>
					<InfoFood />
					<br></br>
					<ListRating />
					<br></br>
					<RatingCard />
				</Grid>
			</Container>
		</>
	);
}

export default RatingPage;
