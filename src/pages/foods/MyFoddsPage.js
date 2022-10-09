import { Container, Grid } from "@mui/material";
import ButtonCreateFood from "../../components/food/ButtonCreateFood";

function MyFoodsPage() {
	return (
		<>
			<Container
				maxWidth="lg"
				sx={{ marginTop: "70px", minHeight: "1000px" }}
			></Container>
			<Grid sx={{ position: "fixed", bottom: "150px", right: "10%" }}>
				<ButtonCreateFood />
			</Grid>
		</>
	);
}

export default MyFoodsPage;
