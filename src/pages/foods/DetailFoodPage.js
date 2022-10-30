import { Container } from "@mui/material";
import InfoFood from "../../components/food/InfoFood";
import { useParams } from "react-router-dom";

function DetailFoodPage() {
	let { id } = useParams();

	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "100px" }}>
				<InfoFood />
			</Container>
		</>
	);
}

export default DetailFoodPage;
