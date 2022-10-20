import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import {header,btn} from "../styles/home.module.css"
import {Link} from "gatsby"

export default function Home() {
  
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
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />  
      </section>
    </Layout>
  )
}
