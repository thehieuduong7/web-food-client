import { Grid } from "@mui/material";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/nagivation/NavBar";
import { Divider } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../helpers/context/AuthContext";
import Loading from "../../components/layout/Loading";
function HomeLayout() {
	const {
		authState: { authLoading, authorization },
	} = useContext(AuthContext);
	const nagivate = useNavigate();
	if (authLoading) return <Loading />;
	else if (authorization === "admin") {
		nagivate("/admin");
		return;
	}
	return (
		<Grid container direction="column">
			<Navbar />
			<Outlet />
			<Divider sx={{ my: 8, borderBottom: 2 }} />
			<Footer />
		</Grid>
	);
}

export default HomeLayout;
