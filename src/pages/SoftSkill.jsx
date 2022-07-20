import React from "react";
import softSkillsList from "../data/softSkillsList";
import "../scss/SoftSkill.scss";

function SoftSkill() {
  return (
    <div className="soft-skill-container">
      <ul>
        {softSkillsList.map(({ name, video }) => (
          <li key={name}>
            <div className="title-soft-skill">
              <span>{name}</span>
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

export default SoftSkill;
