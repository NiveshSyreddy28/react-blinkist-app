import { ComponentStory } from "@storybook/react";
import { Avatar } from "@mui/material";
import Avatars from "./Avatars";

export default{
    title: 'Atoms/Avatar',
    Component: Avatar
};

const Template: ComponentStory<typeof Avatars> = (args) => (
    <Avatars{...args} />
)

export const S = Template.bind({})
S.args = {
    chars : "S"
}

export const N = Template.bind({})
N.args = {
    chars : "N"
}