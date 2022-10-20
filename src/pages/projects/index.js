import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import {portfolio, project} from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout> 
        <div className={portfolio}>
        <h2>Portfolio</h2>
        </div>
        <div className={project}>
          {projects.map(project => 
            <Link to={"projects" + project.frontmatter.slug} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
            )}
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
      }
    }
  }
}
`