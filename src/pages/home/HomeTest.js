import { useContext, useEffect } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";

function HomeTest() {
	const {
		foodsState: { foodSpecific },
		loadSpecific,
	} = useContext(FoodsContext);
	console.log("test", foodSpecific);
	useEffect(() => {
		loadSpecific(6);
	}, []);
	return <>test</>;
}

export default HomeTest;
