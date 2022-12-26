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

	const {
		categoriesState: { loading, categories },
		getCategories,
	} = useContext(CategoriesContext);
	const [categoriesChecked, setCategoriesChecked] = useState([]);
	const [searchName, setSearchName] = useState("");

	useEffect(() => {
		getCategories();
	}, []);
	useEffect(() => {
		loadListFoods({ page: 0, size: 8 });
	}, []);
	const handleChangePage = (e, page) => {
		loadListFoods({
			page: page - 1,
			size: 8,
			filter: {
				category:
					categoriesChecked.length === 0 ? null : categoriesChecked.join(","),
				searchName,
			},
		});
	};
	useEffect(() => {
		loadListFoods({
			page: 0,
			size: 8,
			filter: {
				category:
					categoriesChecked.length === 0 ? null : categoriesChecked.join(","),
				searchName,
			},
		});
	}, [categoriesChecked, searchName]);

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
						<OptionViewFoods
							categoriesOption={{
								loading,
								categories,
								categoriesChecked,
								setCategoriesChecked,
							}}
							searchName={searchName}
							onChangeSearchName={(e) => setSearchName(e.target.value)}
						/>
					</Grid>

					<Grid item lg={10} justifyContent={"center"} gap={3} sx={{ pl: 2 }}>
						<Grid item minHeight={650}>
							<ListFoods data={listFoods.data} />
						</Grid>
						<Grid container justifyContent={"end"}>
							<Pagination
								page={listFoods.page}
								onChange={handleChangePage}
								count={MaxPage}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default MyFoodsPage;
