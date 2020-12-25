import * as React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

import DeveloperList from "../DeveloperList/DeveloperList"

describe("DeveloperList", () => {
  it("renders title with empty list", () => {
    const listTitle = "Devs DO"
    const { getByText } = render(<DeveloperList title={listTitle} list={[]} />)

    const title = getByText(listTitle)

    expect(title).toBeInTheDocument()
  })

  it("renders subtitle with empty list", () => {
    const listSubtitle = "This is a test"
    const { getByText } = render(
      <DeveloperList subtitle={listSubtitle} list={[]} />
    )

    const subtitle = getByText(listSubtitle)

    expect(subtitle).toBeInTheDocument()
  })

  it("renders list", () => {
    const data = [
      {
        name: "Juan Perez",
        initials: "JP",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
        summary: "Developer God",
        skills: "All of them"
      }
    ]
    const { getByText } = render(<DeveloperList list={data} />)

    const name = getByText(data[0].name)

    expect(name).toBeInTheDocument()
  })

  it("renders empty list", () => {
    const emptyMessage = "Nothing to show"
    const { getByText } = render(<DeveloperList list={[]} />)

    const message = getByText(emptyMessage)

    expect(message).toBeInTheDocument()
  })

  it("renders correctly", () => {
    const listTitle = "Devs DO"
    const listSubtitle = "This is a test"
    const data = [
      {
        name: "Juan Perez",
        initials: "JP",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
        summary: "Developer God",
        skills: "All of them"
      }
    ]
    const tree = renderer
      .create(
        <DeveloperList title={listTitle} subtitle={listSubtitle} list={data} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
