import { Container } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import FormCategoriesUpdate from "../../components/form/FormCategoriesUpdate";
import Loading from "../../components/layout/Loading";
import Toast from "../../components/layout/Toast";
import { CategoriesContext } from "../../helpers/context/CategoriesContext";

function UpdateCategoriesPage() {
	const { id } = useParams();
	const {
		updateCategory,
		loadingSpecific,
		categoriesState: {
			specific: { loading, data },
		},
		alert,
		clearAlert,
	} = useContext(CategoriesContext);
	useEffect(() => {
		loadingSpecific(id);
	}, [id]);
	if (loading) return <Loading />;
	console.log({ data });
	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "70px" }}>
				<Toast
					show={alert.show}
					type={alert.type}
					message={alert.message}
					onClose={clearAlert}
				/>
				<FormCategoriesUpdate
					data={data}
					onSubmit={(form) => updateCategory(form)}
				/>
			</Container>
		</>
	);
}

export default UpdateCategoriesPage;
