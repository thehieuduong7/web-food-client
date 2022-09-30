import {
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import styled from "@emotion/styled";

function FoodCard(pros) {
	return (
		<WrapperCard>
			<Card sx={{ height: "313px" }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={pros.picture}
						alt="image food"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{pros.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{pros.category.join(" - ")}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
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
