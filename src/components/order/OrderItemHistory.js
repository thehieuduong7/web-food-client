import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductService } from "../../helpers/service/productService";
import { CartsContext } from "../../helpers/context/CartsContext";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function OrderItemHitory(pros) {
	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	const [Product, setProduct] = React.useState();
	const nagivate = useNavigate();

	React.useEffect(() => {
		ProductService.getProductById(pros.cart.productId).then((res) => {
			setProduct(res);
		});
	}, []);

	const rateClick = () => {
		nagivate(`/foods/${1}/rating`);
	};

	console.log(pros);
	return (
		<Card
			className="OrderItem"
			sx={{
				border: 0.5,
				borderColor: "#EBE7F3",
				display: "flex",
				marginTop: 0.5,
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ display: "flex", minHeight: 100 }}>
				{/* <Checkbox {...label } /> */}

				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image={
						pros.cart.product.images[0]
							? pros.cart.product.images[0].imageURL
							: "ok"
					}
					alt="Live from space album cover"
				/>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						{pros.cart.product.productName
							? pros.cart.product.productName
							: "ok"}
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
					<label>{pros.cart.orderItemPrice} VND</label>
				</Box>
				{pros.status === "ACCEPTED" && (
					<Button onClick={rateClick} variant="outlined">
						Đánh giá
					</Button>
				)}
				<label></label>
			</Box>
		</Card>
	);
}
