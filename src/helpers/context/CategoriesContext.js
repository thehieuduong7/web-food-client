import { createContext, useEffect, useReducer } from "react";
import { categoriesService } from "../service/categoriesService";
import categoriesReducer, {
	categoriesAction,
	initCategoriesState,
} from "../feature/categoriesSlice";
import { useState } from "react";
export const CategoriesContext = createContext();

function CategoriesContextProvider({ children }) {
	const [categoriesState, dispatch] = useReducer(
		categoriesReducer,
		initCategoriesState
	);
	const [alert, setAlert] = useState({
		show: false,
		type: "",
		message: "",
	});
	const clearAlert = () => {
		setAlert((pre) => {
			return {
				...pre,
				show: false,
			};
		});
	};
	const getCategories = async () => {
		dispatch(categoriesAction.clear());
		dispatch(categoriesAction.loading(true));
		try {
			const res = await categoriesService.getCategories();
			dispatch(categoriesAction.setData({ categories: res }));
		} catch (err) {
			dispatch(categoriesAction.setError({ message: err.message }));
		}
		dispatch(categoriesAction.loading(false));
	};
	const createCategory = async (form) => {
		dispatch(categoriesAction.loading(true));
		try {
			const res = await categoriesService.createCategory(form);
			dispatch(categoriesAction.updateData({ category: res }));
			setAlert({
				show: true,
				type: "success",
				message: "update success",
			});
		} catch (err) {
			setAlert({
				show: true,
				type: "error",
				message: err.message,
			});
		}
		dispatch(categoriesAction.loading(false));
	};

	const updateCategory = async (form) => {
		dispatch(categoriesAction.setLoadingSpecific(true));
		try {
			const res = await categoriesService.updateCategory(form);
			dispatch(categoriesAction.updateData({ category: res }));
			dispatch(categoriesAction.setSpecific(res));
			setAlert({
				show: true,
				type: "success",
				message: "update success",
			});
		} catch (err) {
			setAlert({
				show: true,
				type: "error",
				message: err.message,
			});
		}
		dispatch(categoriesAction.setLoadingSpecific(false));
	};
	const loadingSpecific = async (id) => {
		dispatch(categoriesAction.setLoadingSpecific(true));
		try {
			const category = categoriesState.categories.find((e) => e.id == id);
			dispatch(categoriesAction.setSpecific(category));
		} catch (err) {
			console.log(err);
		}
		dispatch(categoriesAction.setLoadingSpecific(false));
	};

	useEffect(() => {
		getCategories();
	}, []);
	const categoriesValue = {
		categoriesState,
		getCategories,
		createCategory,
		updateCategory,
		loadingSpecific,
		alert,
		clearAlert,
	};
	return (
		<CategoriesContext.Provider value={categoriesValue}>
			{children}
		</CategoriesContext.Provider>
	);
}

export default CategoriesContextProvider;
