import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import {portfolio, project} from "../../styles/projects.module.css"
import Img from 'gatsby-image'

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout> 
        <div className={portfolio}>
        <h2>Portfolio</h2>
        </div>
        <div className={project}>
          {projects.map(project => 
            <Link to={"projects" + project.frontmatter.slug} key={project.id}>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
            )}
        <p>Email me at { contact } for a quote</p  >
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`