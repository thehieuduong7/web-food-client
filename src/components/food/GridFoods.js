import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid, Pagination, TableSortLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogUpdateFood from "./dialog/DialogUpdateFood";

const columns = [
	{ id: "id", label: "ID", minWidth: 20 },
	{ id: "name", label: "Food\u00a0Name", minWidth: 150, sortable: true },
	{
		id: "status",
		label: "Status",
		minWidth: 170,
		align: "right",
		format: (value) => (value ? "Available" : "Sold Out"),
	},
	{
		id: "totalSold",
		label: "Total Sold",
		minWidth: 170,
		sortable: true,
		align: "right",
	},
	{
		id: "price",
		label: "Price",
		minWidth: 170,
		align: "right",
		sortable: true,
		format: (value) => value.toFixed(2),
	},
];

const rows = [
	{
		id: 1,
		name: "food",
		isActive: true,
		totalSold: 10,
		price: 50,
	},
	{
		id: 2,
		name: "food",
		isActive: true,
		totalSold: 10,
		price: 50,
	},
	{
		id: 3,
		name: "food",
		isActive: true,
		totalSold: 10,
		price: 50,
	},
	{
		id: 4,
		name: "food",
		isActive: true,
		totalSold: 10,
		price: 50,
	},
].map(createData);

function createData(pros, index) {
	const { id, name, isActive, totalSold, price } = pros;
	return {
		id,
		name,
		status: isActive ? "Available" : "Sold Out",
		totalSold,
		price,
	};
}

export default function GridFoods() {
	const [sort, setSort] = React.useState({
		field: null,
		order: null,
	});
	const handleUpdate = (id) => {
		return (e) => {
			setOpen(true);
		};
	};
	const [open, setOpen] = React.useState(false);
	return (
		<Paper sx={{ mr: 5, px: 5, overflow: "hidden" }}>
			<DialogUpdateFood open={open} handleClose={() => setOpen(false)} />
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
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
						{rows.map((row) => {
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
												{column.format && typeof value === "number"
													? column.format(value)
													: value}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			{/* <Grid container justifyContent={"end"}>
				<Pagination
					page={page}
					onChange={(e, page) => setPage(page)}

					count={5}
				/>
			</Grid> */}
			<TablePagination
				component="div"
				count={rows.length}
				rowsPerPage={5}
				page={1}
				rowsPerPageOptions={[]}
			/>
		</Paper>
	);
}
