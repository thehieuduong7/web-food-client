import { createContext, useEffect, useReducer } from "react";
import { categoriesService } from "../service/categoriesService";
import categoriesReducer, {
	categoriesAction,
	initCategoriesState,
} from "../feature/categoriesSlice";
export const CategoriesContext = createContext();

function CategoriesContextProvider({ children }) {
	const [categoriesState, dispatch] = useReducer(
		categoriesReducer,
		initCategoriesState
	);
	const getCategories = async () => {
		dispatch(categoriesAction.clear());
		dispatch(categoriesAction.loading());
		try {
			const res = await categoriesService.getCategories();
			dispatch(categoriesAction.setData({ categories: res }));
			return res;
		} catch (err) {
			dispatch(categoriesAction.setError({ message: err.message }));
			return err;
		}
	};
	useEffect(() => {
		getCategories();
	}, []);
	const categoriesValue = { categoriesState, getCategories };
	return (
		<CategoriesContext.Provider value={categoriesValue}>
			{children}
		</CategoriesContext.Provider>
	);
}

export default CategoriesContextProvider;
