import { Container } from "@mui/material";
import FormFood from "../../components/food/FormFood";

function CreateFoodPage() {
	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "70px" }}>
				<FormFood />
			</Container>
		</>
	);
}

export default CreateFoodPage;
