import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <header>
      <div className="container-title-name">
        <h1>
          <span>{"<"}</span>Danillo <span>{"/>"}</span>
        </h1>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
