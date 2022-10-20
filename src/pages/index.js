import React from "react"
import Layout from "../components/Layout"
import {header,btn} from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3> Developy & Deploy</h3>
          <p>This is the sample site for this example</p>
          <Link className={btn} to="/projects">
            Portfolio Projects
          </Link>        
        </div>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`