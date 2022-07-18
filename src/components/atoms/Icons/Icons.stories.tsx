import { ComponentStory } from "@storybook/react";
import Icons from "./Icons";

import Search from "./../../../stories/assets/search.svg";
import DownArrow from "./../../../stories/assets/down arrow.svg";
import UpArrow from "./../../../stories/assets/up arrow.svg";
import Add from "./../../../stories/assets/add.svg";
import Time from "./../../../stories/assets/time.svg";
import Entrepreneurship from "./../../../stories/assets/entrepreneurship.svg";
import Economics from "./../../../stories/assets/economics.svg";
import CorporateCulture from "./../../../stories/assets/corporate culture.svg";
import Relationship from "./../../../stories/assets/sex and relationship.svg";
import Politcs from "./../../../stories/assets/politics.svg";
import Communication from "./../../../stories/assets/communication skills.svg";
import Motivation from "./../../../stories/assets/motivation and inspiration.svg";
import Career from "./../../../stories/assets/career and success.svg";
import Nature from "./../../../stories/assets/nature.svg";
import Remove from "./../../../stories/assets/remove 2.svg";
import ReadAgain from "./../../../stories/assets/read again.svg";
import Uncheked from "./../../../stories/assets/unchecked.svg";
import Check from "./../../../stories/assets/check.svg";
import Upload from "./../../../stories/assets/upload.svg";
import Edit from "./../../../stories/assets/edit.svg";



export default{
    title: "Atoms/Icons",
    component: Icons
}


const Template:ComponentStory<typeof Icons> = args => (<Icons {...args}/>);

export const search = Template.bind({});
search.args={
    src: Search
}

export const downArrow = Template.bind({});
downArrow.args={
    src: DownArrow
}

export const upArrow = Template.bind({});
upArrow.args={
    src: UpArrow
}

export const add = Template.bind({});
add.args={
    src: Add
}

export const time = Template.bind({});
time.args={
    src: Time
}

export const entrepreneurship = Template.bind({});
entrepreneurship.args={
    src: Entrepreneurship
}

export const economics = Template.bind({});
economics.args={
    src: Economics
}

export const corporateCulture = Template.bind({});
corporateCulture.args={
    src: CorporateCulture
}

export const relationship = Template.bind({});
relationship.args={
    src: Relationship
}

export const politics = Template.bind({});
politics.args={
    src: Politcs
}

export const communication = Template.bind({});
communication.args={
    src: Communication
}

export const motivation = Template.bind({});
motivation.args={
    src: Motivation
}

export const career = Template.bind({});
career.args={
    src: Career
}

export const nature = Template.bind({});
nature.args={
    src: Nature
}

export const remove = Template.bind({});
remove.args={
    src: Remove
}

export const readAgain = Template.bind({});
readAgain.args={
    src: ReadAgain
}

export const uncheked = Template.bind({});
uncheked.args={
    src: Uncheked
}

export const check = Template.bind({});
check.args={
    src: Check
}

export const upload = Template.bind({});
upload.args={
    src: Upload
}

export const edit = Template.bind({});
edit.args={
    src: Edit
}
