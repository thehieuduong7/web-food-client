import { render, screen } from "@testing-library/react";
import App from "./App";
import categoriesService from "./helpers/service/categoriesService";
test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test("category", async () => {
	render(<App />);
	const a = await categoriesService.getCategories();
	console.log(a);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
