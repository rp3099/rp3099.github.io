import "./ProjectCardStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const isInternal = props.view.startsWith("/");

  const cardInner = (
    <>
      {props.videosrc ? (
        <video className="project-video" src={props.videosrc} autoPlay loop muted playsInline />
      ) : (
        <img src={props.imgsrc} alt={props.title} loading="lazy" />
      )}
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <span className="project-cta">View project →</span>
      </div>
    </>
  );

  return isInternal ? (
    <Link to={props.view} className="project-card">{cardInner}</Link>
  ) : (
    <a href={props.view} target="_blank" rel="noopener noreferrer" className="project-card">
      {cardInner}
    </a>
  );
};

export default ProjectCard;
