import AuthContextProvider from "./authContext";
import { OrderProvider } from "./orderContext";
import OrdersContextProvider from "./OrdersContext";
import CategoriesContextProvider from "./CategoiesContext";
import { ProductProvider } from "./productContext";

function ContextProvider({ children }) {
	return (
		<AuthContextProvider>
			<CategoriesContextProvider>
				<OrdersContextProvider>
					<OrderProvider>
						<ProductProvider>{children}</ProductProvider>
					</OrderProvider>
				</OrdersContextProvider>
			</CategoriesContextProvider>
		</AuthContextProvider>
	);
}

export default ContextProvider;
