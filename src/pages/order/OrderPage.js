import * as React from "react";
import { Container, Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { CartsContext } from "../../helpers/context/CartsContext";
import OrderItem from "../../components/order/OrderItem";
import BillOrder from "../../components/order/BillOrder";
import Loading from "../../components/layout/Loading";
function OrderPage() {
	const {
		cartsState: { carts, loading },
		loadCarts,
	} = useContext(CartsContext);
	useEffect(() => {
		loadCarts();
	}, []);

	if (loading) return <Loading />;
	return (
		<>
			<Container sx={{ marginTop: "70px" }}>
				<Grid container spacing={2}>
					<Grid item xs={8} minWidth={450}>
						<br />
						<h5> CART </h5>
						<p></p>
						{carts.map((item) => {
							return <OrderItem cart={item} />;
						})}
					</Grid>
					<Grid item xs={4}>
						<br />
						<h5> BILL-ORDER </h5>
						<p></p>
						<BillOrder />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default OrderPage;
