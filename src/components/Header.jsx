import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Danillo Gonçalves Batista</h1>
      <Link to="/">Biografia</Link>
      <Link to="/hardskill">Hard Skill</Link>
      <Link to="/softskill">Soft Skill</Link>
      <Link to="/projects">Projects</Link>
    </header>
  );
}

export default Header;
