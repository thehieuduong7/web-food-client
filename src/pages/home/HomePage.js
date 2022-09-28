import { Grid } from "@mui/material";
import Banner from "../../components/home/Banner";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
function HomePage() {
	return (
		<Grid
			container
			direction="column"
			sx={{
				background: " rgba(255, 0, 0, 0.5);",
			}}
		>
			<Navbar />
			<Banner />
			<div style={{ minHeight: "1500px" }}>hello world</div>
			<Footer />
		</Grid>
	);
}

export default HomePage;
