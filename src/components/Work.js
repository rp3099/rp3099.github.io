import "./ProjectCardStyles.css";
import React from 'react';
import ProjectCard from "./ProjectCard.js";
import WorkCardData from "./WorkCardData.js";

// One titled section of cards for a given project category.
const ProjectSection = ({ heading, projects }) => (
  <>
    <h2 className="category-heading">{heading}</h2>
    <div className="project-container">
      {projects.map((value) => (
        <ProjectCard
          key={value.view}
          imgsrc={value.imgsrc}
          videosrc={value.videosrc}
          title={value.title}
          text={value.text}
          view={value.view}
        />
      ))}
    </div>
  </>
);

const Work = () => {
  const byCategory = (category) =>
    WorkCardData.filter((project) => project.category === category);

  return (
    <div className="work-container">
      {/* <h1 className="project-heading">Projects</h1> */}
      <ProjectSection heading="Aerospace Projects" projects={byCategory("aerospace")} />
      <ProjectSection heading="AI Projects" projects={byCategory("ai")} />
    </div>
  );
};

export default Work;
