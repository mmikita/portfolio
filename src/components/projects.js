import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showlink }) => {
  return <section className="section projects">
    <Title title={title}></Title>
    <div className="section-center projects-center">
{projects.map((project,index)=>{
console.log(project);
return <Project key={project.id} index={index} {...project}>
</Project>
})}

    </div>
    {
      showlink && <Link to='/projects' className="btn center-btn">...</Link>
    }
  </section>
}

export default Projects
