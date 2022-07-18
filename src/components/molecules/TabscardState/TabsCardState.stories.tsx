import React from "react";
import { ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../../Themes/Themes";
import { getBooks } from "../../../../Data/Data"
import { MemoryRouter } from "react-router-dom";
import TabsandCardState from "./TabsCardState"
import { TrendingBooks } from "../../../../Data/Data";
import { JustAddedBooks } from "../../../../Data/Data";
import { FeaturedBooks } from "../../../../Data/Data";


const CardState = {
  title: "Molecules/CardState",
  component: TabsandCardState,
} 

const Template: ComponentStory<typeof TabsandCardState> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <TabsandCardState {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const CurrentlyReadingCards = Template.bind({});
CurrentlyReadingCards.args = {
  books: getBooks(),
  type:"reading",
//   cardType: "Finished",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const FinishedCards = Template.bind({});
FinishedCards.args = {
  books: getBooks(),
  type:"finished",
//   cardType: "Read again",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const TrendingCards = Template.bind({});
TrendingCards.args = {
  books: TrendingBooks(),
  type:"myLibrary",
//   cardType: "Read again",
  onFinishedClick: () => handleClick(TrendingBooks()[0]),
};

export const JustAddedCards = Template.bind({});
JustAddedCards.args = {
  books: JustAddedBooks(),
  type:"myLibrary",
//   cardType: "Read again",
  onFinishedClick: () => handleClick(JustAddedBooks()[0]),
};
export const FeaturedAudioCards = Template.bind({});
FeaturedAudioCards.args = {
  books: FeaturedBooks(),
  type:"myLibrary",
//   cardType: "Read again",
  onFinishedClick: () => handleClick(FeaturedBooks()[0]),
};

export const LibraryCards = Template.bind({});
LibraryCards.args = {
  books: getBooks(),
  type: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export default CardState;

const handleClick = (arg: any) => {};