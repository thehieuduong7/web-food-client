import { Alert, Snackbar, Typography } from "@mui/material";

function Toast({ show, type, message, onClose }) {
	return (
		<>
			<Snackbar
				open={show}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				sx={{ minWidth: 350, mt: 2 }}
			>
				<Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
					<Typography variant="body1" color="initial">
						{message}
					</Typography>
				</Alert>
			</Snackbar>
		</>
	);
}

export default Toast;
