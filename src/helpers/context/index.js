import AuthContextProvider from "./AuthContext";
import CartsContextProvider from "./CartsContext";
import OrdersContextProvider from "./OrdersContext";
import CategoriesContextProvider from "./CategoriesContext";
import { ProductProvider } from "./productContext";
import FoodsContextProvider from "./FoodsContext";
import ChatOnlineContextProvider from "./ChatOnlineContext";

function ContextProvider({ children }) {
	return (
		<AuthContextProvider>
			<CategoriesContextProvider>
				<OrdersContextProvider>
					<CartsContextProvider>
						<FoodsContextProvider>
							<ProductProvider>
								<ChatOnlineContextProvider>
									{children}
								</ChatOnlineContextProvider>
							</ProductProvider>
						</FoodsContextProvider>
					</CartsContextProvider>
				</OrdersContextProvider>
			</CategoriesContextProvider>
		</AuthContextProvider>
	);
}

export default ContextProvider;
