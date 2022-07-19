import { render } from '@testing-library/react';
import MenuExtendedNav from './index';
import { BrowserRouter } from 'react-router-dom';

const renderDropDown= () => {
    render(
      <BrowserRouter>
        <MenuExtendedNav></MenuExtendedNav>
      </BrowserRouter>,
    );
  };
  
  it('DropDown', () => {
    renderDropDown();
  });