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
import styled from "@emotion/styled";
import AddCard from "./option/AddCart";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";

function FoodCard(pros) {
	const navigate = useNavigate();

	const handleClickDetail = () => {
		console.log("hello");
		navigate(`/foods/${pros.id}`);
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
									{pros.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{pros.category.join(" - ")}
								</Typography>
							</Grid>
							<Grid item>100$</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Grid container justifyContent={"flex-end"}>
						<Button variant="outlined" fullWidth>
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
