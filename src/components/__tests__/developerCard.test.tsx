import * as React from "react"
import { render } from "@testing-library/react"
import DeveloperCard from "../DeveloperCard"

describe("Test on DeveloperCard", () => {
  const initialData = {
    DeveloperName: "Jose Reyes Campusano",
    SummaryDeveloper:
      "Senior Front-end Developer | Web Designer | Hardcore Gamer | I am passionate about building scalable and appealing software",
    Initials: "JR",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
    SkillsList: ["React", "Flutter", "C#", "Swift", "Kotlin"],
    linkedin: "https://www.linkedin.com/in/linkeindTest/",
    Twitter: "https://twitter.com/TwitterTest",
  }

  const card = render(
    <DeveloperCard
      developerName={initialData.DeveloperName}
      initials={initialData.Initials}
      image={initialData.Image}
      skillsList={initialData.SkillsList}
      summaryDeveloper={initialData.SummaryDeveloper}
      linkedin={initialData.linkedin}
      twitter={initialData.Twitter}
    />
  )

  it("renders card with initial data", () => {
    expect(card).toMatchSnapshot()
  })

  it("render without social media props", () => {
    const card = render(
      <DeveloperCard
        developerName={initialData.DeveloperName}
        initials={initialData.Initials}
        image={initialData.Image}
        skillsList={initialData.SkillsList}
        summaryDeveloper={initialData.SummaryDeveloper}
      />
    )
    expect(card).toMatchSnapshot()
  })

  it("It should find the name on the card", () => {
    const testName = "Jose Reyes Campusano"
    const { getByText } = render(
      <DeveloperCard
        developerName={initialData.DeveloperName}
        initials={initialData.Initials}
        image={initialData.Image}
        skillsList={initialData.SkillsList}
        summaryDeveloper={initialData.SummaryDeveloper}
      />
    )
    const name = getByText(testName)
    expect(name).toBeInTheDocument()
  })
})
