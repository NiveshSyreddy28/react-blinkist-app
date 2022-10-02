import { ThemeProvider } from "@emotion/react";
import { cleanup } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../Themes/Themes";
import BookCard from "./BookCards";
import { getBooks } from "../../../Data/Data";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: () => {},
  withAuthenticationRequired: (component: any) => component,

  useAuth0: () => {
    return {
      isAuthenticated: true,
      user: { sub: "foobar" },
      mockFn: true,
      logout: jest.fn(),
    };
  },
}));

afterEach(cleanup);
const book = getBooks()[0];

it("renders Book Card author Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  let Librarybutton = screen.getByText("13-minute read");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

const handleFinish = (_arg: any) => {};

it("renders Book Card title Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );

  let Librarybutton = screen.getByText("13-minute read");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});
it("renders Book Card Finished button Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
        typeOfCard="reading"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  let Librarybutton = screen.getByText("1.9k reads");

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toHaveClass("MuiTypography-body1");
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

it("renders Book Card Read again button Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
        typeOfCard="finished"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  let Librarybutton = screen.getByText(book.author);

  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});

it("renders Book Card Add to Library button Organism", () => {
  render(
    <ThemeProvider theme={Theme}>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
        typeOfCard="myLibrary"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  let Librarybutton = screen.getByText(book.author);
  expect(Librarybutton).toBeTruthy();
  expect(Librarybutton).toBeInTheDocument();
  expect(Librarybutton).toBeDefined();
});





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

const response = { data: data };
const MockReadingBook = () => {
  return (
    <BrowserRouter>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
        typeOfCard="reading"
      />
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
    const bookId =  await screen.findByText("13-minute read");
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
    const bookId = await screen.findByRole('button', { name: /Finished/i });
    expect(bookId).toBeInTheDocument();
    fireEvent.click(bookId);
  });
});

const MockFinishedBook = () => {
  return (
    <BrowserRouter>
      <BookCard
        book={book}
        onFinishedClick={handleFinish}
        typeOfCard="finished"
      />
    </BrowserRouter>
  );
};
describe("Book Read Again", () => {
  test("should render book", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    mockedAxios.post.mockResolvedValue(Promise.resolve(response));
    render(<MockFinishedBook />);
    const bookId = await screen.findByRole('button', { name: /Read Again/i });
    expect(bookId).toBeInTheDocument();
    fireEvent.click(bookId);
  });
});