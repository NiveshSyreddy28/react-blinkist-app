import { ComponentStory } from "@storybook/react";
import Buttons from "./Buttons";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default{
    title:'Atoms/Buttons',
    component:Buttons
}

const Template:ComponentStory<typeof Buttons> = (args) => <Buttons {...args}></Buttons>

export const connect = Template.bind({})
connect.args={
    name:'Finished Reading',
    classing:'connect'
}

export const navItemAdmin = Template.bind({})
navItemAdmin.args={
    name:'Nav Items',
    classing:'explore',
    icon:<AddIcon/>

}

export const navItem = Template.bind({})
navItem.args={
    name:'Nav Items',
    classing:'explore',
    end:<KeyboardArrowDownIcon/>

}

export const library = Template.bind({})
library.args={
    name:'Add to library',
    classing:'library',
    icon:<AddIcon/>

}

export const explore = Template.bind({})
explore.args={
    name:'Explore',
    classing:'exploreNoH',
    end:<KeyboardArrowDownIcon/>

}

export const readNow = Template.bind({})
readNow.args={
    name:'Read Now',
    classing:'readNow'

}

export const finished = Template.bind({})
finished.args={
    name:'Finished',
    classing:'finished'

}

export const readAgain = Template.bind({})
readAgain.args={
    name:'Read Again',
    classing:'readAgain'

}