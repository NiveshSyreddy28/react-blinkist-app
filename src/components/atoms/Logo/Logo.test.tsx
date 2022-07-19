import { render , screen } from "@testing-library/react";
import Logo from "./Logo";
import React from 'react';

it("Check for Avatar", async()=>{
    render(<Logo></Logo>);
    const MuiElement = screen.getByRole(/img/i);
    expect(MuiElement).toBeInTheDocument();
})