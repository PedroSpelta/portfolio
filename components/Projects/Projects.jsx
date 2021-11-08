import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectGithub from "./ProjectGithub";

function Projects() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-10 gap-5">
        <ProjectCard
          image="https://i.pinimg.com/originals/6c/e1/88/6ce1884eb448cd8e6ec31ec11ae28a0d.jpg"
          projLink="https://www.google.com"
          description="teste"
        />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <ProjectGithub />
    </div>
  );
}

export default Projects;
