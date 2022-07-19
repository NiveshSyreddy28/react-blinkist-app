import { render , screen } from "@testing-library/react";
import Icons from "./Icons";
import React from 'react';

it("Check for Avatar", async()=>{
    render(<Icons src={"../../../stories/assets/add.svg"}></Icons>);
    const MuiElement = screen.getByRole(/img/i);
    expect(MuiElement).toBeInTheDocument();
})