import { useContext, useEffect } from "react";
import { FoodsContext } from "../../helpers/context/FoodsContext";
import { foodsService } from "../../helpers/service/foodsService";
function HomeTest() {
	const { loadListFoods, foodsState } = useContext(FoodsContext);
	useEffect(() => {
		loadListFoods(0, 10);
	}, []);
	console.log(foodsState);

	return <>test</>;
}

export default HomeTest;
