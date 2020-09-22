import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby";

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"


const IndexPage = ({ data }) => (
  <>
    <Layout>
      {data.allDeveloper.nodes.map(developer =>(
          <p key={developer.id}>hi {developer.name}</p>
      ))}
    </Layout>
  </>
)
export const query = graphql`
  {
    allDeveloper {
      nodes {
        id
        name
        skills
        summary
      }
    }
  }
`

export default IndexPage
