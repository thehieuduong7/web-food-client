import { Grid } from "@mui/material";
import Banner from "../../components/home/Banner";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import { Divider } from "@mui/material";
import TopItems from "../../components/home/TopItems";
function HomePage() {
	return (
		<Grid
			container
			direction="column"
			// sx={{
			// 	background: " rgba(255, 0, 0, 0.5);",
			// }}
		>
			<Navbar />
			<Banner />
			<Divider sx={{ my: 8, borderBottom: 2 }} />
			<TopItems />
			<Divider sx={{ my: 8, borderBottom: 2 }} />

			<Footer />
		</Grid>
	);
}

export default HomePage;
