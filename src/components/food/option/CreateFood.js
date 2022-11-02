import { FormControl, Button } from "@mui/material";
import { useContext } from "react";
import { FoodsContext } from "../../../helpers/context/FoodsContext";
import Loading from "../../layout/Loading";

function CreateFood({ data, onReset, onClose }) {
	const {
		createFood,
		foodsState: {
			foodSpecific: { loadingCreate },
		},
	} = useContext(FoodsContext);
	const handleSubmitAndContinue = (e) => {
		e.preventDefault();
		createFood(data);
	};
	return (
		<>
			{loadingCreate ? (
				<Loading />
			) : (
				<FormControl sx={{ flexDirection: "row", gap: 2 }} fullWidth>
					<Button variant="outlined" color="inherit">
						Clear
					</Button>
					<Button
						type={"submit"}
						variant="outlined"
						color="inherit"
						onClick={handleSubmitAndContinue}
					>
						Save and continue
					</Button>
					<Button type={"submit"} variant="outlined" color="inherit">
						Save
					</Button>
				</FormControl>
			)}
		</>
	);
}

export default CreateFood;
