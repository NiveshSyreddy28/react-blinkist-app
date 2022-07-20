import React from "react";
import { ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../../Themes/Themes";
import BookCard from "./BookCards";
import { getBooks } from "../../../../Data/Data";
import { MemoryRouter } from "react-router-dom";

const BookCardStory = {
  title: "Organisms/bookCard",
  component: BookCard,
} ;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <BookCard {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  book:getBooks()[0],
    typeOfCard:"reading",
    onFinishedClick: ()=>handleClick(getBooks()[0])
};

export const FinishedCard = Template.bind({});
FinishedCard.args = {
  book: getBooks()[0],
  typeOfCard: "finished",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const AddToLibraryCard = Template.bind({});
AddToLibraryCard.args = {
  book: getBooks()[0],
  typeOfCard: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};


export const ExploreCard = Template.bind({});
ExploreCard.args = {
  book: getBooks()[0],
  typeOfCard: "explore",
  onFinishedClick: () => handleClick(getBooks()[0]),
};
export default BookCardStory;


const handleClick= (arg:any)=> {

}