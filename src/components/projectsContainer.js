import React from "react"
import Projects from "./Projects"

import { Link, StaticQuery } from "gatsby"

const ProjectsContainer = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => 
       
    <div>
<Projects data={data}></Projects>
    </div>
    
    }
  ></StaticQuery>
)


export default ProjectsContainer