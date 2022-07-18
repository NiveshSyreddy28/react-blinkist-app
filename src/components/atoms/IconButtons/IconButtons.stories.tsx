import { ComponentStory } from "@storybook/react";
import IconButtons from "./IconButtons";
import { ReactComponent as Search } from "./../../../stories/assets/search.svg";
import { ReactComponent as UpArrow } from "./../../../stories/assets/up arrow.svg";
import { ReactComponent as DownArrow } from "./../../../stories/assets/down arrow.svg";
export default{
    title: 'Atoms/IconButtons',
    component : IconButtons
}

const Template: ComponentStory<typeof IconButtons> = args =>( <IconButtons {...args} />);

export const upArrow = Template.bind({});
upArrow.args={
    children:<UpArrow/>
}

export const search = Template.bind({});
search.args={
    children:<Search/>
}

export const downArrow = Template.bind({});
downArrow.args={
    children:<DownArrow/>
}