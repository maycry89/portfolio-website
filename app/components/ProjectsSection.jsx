"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/arProject.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/vrProjekt.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/vrProjekt.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleChangeTag = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-white text-center font-bold mt-4 mb-6 text-4xl">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-5 text-xl">
        <ProjectTag
          name="All"
          isSelected={tag === "All"}
          onClick={handleChangeTag}
        ></ProjectTag>
        <ProjectTag
          name="Web"
          isSelected={tag === "Web"}
          onClick={handleChangeTag}
        ></ProjectTag>
        <ProjectTag
          name="Mobile"
          isSelected={tag === "Mobile"}
          onClick={handleChangeTag}
        ></ProjectTag>
        <ProjectTag
          name="VR/AR"
          isSelected={tag === "VR/AR"}
          onClick={handleChangeTag}
        ></ProjectTag>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
