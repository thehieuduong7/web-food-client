import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "./pages/home/HomeLayout";
import HomePage from "./pages/home/HomePage";
import HomeTest from "./pages/home/HomeTest";
import HomeAdminPage from "./pages/homeAdmin/HomeAdminPage";
import MyFoodsPage from "./pages/foods/MyFoddsPage";
function App() {
	return (
		<Routes>
			<Route path="/login" element={<AuthPage authRoute="login" />} />
			<Route path="/register" element={<AuthPage authRoute="register" />} />

			<Route path="/" element={<DashboardLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/foods/my" element={<MyFoodsPage />} />
			</Route>
			<Route path="/admin" element={<HomeAdminPage />} />
		</Routes>
	);
}

export default App;
