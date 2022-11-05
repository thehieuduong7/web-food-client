import { FormControl, Button } from "@mui/material";
import { useContext } from "react";
import { FoodsContext } from "../../../helpers/context/FoodsContext";

function UpdateFood({ data, onReset, onClose }) {
	const { updateFood } = useContext(FoodsContext);
	const handleSubmitAndContinue = (e) => {
		e.preventDefault();
		updateFood(data);
	};
	return (
		<>
			<FormControl sx={{ flexDirection: "row", gap: 2 }} fullWidth>
				<Button variant="outlined" color="inherit">
					Cancel
				</Button>
				<Button
					type={"submit"}
					onClick={handleSubmitAndContinue}
					variant="outlined"
					color="inherit"
				>
					Save
				</Button>
			</FormControl>
		</>
	);
}

export default UpdateFood;
