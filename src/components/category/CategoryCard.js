import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function CategoryCard({ id, name, image }) {
	return (
		<WrapperCard>
			<Card onClick={id}>
				<CardActionArea>
					<CardMedia
						sx={{ p: 1 }}
						component="img"
						height="140"
						image={image}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</WrapperCard>
	);
}
const WrapperCard = styled.div`
	&:hover {
		transform: scale(1.02);
	}
`;
export default CategoryCard;
