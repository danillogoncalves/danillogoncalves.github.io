import React from "react";
import hardSkillsList from "../data/hardSkillsList";
import "../scss/HardSkill.scss";

function HardSkill() {
  return (
    <div className="hard-skill-container">
      <ul>
        {hardSkillsList.map(({ name, image, video }) => (
          <li key={name}>
            <div className="title-hard-skill">
              <span>{name}</span>
              <img style={{ width: "30px" }} src={image} alt="#" />
            </div>
            <iframe
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HardSkill;
