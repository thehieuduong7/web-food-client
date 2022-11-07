import { FormControl, Button } from "@mui/material";
import { useContext } from "react";
import { FoodsContext } from "../../../helpers/context/FoodsContext";
import Loading from "../../layout/Loading";

function UpdateFood({ data, onReset, onClose }) {
	const {
		updateFood,
		foodsState: {
			foodSpecific: { loadingCreate },
		},
	} = useContext(FoodsContext);
	const handleSubmitAndContinue = (e) => {
		e.preventDefault();
		updateFood(data);
	};
	return (
		<>
			{loadingCreate ? (
				<Loading />
			) : (
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
			)}
		</>
	);
}

export default UpdateFood;
