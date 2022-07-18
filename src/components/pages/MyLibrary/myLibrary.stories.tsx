import React from 'react';
import { ComponentStory } from '@storybook/react';
import MyLibPage from './MyLibrary';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBooks } from '../../../../Data/Data';

export default {
  title: 'pages/myLibPage',
  component: MyLibPage,
};
const Template: ComponentStory<typeof MyLibPage> = (args) => (
  <Router>
    <MyLibPage />
  </Router>
);

export const myLibPage = Template.bind({});
myLibPage.args = {};