import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Navbar from "./navbar"
import Baner from "./baner"
import About from "./about"
import Form from "./form"
import Footer from "./footer"
import Sidebar from "./sidebar"


import ProjectsContainer from "./projectsContainer"
import { Helmet } from "react-helmet"


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


  
  console.log({ query })
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
      </Helmet>
      <Navbar />
        <Sidebar/>
   
      <Baner />
      <div className="container">
        <About />
        <ProjectsContainer />
      </div>
      <Form />
      <Footer />
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout



