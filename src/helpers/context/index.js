import AuthContextProvider from "./AuthContext";
import CartsContextProvider from "./CartsContext";
import OrdersContextProvider from "./OrdersContext";
import CategoriesContextProvider from "./CategoriesContext";
import { ProductProvider } from "./productContext";
import FoodsContextProvider from "./FoodsContext";

function ContextProvider({ children }) {
	return (
		<AuthContextProvider>
			<CategoriesContextProvider>
				<OrdersContextProvider>
					<CartsContextProvider>
						<FoodsContextProvider>
							<ProductProvider>{children}</ProductProvider>
						</FoodsContextProvider>
					</CartsContextProvider>
				</OrdersContextProvider>
			</CategoriesContextProvider>
		</AuthContextProvider>
	);
}

export default ContextProvider;
