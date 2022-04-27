import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container-photo-name">
        <img src="/images/photo.jpg" alt="Foto do Danillo, dono do protfólio" />
        <h1>Danillo</h1>
      </div>
      <div className="container-link-header">
        <Link to="/">Biografia</Link>
        <Link to="/hardskill">Hard Skill</Link>
        <Link to="/softskill">Soft Skill</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </header>
  );
}

export default Header;
