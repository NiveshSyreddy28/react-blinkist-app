import { render } from '@testing-library/react';
import  ExtendedNav from "./ExtendedNav"
import { BrowserRouter } from 'react-router-dom';

const renderExtendedNavActive= () => {
    render(
      <BrowserRouter>
        <ExtendedNav icon={undefined} name={'Politics'} type={'active'} ></ExtendedNav>
      </BrowserRouter>,
    );
  };
  
  it('ExtendedNavActive', () => {
    renderExtendedNavActive();
  });

  const renderExtendedNavMock= () => {
    render(
      <BrowserRouter>
        <ExtendedNav icon={undefined} name={'Money'} type={'mock'} ></ExtendedNav>
      </BrowserRouter>,
    );
  };
  
  it('ExtendedNavMock', () => {
    renderExtendedNavMock();
  });