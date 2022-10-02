import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen ,fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../Themes/Themes";
import Search from "./SearchBar";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);
console.log("any msg");
it("renders Text Field Search molecule", () => {
  render(
    <ThemeProvider theme={Theme}>
      <Search />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const SearchText = screen.getByPlaceholderText(
    "Search by title or author"
  );
  fireEvent.change(SearchText, {
    target: { value: "new content" }
  });
  const input = screen.getByPlaceholderText(
    "Search by title or author").nodeValue;
 expect(input).toBe(null)
  expect(SearchText).toBeTruthy();
  expect(SearchText).toHaveClass("MuiInputBase-inputAdornedStart");
  expect(SearchText).toBeInTheDocument();
  expect(SearchText).toBeDefined();
});

test("Testing fetching", () => {
  render(<Search />);
  const element = screen.getByTestId("fetch");
  expect(element).toBeTruthy();
const setSearch = jest.fn((value) => {})
});