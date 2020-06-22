import React from "react"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ data }) => {
    const { allStrapiProjects: { nodes: projects } } = data

    return <section id="#projectsSection" className="section projects">
        <div className="section-center projects-center">
            <h2 className="projectsHead" >Projekty</h2>
            {projects.map((project, index) => {
                return <Project key={project.id} index={index} {...project}>
                </Project>
            })}
        </div>
    </section>
}

export default Projects
