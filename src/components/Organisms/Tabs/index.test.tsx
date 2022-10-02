
import { fireEvent, render, screen } from "@testing-library/react";
import Theme from "../../../Themes/Themes";
import Tabs from "./Tabs";

const handleFinished = () => {console.log("any msg")}

test("Tabs Test",async () => {
  render(<Tabs value={"1"} onFinishedClick={handleFinished} bookObject={[]}/>);
  const tabsElement = screen.getByLabelText(/Currently Reading/i);
  expect(tabsElement).toBeInTheDocument();
  const tab = screen.getByText("Currently Reading");

  expect(tab).toBeTruthy();
  expect(tab).toBeInTheDocument();
  expect(tab).toBeDefined();
})

it("Checking click in Tabs Test",async () => {
  render(<Tabs value={""} onFinishedClick={handleFinished } bookObject={[]} />);
  const buttonClickElement = screen.getByTestId("finished-tab");
  
  fireEvent.click(buttonClickElement, {target : {value : "2"}});

  // eslint-disable-next-line testing-library/no-node-access
  const changeElement = screen.getByTestId("tab-panel2")?.firstChild?.firstChild?.firstChild;
})