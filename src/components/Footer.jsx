import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/danillogoncalves"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/danillo-gon%C3%A7alves-batista/"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <Link to="/contact" title="Fale comigo">
        <MdMail />
      </Link>
    </footer>
  );
}

export default Footer;
