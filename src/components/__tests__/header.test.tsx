import * as React from "react"
import { render } from "@testing-library/react";
import renderer from "react-test-renderer"

import Header from "../header";

describe(`Header`, () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Devs DO`
    const { getByText } = render(<Header siteTitle={siteTitle} />);

    const title = getByText(siteTitle);

    expect(title).toBeInTheDocument();
  })

  it("renders correctly", () => {
    const siteTitle = `Devs DO`
    const tree = renderer
      .create(<Header siteTitle={siteTitle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
