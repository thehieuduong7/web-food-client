import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";
import {
	cartsAction,
	cartsReducer,
	initCartsState,
} from "../feature/cartsSlice";
import { cartsService } from "../service/cartsService";
import { AuthContext } from "./AuthContext";
import { OrdersContext } from "./OrdersContext";
export const CartsContext = createContext();

function CartsContextProvider({ children }) {
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
	const {
		ordersState: { orderSuccess },
	} = useContext(OrdersContext);
	const addCarts = async ({ productId, amount }) => {
		try {
			if (isAuthenticated === false) {
				throw {};
			}
			// dispatchCarts(cartsAction.setLoading(true));
			const res = await cartsService.appendCarts({
				customerId: user.id,
				productId,
				amount,
			});
			dispatchCarts(cartsAction.appendAmount({ productId, amount }));
		} catch (err) {
			setAlertResponse({ type: "error", message: "require login" });
		}
		// dispatchCarts(cartsAction.setLoading(false));
	};

	const removeCart = async ({ id }) => {
		try {
			if (isAuthenticated === false) {
				throw {};
			}
			dispatchCarts(cartsAction.setLoading(true));
			await cartsService.deleteCartById(id);
			await loadCarts();
		} catch (err) {
			setAlertResponse({ type: "error", message: "require login" });
		}
		dispatchCarts(cartsAction.setLoading(false));
	};
	const setSelected = ({ id, selected }) => {
		dispatchCarts(cartsAction.setSelected({ id, selected }));
	};

	const loadCarts = async () => {
		try {
			if (isAuthenticated) {
				dispatchCarts(cartsAction.setLoading(true));
				const quantity = await cartsService.getCartQuantity(user.id);
				const carts = await cartsService.getListCart(user.id);
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
	const totalBill = () => {
		const { carts } = cartsState;
		return carts.reduce(
			(accumulator, value) =>
				(accumulator += value.selected ? value.cartPrice : 0),
			0
		);
	};

	useEffect(() => {
		loadCarts();
	}, [isAuthenticated, orderSuccess]);

	const value = {
		cartsState,
		addCarts: addCarts,
		loadCarts,
		alert,
		clearAlert,
		removeCart,
		setSelected,
		totalBill,
	};

	return (
		<CartsContext.Provider value={value}>{children}</CartsContext.Provider>
	);
}

export default CartsContextProvider;
