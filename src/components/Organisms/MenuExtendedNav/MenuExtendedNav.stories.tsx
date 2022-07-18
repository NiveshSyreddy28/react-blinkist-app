import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../../Themes/Themes";
// import { getBooks } from "../../../Data/Data";
import { MemoryRouter } from "react-router-dom";
import ExploreDropDown from "./index1";

// const ExploreDropDownStory = {
//   title: "Organisms/ExploreDropDownStory",
//   component: ExploreDropDown,
// } as ComponentMeta<typeof ExploreDropDown>;

// const Template: ComponentStory<typeof ExploreDropDown> = (args) => (
//   <ThemeProvider theme={Theme}>
//     <MemoryRouter>
//       <ExploreDropDown {...args} />
//     </MemoryRouter>
//   </ThemeProvider>
// );

// export const exploreDropDownStory = Template.bind({});
// exploreDropDownStory.args = {
//   bookObject: getBooks(),
// };

// export default ExploreDropDownStory;

import MenuExtendedNav from ".";

export default{
    title: "Organisms/menuExtendedNav",
    component: MenuExtendedNav
}
// const Template: ComponentStory<typeof ExploreDropDown> = (args) => (
//         <MenuExtendedNav {...args} />
//   );
  
//   export const menuExtendedNav = Template.bind({});
//   menuExtendedNav.args = {
//     // bookObject: getBooks(),
//   };

 export const menuExtendedNav = () => <MenuExtendedNav></MenuExtendedNav>;