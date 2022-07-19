import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../Themes/Themes";
import { getBooks } from "../../../Data/Data";
import Toggles from "./ToggleTabs";

afterEach(cleanup);

const handleFinish = (_arg: any) => {};

it("renders Reading Card State Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <Toggles
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
});
test("Testing Banner Title", () => {
    render(<Toggles />);
    // eslint-disable-next-line testing-library/await-async-query
    const element = screen.findAllByLabelText("Synopsis");
    expect(element).toBeTruthy();
    // eslint-disable-next-line testing-library/await-async-query
    const tab = screen.findAllByLabelText("Who is it for");
    expect(tab).toBeTruthy();
  });