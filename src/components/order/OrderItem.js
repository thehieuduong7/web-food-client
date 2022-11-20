import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductService } from "../../helpers/service/productService";
import { OrderContext } from "../../helpers/context/orderContext";

export default function OrderItem(pros) {
	console.log(pros);

	return (
		<Card
			className="OrderItem"
			sx={{
				borderColor: "#EBE7F3",
				display: "flex",
				marginTop: 0.5,
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ display: "flex" }}>
				{/* <Checkbox {...label } /> */}
				<Checkbox
					edge="end"
					sx={{ borderRadius: 0 }}
					// inputProps={{ "aria-labelledby": labelId }}
				/>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image=""
					alt="Live from space album cover"
				/>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						{pros ? pros.productName : "ok"}
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						maxWidth={170}
						overflow="hidden"
					>
						{pros ? pros.description : "ok"}
					</Typography>
				</CardContent>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					"& > *": {
						m: 1,
					},
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						"& > *": {
							m: 1,
						},
						alignItems: "center",
					}}
				>
					<ButtonGroup variant="outlined" aria-label="outlined button group">
						<Button size="small">
							<RemoveIcon />
						</Button>
						<Button size="small">{pros.cart.amount}</Button>
						<Button size="small">
							<AddIcon />
						</Button>
					</ButtonGroup>
					<label>{pros.cart.cartPrice} VND</label>
				</Box>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
			</Box>
		</Card>
	);
}
