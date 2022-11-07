import { IconButton, Button, FormControl, TextField } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useState } from "react";
const min = 0;
const max = 10;

function AddCart() {
	const [value, setValue] = useState();

	return (
		<>
			<FormControl sx={{ flexDirection: "row" }} fullWidth>
				<TextField
					label="Amount"
					type="number"
					inputProps={{ min, max }}
					value={value}
					onChange={(e) => {
						var value = parseInt(e.target.value, 10);
						if (value > max) value = max;
						if (value < min) value = min;
						setValue(value);
					}}
					variant="outlined"
					fullWidth
					sx={{
						minWidth: "115px",
						maxWidth: "324px",
					}}
				/>
				<Button variant="outlined">
					<AddShoppingCartIcon fontSize="small" />
				</Button>
			</FormControl>
		</>
	);
}

export default AddCart;
