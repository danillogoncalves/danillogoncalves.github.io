import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const activeClassName = "selectTitle";
  return (
    <nav className="container-link-header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Biografia
      </NavLink>
      <NavLink
        to="/hardskill"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Hard Skill
      </NavLink>
      <NavLink
        to="/softskill"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Soft Skill
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Projects
      </NavLink>
    </nav>
  );
}

export default Menu;
