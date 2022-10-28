import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "./pages/home/HomeLayout";
import HomePage from "./pages/home/HomePage";
import HomeTest from "./pages/home/HomeTest";
import HomeAdminPage from "./pages/homeAdmin/HomeAdminPage";
import ListFoodsPage from "./pages/foods/ListFoodsPage";
import MyFoodsPage from "./pages/foods/MyFoodsPage";
import DetailFoodPage from "./pages/foods/DetailFoodPage";
import CreateFoodPage from "./pages/foods/CreateFoodPage";
function App() {
	return (
		<Routes>
			<Route path="/login" element={<AuthPage authRoute="login" />} />
			<Route path="/register" element={<AuthPage authRoute="register" />} />

			<Route path="/" element={<DashboardLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/test" element={<HomeTest />} />
				<Route path="/foods" element={<ListFoodsPage />} />
				<Route path="/foods/:id" element={<DetailFoodPage />} />
			</Route>
			<Route path="/admin" element={<HomeAdminPage />}>
				<Route path="/admin/foods" element={<MyFoodsPage />} />
				<Route path="/admin/foods/new" element={<CreateFoodPage />} />
				<Route path="/admin/foods/:id" element={<DetailFoodPage />} />
			</Route>
		</Routes>
	);
}

export default App;
