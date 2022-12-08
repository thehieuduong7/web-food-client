import Banner from "../../components/home/Banner";
import { Alert, Divider, Snackbar, Typography } from "@mui/material";
import TopItems from "../../components/home/TopItems";
import Information from "../../components/home/Information";
import { useContext, useEffect, useState } from "react";
import { ProductService } from "../../helpers/service/productService";
import { CategoryService } from "../../helpers/service/categoryService";
import ListCategory from "../../components/home/ListCategory";
import { CartsContext } from "../../helpers/context/CartsContext";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import { CategoriesContext } from "../../helpers/context/CategoriesContext";

function HomePage() {
	const {
		foodsState: { listFoods },
		loadListFoods,
	} = useContext(FoodsContext);
	const { categoriesState } = useContext(CategoriesContext);

	useEffect(() => {
		loadListFoods({ page: 0, size: 8 });
		console.log("loading");
	}, []);
	console.log({ listFoods });
	return (
		<>
			<Banner />
			<Divider sx={{ my: 8, borderBottom: 2 }} />
			<TopItems dataTopFood={listFoods.data} loading={listFoods.loading} />
			<ListCategory
				dataCategory={categoriesState.categories}
				loading={categoriesState.loading}
			/>
			<Information />
		</>
	);
}

export default HomePage;
