import React from "react"
import Img from "gatsby-image"

import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  return <article className="project">
    <Img fluid={image.childImageSharp.fluid} className="project-img"></Img>
    <div className="project-info">
    <span className="project-number">0{index + 1}</span>
    <h3>{title}</h3>
    <p className="project-desc">{description}</p>
    <div className="project-stack">
      {stack.map((item) => {return <span key={item.id}>{item.title}</span>})}
    </div>
    <div className="project-links">
      <a href={github}>
        <FaGithubSquare className="project-icon"></FaGithubSquare>
      </a>
      <a href={url}>
        <FaShareSquare className="project-icon"></FaShareSquare>
      </a>
      </div>
    </div>
  </article>

}

Project.propTypes = {}

export default Project
