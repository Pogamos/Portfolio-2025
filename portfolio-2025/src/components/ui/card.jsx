import React, { useState } from "react";
import "./Card.css";

const Card = ({ image, title, description, languages, onClick }) => {
  const [hoveredLang, setHoveredLang] = useState(null);

  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="separator"></div>
      <div className="languages">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="language-icon"
            onMouseEnter={() => setHoveredLang(lang)}
            onMouseLeave={() => setHoveredLang(null)}
          >
            <i className={`devicon-${lang}-plain`} />
            {hoveredLang === lang && (
              <div className="tooltip">{lang}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
