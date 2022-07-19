import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailOrganisms from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'organisms / bookDetailOrganism',
  component: BookDetailOrganisms
};
const template: ComponentStory<typeof BookDetailOrganisms> = (
    args,
  ) => (
    <Router>
      <BookDetailOrganisms book={{
      id: 0,
      author: '',
      country: '',
      imageLink: '',
      language: '',
      link: '',
      pages: 0,
      title: '',
      year: 0,
      readTime: '',
      readersCount: '',
      status: '',
      category: ''
    }} />
    </Router>
);

  export const bookDetailOrganism = template.bind({});
  bookDetailOrganism.args = {
  }