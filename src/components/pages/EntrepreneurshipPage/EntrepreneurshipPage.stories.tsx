import React from 'react';
import { ComponentStory } from '@storybook/react';
import EntrepreneurshipPage from './EntrepreneurshipPage';
import { BrowserRouter as Router } from 'react-router-dom';
// import { getBooks } from '../../../Data/Data';

export default {
  title: 'pages / enterpreuner',
  component: EntrepreneurshipPage,
};
const Template: ComponentStory<typeof EntrepreneurshipPage> = (args) => (
  <Router>
    <EntrepreneurshipPage />
  </Router>
);

export const entrepreneurship = Template.bind({});
entrepreneurship.args = {};