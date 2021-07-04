import * as React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Navbar from "../navbar";

describe("Navbar", () => {
  it("renders navbar open", () => {
    const open = true;
    const textInDocument = "About";
    const { getByText } = render(<Navbar open={open} />);

     const menuOption = getByText(textInDocument);
    expect(menuOption).toBeInTheDocument();
  });

  it("render correctly", () => {
    const open = false;

    const tree = renderer.create(<Navbar open={open} />).toJSON();
    expect(tree).toMatchSnapshot();

  })
});
