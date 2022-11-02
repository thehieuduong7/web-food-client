import { Container } from "@mui/material";
import InfoFood from "../../components/food/InfoFood";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import Loading from "../../components/layout/Loading";

function DetailFoodPage() {
	let { id } = useParams();
	id = 6;
	const {
		foodsState: {
			foodSpecific: { loading },
		},
		loadSpecific,
	} = useContext(FoodsContext);

	useEffect(() => {
		loadSpecific(id);
	}, []);

	return (
		<>
			<Container maxWidth="xl" sx={{ marginTop: "100px" }}>
				{loading ? <Loading /> : <InfoFood />}
			</Container>
		</>
	);
}

export default DetailFoodPage;
