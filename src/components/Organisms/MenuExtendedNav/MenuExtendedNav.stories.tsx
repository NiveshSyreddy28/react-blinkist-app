import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../../Themes/Themes";
import { getBooks } from "../../../../Data/Data";
import { MemoryRouter } from "react-router-dom";
import ExploreDropDown from "./index";

const ExploreDropDownStory = {
  title: "Organisms/ExploreDropDownStory",
  component: ExploreDropDown,
} as ComponentMeta<typeof ExploreDropDown>;

const Template: ComponentStory<typeof ExploreDropDown> = () => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <ExploreDropDown  />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  bookObject: getBooks(),
};

export default ExploreDropDownStory;

