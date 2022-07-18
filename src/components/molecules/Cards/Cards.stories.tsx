import Cards from "./Cards"
import { ComponentStory } from "@storybook/react";
import { getBooks } from "../../../../Data/Data";

 export default{
    title : "Molecules/BookCards",
    component : Cards
 }

//  export const component = () => <Cards props.class:{"Library"}></Cards>
const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const library = Template.bind({})
library.args={
    book:getBooks()[0],
    typeOfCard:'Library',
}

export const ReadAgain = Template.bind({})
ReadAgain.args={
    book:getBooks()[1],
    typeOfCard:'Read again',
}

export const Finished = Template.bind({})
Finished.args={
    book:getBooks()[2],
    typeOfCard:'Finished',
}

export const explore = Template.bind({})
explore.args={
    book:getBooks()[3],
    typeOfCard:'Explore',
}

