import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../Themes/Themes";
import { getBooks } from "../../../Data/Data";
import MyLibPage from "./MyLibrary";
import Tabs from '../../Organisms/Tabs/Tabs';
type data = {
  id:number,
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
  category:string;
};

afterEach(cleanup);

console.log("any msg");

it("renders Entrepeneuship page", () => {
  render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter
        initialEntries={[{ pathname: "/", state: getBooks() }]}
      >
        <MyLibPage />
      </MemoryRouter>
    </ThemeProvider>
  );

  const tabState = screen.getAllByText("My Library");

  expect(tabState[0]).toBeTruthy();
  expect(tabState[0]).toBeInTheDocument();
  expect(tabState[0]).toBeDefined();
});