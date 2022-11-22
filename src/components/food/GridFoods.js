import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Chip, Grid, Pagination, TableSortLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogUpdateFood from "./dialog/DialogUpdateFood";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import Loading from "../layout/Loading";

const columns = [
	{ id: "id", label: "ID", minWidth: 20, format: (value) => `#${value}` },
	{ id: "name", label: "Food\u00a0Name", minWidth: 150, sortable: true },
	{
		id: "price",
		label: "Price",
		minWidth: 170,
		align: "right",
		sortable: true,
		format: (value) => value.toFixed(2),
	},
	{
		id: "status",
		label: "Status",
		minWidth: 170,
		align: "right",
		format: (value) => (
			<Chip label={value} color={value === "ACTIVE" ? "success" : "error"} />
		),
	},
];

function createData(pros, index) {
	const {
		info: { id, name, status, totalSold, price },
	} = pros;
	return {
		id,
		name,
		status,
		totalSold,
		price,
	};
}

export default function GridFoods() {
	const { loadSpecific, loadListFoods, foodsState } =
		React.useContext(FoodsContext);

	let rows = [];
	if (foodsState.listFoods.data) {
		rows = foodsState.listFoods.data.map(createData);
	}
	React.useEffect(() => {
		loadListFoods({ page: 0, size: 100 });
	}, []);

	const [sort, setSort] = React.useState({
		field: null,
		order: null,
	});
	const handleUpdate = (id) => {
		return (e) => {
			loadSpecific(id);
			setOpen(true);
		};
	};
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<DialogUpdateFood open={open} handleClose={() => setOpen(false)} />
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{
										minWidth: column.minWidth,
										fontWeight: "bold",
										fontSize: "16px",
									}}
								>
									{column.sortable ? (
										<TableSortLabel
											active={sort.field === column.id}
											direction={sort.order ? sort.order : "asc"}
											onClick={() =>
												setSort({
													field: column.id,
													order: sort.order === "asc" ? "desc" : "asc",
												})
											}
										>
											{column.label}
										</TableSortLabel>
									) : (
										column.label
									)}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{foodsState.listFoods.loading ? (
							<Loading />
						) : (
							rows.map((row) => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={row.id}
										sx={{ cursor: "pointer" }}
										onClick={handleUpdate(row.id)}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format ? column.format(value) : value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})
						)}
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				component="div"
				count={rows.length}
				rowsPerPage={5}
				page={1}
				rowsPerPageOptions={[]}
			/>
		</>
	);
}
