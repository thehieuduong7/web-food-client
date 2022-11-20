import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";
import cartsSlice, {
	cartsAction,
	cartsReducer,
	initCartsState,
} from "../feature/cartsSlice";
import { cartService } from "../service/cartService";
import { OrderService } from "../service/orderService";
import { AuthContext } from "./AuthContext";
const OrderContext = createContext();

function OrderProvider({ children }) {
	const [cartsState, dispatchCarts] = useReducer(cartsReducer, initCartsState);
	const [alert, setAlert] = useState({
		show: false,
		type: "error",
		message: "fail",
	});
	const timeout = useRef(null);
	const clearAlert = () => {
		timeout.current = null;
		setAlert((pre) => {
			return { ...pre, show: false };
		});
	};
	const setAlertResponse = ({ type, message }) => {
		if (timeout) {
			clearTimeout(timeout.current);
		}
		setAlert({
			show: true,
			type,
			message,
		});
		timeout.current = setTimeout(() => {
			clearAlert();
		}, 3000);
	};

	const {
		authState: { isAuthenticated, user },
	} = useContext(AuthContext);

	useEffect(() => {
		loadCarts();
	}, [isAuthenticated]);

	const addCarts = async ({ productId, amount }) => {
		if (isAuthenticated === false) {
			setAlertResponse({ type: "error", message: "require login" });
			return;
		}
		try {
			dispatchCarts(cartsAction.setLoading(true));
			const res = await cartService.appendCarts({
				customerId: user.id,
				productId,
				amount,
			});
			dispatchCarts(cartsAction.appendAmount(amount));
			dispatchCarts(cartsAction.setLoading(false));
		} catch (err) {}
	};

	const loadCarts = async () => {
		try {
			if (isAuthenticated) {
				dispatchCarts(cartsAction.setLoading(true));
				const quantity = await cartService.getCartQuantity(user.id);
				const carts = await cartService.getListCart(user.id);

				dispatchCarts(
					cartsAction.setCarts({
						amount: quantity.quantity,
						carts,
					})
				);
			} else {
				dispatchCarts(
					cartsAction.setCarts({
						amount: 0,
						carts: [],
					})
				);
			}
		} catch (e) {
		} finally {
			dispatchCarts(cartsAction.setLoading(false));
		}
	};

	const order = {
		cartsState,
		addCarts: addCarts,
		loadCarts,
		alert,
		clearAlert,
	};

	return (
		<OrderContext.Provider value={order}>{children}</OrderContext.Provider>
	);
}

export { OrderContext, OrderProvider };
