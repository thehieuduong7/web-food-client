import { useContext, useEffect } from "react";
import { OrdersContext } from "../../helpers/context/OrdersContext";

function HomeTest() {
	// console.log(axiosPrivate.defaults.headers.common);
	const { acceptOrder, ordersState } = useContext(OrdersContext);
	useEffect(() => {
		acceptOrder(33);
	}, []);
	console.log("order", ordersState);
	return <>test</>;
}

export default HomeTest;
