import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { CartsContext } from "../../helpers/context/CartsContext";
import { useNavigate } from "react-router-dom";

import "./index.css";
import { OrdersContext } from "../../helpers/context/OrdersContext";
import { AuthContext } from "../../helpers/context/AuthContext";
import Loading from "../layout/Loading";

export default function BillOrderDetail() {
	const {
		totalBill,
		cartsState: { carts },
	} = React.useContext(CartsContext);
	const {
		authState: { user },
	} = React.useContext(AuthContext);

	const {
		orderFoods,
		ordersState: { loading, orderSuccess },
	} = React.useContext(OrdersContext);
	const nagivate = useNavigate();
	if (orderSuccess) nagivate("/orders/history");

	const goOrderClick = async () => {
		const orderDetails = carts
			.filter((e) => e.selected)
			.map((e) => {
				return {
					productId: e.productId,
					amount: e.amount,
					id: e.id,
				};
			});
		await orderFoods({ customerId: user.id, orderDetails });
	};

	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					minHeight: 400,
					Width: 1000,
					border: 1,
					borderColor: "#DAD9D4",
					borderRadius: 3,
				}}
			>
				<FormGroup row></FormGroup>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{ mt: 4, mb: 2 }}
							variant="h6"
							component="div"
						></Typography>

						<List variant="h6" sx={{ width: 370 }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									"& > *": {
										m: 1,
									},
									alignItems: "center",
								}}
							>
								<h1>
									<strong>TOTAL BILL</strong>
								</h1>
								<label>------------------------------</label>
								<h2>{totalBill()} VND</h2>
							</Box>
						</List>
					</Grid>
				</Grid>
			</Box>
			<br />
			{loading ? (
				<Loading />
			) : (
				<Button
					onClick={goOrderClick}
					variant="outlined"
					sx={{
						maxWidth: "400px",
						width: 370,
						color: "#16802C",
						alignItems: "center",
						borderColor: "#16802C",
					}}
				>
					<strong>CHECK OUT</strong>
				</Button>
			)}
		</>
	);
}
