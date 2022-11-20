import AuthContextProvider from "./AuthContext";
import CartsContextProvider from "./CartsContext";
import OrdersContextProvider from "./OrdersContext";
import CategoriesContextProvider from "./CategoiesContext";
import { ProductProvider } from "./productContext";

function ContextProvider({ children }) {
	return (
		<AuthContextProvider>
			<CategoriesContextProvider>
				<OrdersContextProvider>
					<CartsContextProvider>
						<ProductProvider>{children}</ProductProvider>
					</CartsContextProvider>
				</OrdersContextProvider>
			</CategoriesContextProvider>
		</AuthContextProvider>
	);
}

export default ContextProvider;
