import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Navbar from "./navbar"
import Baner from "./baner"
import About from "./about"
import ProjectsContainer from "./projectsContainer"

import "./layout.css"
const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
{
  allStrapiProjects(filter: {featured: {eq: true}}) {
    nodes {
      github
      id
      description
      title
      url
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      stack {
        id
        title
      }
    }
  }
}
`


const Layout = ({ children }) => {
console.log({query})
  return (
  <div>
    <Navbar />
    <Baner />
    <div className="container">
      <About />
      <ProjectsContainer />
    </div>
  </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout



