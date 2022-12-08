import { createContext, useReducer, useRef, useState } from "react";
import FoodReducer, {
	initFoodsState,
	foodsAction,
} from "../feature/foodsSlice";
import { foodsService } from "../service/foodsService";

export const FoodsContext = createContext();

function FoodsContextProvider({ children }) {
	const [foodsState, dispatch] = useReducer(FoodReducer, initFoodsState);
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

	const initSpecific = () => {
		dispatch(foodsAction.loadingSpecific(true));
		const food = foodsService.formatResponse();
		dispatch(foodsAction.setSpecific({ ...food }));
	};

	const loadSpecific = async (id) => {
		dispatch(foodsAction.loadingSpecific(true));
		try {
			const food = await foodsService.getSpecific(id);
			dispatch(foodsAction.setSpecific({ ...food }));
		} catch (err) {
			dispatch(foodsAction.setSpecific({ error: err }));
		}
	};

	const createFood = async (food) => {
		dispatch(foodsAction.loaddingAction(true));
		try {
			await foodsService.createFood(food);
			setAlertResponse({ type: "success", message: "create success" });
		} catch (err) {
			setAlertResponse({ type: "error", message: err.message });
		}
		dispatch(foodsAction.loaddingAction(false));
	};

	const updateFood = async (food) => {
		dispatch(foodsAction.loaddingAction(true));
		try {
			await foodsService.updateFood(food);
			setAlertResponse({ type: "success", message: "update success" });
			await refreshList();
		} catch (err) {
			setAlertResponse({ type: "error", message: err.message });
		}
		dispatch(foodsAction.loaddingAction(false));
	};
	const refreshList = async () => {
		await loadListFoods(foodsState.listFoods);
	};
	const loadListFoods = async ({ page, size, filter }) => {
		dispatch(foodsAction.setLoadingList(true));
		try {
			const data = await foodsService.getFoods(
				page,
				size,
				filter ? filter : {}
			);
			const list = {
				data,
				page,
				size,
				filter,
			};
			dispatch(foodsAction.setList(list));
		} catch (err) {
			setAlertResponse({ type: "error", message: err.message });
		}
		dispatch(foodsAction.setLoadingList(false));
	};

	const value = {
		foodsState,
		alert,
		initSpecific,
		loadSpecific,
		createFood,
		loadListFoods,
		updateFood,
	};
	return (
		<FoodsContext.Provider value={value}>{children}</FoodsContext.Provider>
	);
}

export default FoodsContextProvider;
