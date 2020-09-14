import React from "react"

type Props = {
  title?: string
  subtitle?: string
  list: {
    name: string
    initials: string
    image: string
    summary: string
    skills: string
    linkedin?: string
    github?: string
    twitter?: string
    webpage?: string
  }[]
}

const DeveloperList: React.FC<Props> = ({ title, subtitle, list }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
      {list.length > 0 ? (
        list.map(element => (
          <div key={element.name}>
            <h2>{element.name}</h2>
            <h3>{element.summary}</h3>
            <h4>{element.skills}</h4>
          </div>
        ))
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  )
}

export default DeveloperList
