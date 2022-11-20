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
import AddCard from "./option/AddCart";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { OrderContext } from "../../helpers/context/orderContext";

function FoodCard(pros) {
	const { addCarts } = useContext(OrderContext);
	const navigate = useNavigate();
	const handleAddCart = () => {
		addCarts({ productId: pros.productId, amount: 1 });
	};
	const handleClickDetail = () => {
		console.log("hello");
		navigate(`/foods/${pros.productId}`);
	};
	return (
		<WrapperCard>
			<Card sx={{ height: "auto" }}>
				<CardActionArea onClick={handleClickDetail}>
					<CardMedia
						component="img"
						height="140"
						image={pros.picture}
						alt="image food"
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
									{pros.productName}
								</Typography>
								<Typography variant="body2" color="text.secondary" width={200}>
									{pros.categories
										.map((category) => category.cateName)
										.join("- ")}
								</Typography>
							</Grid>
							<Grid item>{pros.price}$</Grid>
							<HoverRating rate={pros.rating} />
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
	);
}
const WrapperCard = styled.div`
	&:hover {
		transform: scale(1.02);
	}
`;

export default FoodCard;
