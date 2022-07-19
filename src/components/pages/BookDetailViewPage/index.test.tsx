import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../Themes/Themes";
import { getBooks } from "../../../Data/Data";
import BookDetailPage from "./BookDetailViewPage";

afterEach(cleanup);
it("renders BookDetail page", () => {
    const state = {book:getBooks()[0],bookObject:getBooks()}
  render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/explore/bookdetails",state:{...state} }]}
      >
        <BookDetailPage />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getByText("Get the key ideas from");

  expect(tabState).toBeTruthy();
  expect(tabState).toBeInTheDocument();
  expect(tabState).toBeDefined();
});