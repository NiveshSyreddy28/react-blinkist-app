import {render,screen} from '@testing-library/react'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom';

const renderHeader= () => {
    render(
      <BrowserRouter>
        <LoginPage></LoginPage>
      </BrowserRouter>,
    );
  };
  
  it('header', () => {
      renderHeader();
  });
  test("Testing Login box", () => {
    render(<LoginPage />);
    const element = screen.getByTestId("Login-Box");
    expect(element).toBeTruthy();
  });
