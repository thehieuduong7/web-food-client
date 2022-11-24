import { IconButton, Button, FormControl, TextField } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useContext, useState } from "react";
import { CartsContext } from "../../../helpers/context/CartsContext";
const min = 0;
const max = 10;

function AddCart({ id }) {
	const [value, setValue] = useState(0);
	const { addCarts } = useContext(CartsContext);
	const handleAddCart = () => {
		addCarts({ productId: id, amount: value });
	};
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
				<Button variant="outlined" onClick={handleAddCart}>
					<AddShoppingCartIcon fontSize="small" />
				</Button>
			</FormControl>
		</>
	);
}

export default AddCart;
