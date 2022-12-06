import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import Loading from "../layout/Loading";
import CarouselImage from "./CarouselImage";
import AddCart from "./option/AddCart";

function InfoFood() {
	const {
		foodsState: {
			foodSpecific: { loading, info, categories, images, error },
		},
	} = useContext(FoodsContext);
	if (loading) return <Loading />;
	else if (error) {
		console.log({ error });
		return (
			<Grid container justifyContent="center">
				404
			</Grid>
		);
	}

	let showCategories = loading ? "" : categories.map((e) => e.name).join("-");

	return (
		<>
			<Grid container spacing={3} sx={{ minHeight: "350px", paddingY: 5 }}>
				<Grid item lg={5} md={5}>
					<CarouselImage value={images} />
				</Grid>
				<Grid item lg={7} md={7} sx={{ pr: 5 }}>
					<Grid container direction="column" gap={1}>
						<Typography variant="h3" component="h3">
							{info.name}
						</Typography>
						<p>{info.description}</p>

						<Typography>
							<strong style={{ marginRight: "3px" }}>Category:</strong>
							<span>{showCategories}</span>
						</Typography>
						<Typography>
							<strong>Status:</strong> {info.status}
						</Typography>
						<Typography variant="h5">{info.price} $</Typography>
						<AddCart />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default InfoFood;
