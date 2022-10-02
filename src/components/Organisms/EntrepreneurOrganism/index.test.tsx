import { ThemeProvider } from "@emotion/react";
import {  render, screen,fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../Themes/Themes";
import { getBooks } from "../../../Data/Data";
import CardStateTrending from "./index";
import TabsandCardState from "../../molecules/TabscardState/TabsCardState";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios"
type Book = {
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

it("renders Book Card author Organism3", () => {
    render(
      <ThemeProvider theme={Theme}>
        <CardStateTrending type={"1"} books={getBooks()} />
      </ThemeProvider>,
      {
        wrapper: MemoryRouter,
      }
    );
   
  });

  test("Testing cardState", () => {
    render(<CardStateTrending type={""} books={[]} />);
    const element = screen.getByTestId("Filtered Books");
    expect(element).toBeTruthy();
  });

  it("renders Explore Card State Organism", () => {
    render(
      <ThemeProvider theme={Theme}>
        <TabsandCardState
          books={getBooks()}
          onFinishedClick={handleFinish}
          type="explore"
        />
      </ThemeProvider>,
      {
        wrapper: MemoryRouter,
      }
    )
    const tabState = screen.getAllByText("");
  
    expect(tabState[0]).toBeInTheDocument();
    expect(tabState[0]).toBeDefined();
    
  });

  const handleFinish = () => {};

 

const renderFunction = () => {
    render(
      <BrowserRouter>
        <CardStateTrending type={""}books={[]} ></CardStateTrending>
      </BrowserRouter>,
    );
  };

it('should have finished button', () => {
    renderFunction();
    const Finished = screen.getByTestId("Filtered Books");
    expect(Finished).toBeInTheDocument();
  });
  
  const data = [
  {
      "id": 3,
      "author": "Trey Gowdy",
      "country": "Achaemenid Empire",
      "imageLink": "3.svg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "Doesn’t Hurt to Ask",
      "year": -600,
      "readTime": "13",
      "readersCount": "1.9k",
      "status": "finished",
      "category": "featured"
    }
  ]


const response={data:data};
const MockBook = () =>{
return(
<BrowserRouter>
<CardStateTrending type={""}books={data}></CardStateTrending>
</BrowserRouter>
)

}
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
