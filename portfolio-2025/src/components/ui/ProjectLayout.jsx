import React from "react";
import "./ProjectLayout.css";

const ProjectLayout = ({ title, images, skills, summary, details }) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <h2 className="project-title">{title}</h2>
        <div className="project-images">
          <img src={images[0]} alt="Project Image 1" className="project-image" />
          <img src={images[1]} alt="Project Image 2" className="project-image" />
        </div>
        <div className="project-info">
          <div className="info-box">
            <h3>Résumé</h3>
            <p>{summary}</p>
          </div>
          <div className="info-box">
            <h3>Compétences & Technologies</h3>
            <p>{skills}</p>
          </div>
        </div>
        <div className="details-box">
          <h3>Détails</h3>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
