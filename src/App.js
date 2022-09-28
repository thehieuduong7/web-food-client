import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home/HomePage";
import PrivateCustomRoute from "./components/route/PrivateCustomRoute";
function App() {
	return (
		<Routes>
			<Route path="/login" element={<AuthPage authRoute="login" />} />
			<Route path="/register" element={<AuthPage authRoute="register" />} />
			<Route
				path="/home"
				element={
					<PrivateCustomRoute>
						<HomePage />
					</PrivateCustomRoute>
				}
			/>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
}

export default App;
