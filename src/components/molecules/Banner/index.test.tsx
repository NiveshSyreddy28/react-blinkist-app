import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("Testing Banner", () => {
  render(<Banner />);
  const element = screen.getByTestId("Banner");
  expect(element).toBeTruthy();
});

test("Testing Banner Title", () => {
  render(<Banner />);
  const element = screen.getByTestId("Banner Title");
  expect(element).toBeTruthy();
});

test("Testing Banner Description", () => {
  render(<Banner />);
  const element = screen.getByTestId("Banner Description");
  expect(element).toBeTruthy();
});

test("Testing Banner Image", () => {
  render(<Banner />);
  const element = screen.getByTestId("Banner Image");
  expect(element).toBeTruthy();
});