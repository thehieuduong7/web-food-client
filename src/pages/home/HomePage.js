import Banner from "../../components/home/Banner";
import { Divider } from "@mui/material";
import TopItems from "../../components/home/TopItems";
import Information from "../../components/home/Information";
function HomePage() {
	return (
		<>
			<Banner />
			<Divider sx={{ my: 8, borderBottom: 2 }} />
			<TopItems />
			<Information />
		</>
	);
}

export default HomePage;
