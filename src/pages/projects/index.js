import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import {portfolio} from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log(data)
  return (
    <Layout> 
        <div className={portfolio}>
        <h2>Portfolio</h2>
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        slug
        stack
      }
      id
    }
  }
}
`