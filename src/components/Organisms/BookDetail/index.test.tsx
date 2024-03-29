import React from "react";
import BookDetail from "./BookDetail";
import { getBooks } from "../../../Data/Data";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";



const data = {
  id: 3,
  author: "Trey Gowdy",
  country: "Achaemenid Empire",
  imageLink: "3.svg",
  language: "Hebrew",
  link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
  pages: 176,
  title: "Doesn’t Hurt to Ask",
  year: -600,
  readTime: "13",
  readersCount: "1.9k",
  status: "finished",
  category: "featured",
};
const Book = getBooks()[0];
const response = { data: data };
const MockReadingBook = () => {
  return (
    <BrowserRouter>
      <BookDetail book={Book} />
    </BrowserRouter>
  );
};

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
describe("Book Data", () => {
  test("should render book", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    mockedAxios.post.mockResolvedValue(Promise.resolve(response));
    axios.get = jest.fn().mockResolvedValue(Promise.resolve(response));
    render(<MockReadingBook />);
    const bookId =  await screen.findByRole('button', { name: /Finished Reading/i });
    expect(bookId).toBeInTheDocument();
    expect(
      mockedAxios.post.mockResolvedValue(Promise.resolve(response))
    ).toBeCalledTimes(0);
  });
});

it("fetches erroneously data from an API", async () => {
  const errorMessage = "Network Error";

  mockedAxios.get.mockImplementationOnce(() =>
    Promise.reject(new Error(errorMessage))
  );
});

describe("Book Finished", () => {
  test("should render book", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    mockedAxios.post.mockResolvedValue(Promise.resolve(response));
    render(<MockReadingBook />);
    const bookId = await screen.findByRole('button', { name: /Finished Reading/i });
    expect(bookId).toBeInTheDocument();
    fireEvent.click(bookId);
  });
});

const MockFinishedBook = () => {
  return (
    <BrowserRouter>
      <BookDetail book={getBooks()[1]} />
    </BrowserRouter>
  );
};
describe("Book Read Again", () => {
  test("should render book", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    mockedAxios.post.mockResolvedValue(Promise.resolve(response));
    render(<MockFinishedBook />);
    const bookId = await screen.findByRole('button', { name: /Read Now/i });
    expect(bookId).toBeInTheDocument();
    fireEvent.click(bookId);
  });
});