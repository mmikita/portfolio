import React from "react"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ data }) => {
    const {allStrapiProjects:{nodes:projects}} = data

    return <section className="section projects">
 {projects.map((project,index)=>{
console.log(project);
return <div>hehe</div>
})}
    </section>
}

export default Projects
