import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-40 p-10 gap-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects
