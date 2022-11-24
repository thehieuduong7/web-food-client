import { Container, Grid, Button } from "@mui/material";
import FoodCard from "../food/FoodCard";
import RatingItem from "./RatingItem";
import { ProductService } from "../../helpers/service/productService";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../helpers/context/productContext";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import Loading from "../layout/Loading";
function ListRating() {
	const [ListRating, setListRating] = useState([]);
	const {
		foodsState: { foodSpecific },
	} = useContext(FoodsContext);

	useEffect(() => {
		ProductService.getListRatingByProduct(foodSpecific.info.id).then((res) => {
			setListRating(res);
			console.log(res);
		});
	}, [foodSpecific]);
	if (foodSpecific.loading) return <Loading />;

	return (
		<Grid container direction={"column"} gap={3}>
			<Grid container spacing={2} columnSpacing={4}>
				{ListRating.map((e) => {
					return (
						<Grid item md={10} xs={6}>
							<RatingItem value={e} />
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
}

export default ListRating;
