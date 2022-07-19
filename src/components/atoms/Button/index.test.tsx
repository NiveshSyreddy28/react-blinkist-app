import React from "react";
import { render, screen } from "@testing-library/react";

import Buttons from "./Buttons"

test("renders Readnow button", () => {
  render(<Buttons name={"ReadNow"} onClick={undefined} classing={"readNow"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/ReadNow/i);
  expect(ButtonElement).toBeInTheDocument();
});

test("renders Finished Reading button", () => {
  render(<Buttons name={"Finished Reading"} onClick={undefined} classing={"connect"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/Finished Reading/i);
  expect(ButtonElement).toBeInTheDocument();
});

test("renders explore", () => {
  render(<Buttons name={"Explore"} onClick={undefined} classing={"explore"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/Explore/i);
  expect(ButtonElement).toBeInTheDocument();
});

test("renders library", () => {
  render(<Buttons name={"Library"} onClick={undefined} classing={"library"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/Library/i);
  expect(ButtonElement).toBeInTheDocument();
});

test("renders read again", () => {
  render(<Buttons name={"Read Again"} onClick={undefined} classing={"readAgain"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/Read Again/i);
  expect(ButtonElement).toBeInTheDocument();
});

test("renders finished", () => {
  render(<Buttons name={"Finished Reading"} onClick={undefined} classing={"finished"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/Finished Reading/i);
  expect(ButtonElement).toBeInTheDocument();
});

test("renders explore NoH", () => {
  render(<Buttons name={"Explore NoH"} onClick={undefined} classing={"exploreNoH"} icon={undefined} end={undefined}/>);
  const ButtonElement = screen.getByText(/Explore NoH/i);
  expect(ButtonElement).toBeInTheDocument();
});