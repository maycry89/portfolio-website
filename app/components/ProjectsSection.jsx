import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/arProject.PNG",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/vrProjekt.PNG",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
