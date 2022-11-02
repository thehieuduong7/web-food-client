import { createContext, useEffect, useReducer } from "react";
import FoodReducer, {
	initFoodsState,
	foodsAction,
} from "../feature/foodsSlice";
import { foodsService } from "../service/foodsService";

export const FoodsContext = createContext();

function FoodsContextProvider({ children }) {
	const [foodsState, dispatch] = useReducer(FoodReducer, initFoodsState);
	const initSpecific = () => {
		dispatch(foodsAction.loadingSpecific(true));
		const food = foodsService.formatResponse();
		dispatch(foodsAction.setSpecific({ ...food }));
	};

	const loadSpecific = async (id) => {
		dispatch(foodsAction.loadingSpecific(true));
		const food = await foodsService.getSpecific(id);
		dispatch(foodsAction.setSpecific({ ...food }));
	};

	const createFood = async (food) => {
		dispatch(foodsAction.loadingCreate(true));
		const res = await foodsService.createFood(food);
		dispatch(foodsAction.loadingCreate(false));
		return res;
	};

	const value = { foodsState, initSpecific, loadSpecific, createFood };
	return (
		<FoodsContext.Provider value={value}>{children}</FoodsContext.Provider>
	);
}

export default FoodsContextProvider;
