import React from 'react';
import './ExperienceCard.css'; // Assurez-vous que les styles sont bien importés

const ExperienceCard = ({ title, date, location, company, description }) => {
  return (
    <div className="experience-card">
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p><strong>{date}</strong> - {location}</p>
      <br />
      <p>{description}</p>
    </div>
  );
};

export default ExperienceCard;
