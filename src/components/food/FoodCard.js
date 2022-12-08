import {
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
	CardActions,
	Grid,
	Button,
} from "@mui/material";
import HoverRating from "./Rating";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { CartsContext } from "../../helpers/context/CartsContext";
import Toast from "../layout/Toast";

function FoodCard({ info, categories, images }) {
	const { addCarts, alert, clearAlert } = useContext(CartsContext);

	const navigate = useNavigate();
	const handleAddCart = () => {
		addCarts({ productId: info.id, amount: 1 });
	};
	const handleClickDetail = () => {
		navigate(`/foods/${info.id}`);
	};
	return (
		<>
			<Toast onClose={clearAlert} {...alert} />

			<WrapperCard>
				<Card sx={{ minHeight: "308" }}>
					<CardActionArea onClick={handleClickDetail} sx={{ minHeight: 270 }}>
						<CardMedia
							component="img"
							height="140"
							image={
								images.length === 0 ? "/image/foodImage.png" : images[0].url
							}
							alt="/image/foodImage.png"
							sx={{ p: 3 }}
						/>
						<CardContent>
							<Grid container justifyContent={"space-between"}>
								<Grid item lg={10}>
									<Typography
										gutterBottom
										variant="body1"
										fontWeight={700}
										lineHeight={1.1}
										whiteSpace={0.5}
									>
										{info.name}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										width={200}
									>
										{categories.map((category) => category.name).join("- ")}
									</Typography>
								</Grid>
								<Grid item>{info.price} VNĐ</Grid>
								<HoverRating rate={info.rating} />
							</Grid>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Grid container justifyContent={"flex-end"}>
							<Button variant="outlined" fullWidth onClick={handleAddCart}>
								<AddShoppingCart fontSize="small" />
							</Button>
						</Grid>
					</CardActions>
				</Card>
			</WrapperCard>
		</>
	);
}
const WrapperCard = styled.div`
	&:hover {
		transform: scale(1.02);
	}
`;

export default FoodCard;
