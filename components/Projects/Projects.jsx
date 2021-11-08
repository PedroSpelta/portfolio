import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7x1 mx-auto mt-40">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects
