import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
function PermitDeniedPage() {
	const { logout } = useContext(AuthContext);
	const nagivate = useNavigate();
	const handleRedirect = () => {
		logout();
		nagivate("/login");
	};
	return (
		<>
			<Grid container justifyContent={"center"} sx={{ mt: 25 }}>
				Permition denied
				<Button
					variant="outlined"
					color="error"
					onClick={handleRedirect}
					sx={{ ml: 2 }}
				>
					redirect to login
				</Button>
			</Grid>
		</>
	);
}

export default PermitDeniedPage;
