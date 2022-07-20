import BookDetail from './BookDetail';
import { getBooks } from '../../../Data/Data';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory } from '@storybook/react';

  export default {
    title: 'Organisms/BookDetail',
    component: BookDetail,
  };
  const template: ComponentStory<typeof BookDetail> = (
      _args,
    ) => (
      <Router>
        <BookDetail book={getBooks()[0]}  />
      </Router>
  );
  
    export const bookDetail= template.bind({});
    bookDetail.args = {
    }