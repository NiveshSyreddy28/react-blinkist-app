import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailViewPage from './BookDetailViewPage';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'pages/bookDetailViewPage',
  component: BookDetailViewPage,
};
const Template: ComponentStory<typeof BookDetailViewPage> = (args) => (
  <Router>
    <BookDetailViewPage />
  </Router>
);

export const bookDetailViewPage = Template.bind({});
bookDetailViewPage.args = {};