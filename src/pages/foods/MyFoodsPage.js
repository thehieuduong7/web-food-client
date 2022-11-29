import { Container, Grid, Pagination } from "@mui/material";
import ListFoods from "../../components/food/ListFoods";
import OptionViewFoods from "../../components/food/option/OptionViewFood";
import { useState, useContext, useEffect } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import { CategoriesContext } from "../../helpers/context/CategoriesContext";
import { CartsContext } from "../../helpers/context/CartsContext";
const MaxPage = 5;
function MyFoodsPage() {
	const {
		foodsState: { listFoods },
		loadListFoods,
	} = useContext(FoodsContext);
	const { categoriesState } = useContext(CategoriesContext);

	const { alert, clearAlert } = useContext(CartsContext);

	useEffect(() => {
		loadListFoods({ page: 0, size: 8 });
	}, []);

	return (
		<>
			<Container
				maxWidth="xl"
				sx={{
					marginTop: "100px",
					justifyContent: "center",
					display: "flex",
				}}
			>
				<Grid container>
					<Grid item lg={2}>
						<OptionViewFoods />
					</Grid>
					<Grid item lg={10} justifyContent={"center"} gap={3} sx={{ pl: 2 }}>
						<ListFoods data={listFoods.data} />
						<Grid container justifyContent={"end"}>
							<Pagination page={0} onChange={null} count={MaxPage} />
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Grid sx={{ position: "fixed", bottom: "150px", right: "10%" }}></Grid>
		</>
	);
}

export default MyFoodsPage;
