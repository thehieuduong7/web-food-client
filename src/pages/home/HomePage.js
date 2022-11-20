import Banner from "../../components/home/Banner";
import { Alert, Divider, Snackbar, Typography } from "@mui/material";
import TopItems from "../../components/home/TopItems";
import Information from "../../components/home/Information";
import { useContext, useEffect, useState } from "react";
import { ProductService } from "../../helpers/service/productService";
import { CategoryService } from "../../helpers/service/categoryService";
import ListCategory from "../../components/home/ListCategory";
import { CartsContext } from "../../helpers/context/CartsContext";

function HomePage() {
	const [dataTopFood, setData] = useState([]);
	const [dataCategory, setCate] = useState([]);
	useEffect(() => {
		const fetchApi = async () => {
			const food = await ProductService.getProduct(0);
			setData(food);
			const cate = await CategoryService.getCategory(0);
			setCate(cate);
		};
		fetchApi();
	}, []);

	const { alert, clearAlert } = useContext(CartsContext);

	return (
		<>
			<Banner />
			<Divider sx={{ my: 8, borderBottom: 2 }} />
			<TopItems dataTopFood={dataTopFood} />
			<ListCategory dataCategory={dataCategory} />
			<Information />
			<Snackbar
				open={alert.show}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				sx={{ minWidth: 350, mt: 2 }}
			>
				<Alert
					onClose={clearAlert}
					severity={alert.type}
					sx={{ width: "100%" }}
				>
					<Typography variant="body1" color="initial">
						{alert.message}
					</Typography>
				</Alert>
			</Snackbar>
		</>
	);
}

export default HomePage;
