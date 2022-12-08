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
import { CartsContext } from "../../helpers/context/CartsContext";

export default function OrderItem({ cart }) {
	console.log({ cart });
	const { addCarts, removeCart, setSelected } = React.useContext(CartsContext);
	const handleSelected = () => {
		setSelected({ id: cart.id, selected: !cart.selected });
	};
	const handleAddCart = () => {
		addCarts({ productId: cart.productId, amount: 1 });
	};
	const handleMinusCart = () => {
		if (cart.amount == 1) handleRemoveCart();
		else {
			addCarts({ productId: cart.productId, amount: -1 });
		}
	};
	const handleRemoveCart = () => {
		removeCart({ id: cart.id });
	};
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
					onChange={handleSelected}
					edge="end"
					sx={{ borderRadius: 0 }}
					value={!!cart.selected}
					// inputProps={{ "aria-labelledby": labelId }}
				/>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image={cart.food.images[0].url}
					alt="Live from space album cover"
				/>
				<CardContent>
					<Typography component="div" variant="h5">
						{cart.food.info.name}
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						maxWidth={170}
						overflow="hidden"
					>
						{cart.food.categories.map((e) => e.name).join("-")}
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
						<Button size="small" onClick={handleMinusCart}>
							<RemoveIcon />
						</Button>
						<Button size="small">{cart.amount}</Button>
						<Button size="small" onClick={handleAddCart}>
							<AddIcon />
						</Button>
					</ButtonGroup>
					<label style={{ width: 150, textAlign: "center" }}>
						{cart.cartPrice} VND
					</label>
				</Box>
				<IconButton aria-label="delete" onClick={handleRemoveCart}>
					<DeleteIcon />
				</IconButton>
			</Box>
		</Card>
	);
}
