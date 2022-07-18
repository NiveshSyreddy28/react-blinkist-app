import ExtendedNav from "./ExtendedNav";
import { ComponentStory } from "@storybook/react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Icons from "../../atoms/Icons/Icons";
import politics from "../../../stories/assets/politics.svg"

export default {
    title: "Molecules/ExtendedNav",
    component: ExtendedNav
}

const Template:ComponentStory<typeof ExtendedNav> = (args) => <ExtendedNav {...args}></ExtendedNav>

export const Entre = Template.bind({})
Entre.args={
    name:'Entrepreneurship',
    icon:<NotificationsNoneIcon fontSize="small"></NotificationsNoneIcon>,
    type: "active"
}

export const Politics = Template.bind({})
Politics.args={
    name:'Politics',
    icon:<Icons src={politics}></Icons>,
    type: "mock"
}