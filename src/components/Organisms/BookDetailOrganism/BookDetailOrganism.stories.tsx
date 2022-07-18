import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailOrganisms from './BookDetailOrganism';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'organisms / bookDetailOrganism',
  component: BookDetailOrganisms
};
const template: ComponentStory<typeof BookDetailOrganisms> = (
    args,
  ) => (
    <Router>
      <BookDetailOrganisms />
    </Router>
);

  export const bookDetailOrganism = template.bind({});
  bookDetailOrganism.args = {
  }