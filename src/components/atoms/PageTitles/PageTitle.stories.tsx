import PageTitle from "./PageTitle";
import { ComponentStory } from "@storybook/react";

export default{
    title: "Atoms/PageTitles",
    Component: PageTitle
};


const Template: ComponentStory<typeof PageTitle> = (args) => (
    <PageTitle{...args} />
)

export const pageTitle = Template.bind({})
pageTitle.args = {
    title : "Trending Blinks"
}