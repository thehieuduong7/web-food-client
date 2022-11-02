import * as React from "react";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import FormFood from "../FormFood";
import { Container } from "@mui/system";
import { FoodsContext } from "../../../helpers/context/FoodsContext";
import Loading from "../../layout/Loading";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function DialogCreateFood({ open, handleClose }) {
	const { loading } = React.useContext(FoodsContext);
	return (
		<>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<Container maxWidth="lg">
							<IconButton
								edge="start"
								color="inherit"
								onClick={handleClose}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>
						</Container>
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg">
					{loading ? <Loading /> : <FormFood edit={false} />}
				</Container>
			</Dialog>
		</>
	);
}

export default DialogCreateFood;
