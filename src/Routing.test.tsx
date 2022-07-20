import {render} from '@testing-library/react';
import Routing from './Routing';

const renderHeader= () => {
  render(
      <Routing></Routing>
    
  );
};

it('header', () => {
    renderHeader();
});