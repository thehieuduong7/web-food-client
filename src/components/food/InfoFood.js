import {
	FormControl,
	Grid,
	Typography,
	TextField,
	Button,
} from "@mui/material";
import { useContext } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import CarouselImage from "./CarouselImage";
import AddCart from "./option/AddCart";

const dataImage = [
	{
		id: 1,
		url: "/image/foodImage.png",
	},
	{
		id: 2,
		url: "/image/foodImage.png",
	},
	{
		id: 3,
		url: "/image/foodImage.png",
	},
];

function InfoFood() {
	const {
		foodsState: {
			foodSpecific: { info, categories, images },
		},
	} = useContext(FoodsContext);
	console.log(info, categories, images);
	const showCategories = categories.map((e) => e.name).join("-");

	return (
		<>
			<Grid
				container
				spacing={3}
				sx={{ minHeight: "350px", border: 1, paddingY: 5 }}
			>
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
