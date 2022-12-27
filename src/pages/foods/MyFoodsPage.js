import { Container, Grid, Pagination } from "@mui/material";
import ListFoods from "../../components/food/ListFoods";
import OptionViewFoods from "../../components/food/option/OptionViewFood";
import { useState, useContext, useEffect } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import { CategoriesContext } from "../../helpers/context/CategoriesContext";
import { CartsContext } from "../../helpers/context/CartsContext";
import SelectSortFoods from "../../components/food/option/SelectSortFoods";
const MaxPage = 5;
const OPTIONS = [
	{
		id: 1,
		value: "createdAt.desc",
		label: "Newest arrivals",
	},
	{
		id: 2,
		value: "price.asc",
		label: "Price: low to high",
	},
	{
		id: 3,
		value: "price.desc",
		label: "Price: high to low",
	},
	{
		id: 4,
		value: "productName.asc",
		label: "Name: A to Z",
	},
	{
		id: 5,
		value: "productName.desc",
		label: "Name: Z to A",
	},
];
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
	const [sortBy, setSortBy] = useState("createdAt.desc");
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
			sortBy,
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
			sortBy,
		});
	}, [categoriesChecked, searchName, sortBy]);

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
					<Grid container justifyContent={"end"} mb={3}>
						<SelectSortFoods
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
							options={OPTIONS}
						/>
					</Grid>
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
								page={listFoods.page + 1}
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
