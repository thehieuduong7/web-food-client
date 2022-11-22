import * as React from "react";
import { Chip, Container, Divider, Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { CartsContext } from "../../helpers/context/CartsContext";
import OrderItemHitory from "../../components/order/OrderItemHistory";
import { CustomersService } from "../../helpers/service/customerService";
import { AuthContext } from "../../helpers/context/AuthContext";
import { OrdersContext } from "../../helpers/context/OrdersContext";
import Loading from "../../components/layout/Loading";

function OrderHistoryPage() {
	const { loadCarts } = useContext(CartsContext);
	const {
		setOrderSuccess,
		ordersState: { data, loading },
		loadSpecifyOrder,
	} = useContext(OrdersContext);
	const {
		authState: { user },
	} = useContext(AuthContext);
	useEffect(() => {
		setOrderSuccess(false);
		loadCarts();
		loadSpecifyOrder(user.id);
	}, []);

	const format = (value) => {
		const listColor = {
			ORDERED: "warning",
			ACCEPTED: "success",
			REJECTED: "error",
		};
		return <Chip label={value} color={listColor[value]} />;
	};

	return (
		<>
			<Container sx={{ marginTop: "150px" }}>
				<Grid container spacing={5} paddingX={20}>
					<h5>DANH SÁCH ĐƠN HÀNG</h5>
				</Grid>

				<Divider />
				<Grid container spacing={5} paddingX={15}>
					{data.map((e) => {
						return (
							<Grid item xs={10}>
								<br />
								<h5>
									{" "}
									Đơn Hàng: {e.id} {format(e.status)}
								</h5>
								<p></p>
								{e.oderDetails.map((item) => {
									return <OrderItemHitory cart={item} status={e.status} />;
								})}
								<br />
								<h5>TOTAL: {e.totalPrice} VNĐ</h5>
								<Divider />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</>
	);
}

export default OrderHistoryPage;
