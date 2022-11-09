import AuthContextProvider from "./AuthContext";
import CategoriesContextProvider from "./CategoiesContext";
import FoodsContextProvider from "./FoodsContext";
import OrdersContextProvider from "./OrdersContext";
function ContextProvider({ children }) {
	return (
		<AuthContextProvider>
			<CategoriesContextProvider>
				<FoodsContextProvider>
					<OrdersContextProvider>{children}</OrdersContextProvider>
				</FoodsContextProvider>
			</CategoriesContextProvider>
		</AuthContextProvider>
	);
}

export default ContextProvider;
