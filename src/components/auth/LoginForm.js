import React, { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/context/AuthContext";
import AlertMsg from "../layout/AlertMessage";
import { FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
const LoginForm = () => {
	const navigate = useNavigate();
	const { loginUser, alertAuth, setAlertFail } = useContext(AuthContext);
	const [stateForm, setStateForm] = useState({
		username: "",
		password: "",
	});
	const isValidate = (form) => {
		return form.username !== "" && form.password !== "";
	};
	const onChangeForm = (e) => {
		setStateForm((pre) => {
			return {
				...pre,
				[e.target.name]: e.target.value,
			};
		});
	};

	const onClickSubmit = async (e) => {
		e.preventDefault();
		if (!isValidate(stateForm)) {
			setAlertFail({ message: "input invalid" });
			return;
		}
		const loginData = await loginUser(stateForm);
		console.log("response", loginData);
		if (loginData.status === 200) {
			navigate("/", { replace: true });
		} else {
			setAlertFail({ message: loginData.message });
		}
	};

	return (
		<Grid container justifyContent={"center"} sx={{ p: 3 }}>
			<Grid
				container
				sm={7}
				lg={3}
				direction="column"
				rowGap="20px"
				sx={{
					p: 5,
					minHeight: "600px",
					display: "flex",
					borderRadius: "16px",
					background: "white",
					boxShadow: 3,
				}}
			>
				<Grid
					container
					sx={{
						justifyContent: "center",
					}}
				>
					<Header>
						<span>
							<i className="fa fa-user me-2" />
						</span>
						SIGN IN
					</Header>
				</Grid>
				{/* alert message */}
				<div>
					<AlertMsg {...alertAuth} />
				</div>
				<FormControl
					component={"form"}
					onSubmit={onClickSubmit}
					noValidate
					fullWidth
				>
					<Grid container direction="column" rowGap={"15px"}>
						<Grid container direction="column" rowGap={"10px"}>
							<TextField
								required
								fullWidth
								label="username"
								name="username"
								value={stateForm.username}
								onChange={onChangeForm}
							/>
							<TextField
								required
								fullWidth
								type="password"
								label="password"
								name="password"
								value={stateForm.password}
								onChange={onChangeForm}
							/>
						</Grid>

						{/* className="d-flex w-100 justify-content-between" */}
						<Grid container justifyContent="space-between">
							<Grid item>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="checkRemember"
									/>
									<label className="form-check-label" htmlFor="checkRemember">
										Remember
									</label>
								</div>{" "}
							</Grid>
							<Grid item>
								<div>
									<Link to={"/register"}>Create account?</Link>
								</div>{" "}
							</Grid>
						</Grid>
						<Grid container justifyContent={"center"}>
							<button
								type="submit"
								className="btn btn-primary w-100 rounded"
								style={{ height: "50px" }}
							>
								<span>
									<i className="fa fa-sign-in me-2" />
								</span>
								SIGN IN
							</button>
						</Grid>
					</Grid>
				</FormControl>
			</Grid>
		</Grid>
	);
};

const Header = styled.h2`
	font-weight: 700;
	font-size: 45px;
	margin-top: 5px;
`;

export default LoginForm;
