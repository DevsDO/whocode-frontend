import * as React from "react"
import DeveloperCard from "../DeveloperCard"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

describe("Test on DeveloperCard", () => {
  const initialProfile = {
    developerName: "Jose Reyes Campusano",
    summaryDeveloper:
      "Senior Front-end Developer | Web Designer | Hardcore Gamer | I am passionate about building scalable and appealing software",
    initials: "JR",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
    skillsList: ["React", "Flutter", "C#", "Swift", "Kotlin"],
    linkedin: "https://www.linkedin.com/in/linkeindTest/",
    twitter: "https://twitter.com/TwitterTest",
  }

  it("renders card with initial data", () => {
    const tree = renderer.create(<DeveloperCard {...initialProfile} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("render without social media props", () => {
    const data = {
      developerName: "Jose Reyes Campusano",
      summaryDeveloper:
        "Senior Front-end Developer | Web Designer | Hardcore Gamer | I am passionate about building scalable and appealing software",
      initials: "JR",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
      skillsList: ["React", "Flutter", "C#", "Swift", "Kotlin"],
    }
    const tree = renderer.create(<DeveloperCard {...data} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("It should find the name on the card", () => {
    const testName = "Jose Reyes Campusano"
    const { getByText } = render(<DeveloperCard {...initialProfile} />)
    const name = getByText(testName)
    expect(name).toBeInTheDocument()
  })
})
