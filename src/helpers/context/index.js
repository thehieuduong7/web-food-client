import AuthContextProvider from "./AuthContext";
import CategoriesContextProvider from "./CategoiesContext";
import FoodsContextProvider from "./FoodsContext";
function ContextProvider({ children }) {
	return (
		<AuthContextProvider>
			<CategoriesContextProvider>
				<FoodsContextProvider>{children}</FoodsContextProvider>
			</CategoriesContextProvider>
		</AuthContextProvider>
	);
}

export default ContextProvider;
