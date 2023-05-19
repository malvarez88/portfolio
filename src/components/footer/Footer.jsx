import React, { useState } from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = ({ setTheme }) => {
  const [selectedButton, setSelectedButton] = useState("regular");

  const handleTheme = (e) => {
    const selectedTheme = e.target.value;
    e.preventDefault();
    setTheme(selectedTheme);
    setSelectedButton(selectedTheme);
  };
  return (
    <footer>
      <a href="#" className="footer__logo">
        <h3>Mariano Alvarez</h3>
      </a>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/malvarez88/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin className="footer__links-icon" />
          <br /> Linkedin
        </a>
        <a
          href="https://github.com/malvarez88"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub className="footer__links-icon" /> <br /> Github
        </a>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <h3>Color Picker</h3>
      <div className="theme-switcher">
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "regular"}
          value="regular"
          onClick={handleTheme}
        >
          Regular
        </button>
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "violet"}
          value="violet"
          onClick={handleTheme}
        >
          Violet
        </button>
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "red"}
          value="red"
          onClick={handleTheme}
        >
          Red
        </button>
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "pink"}
          value="pink"
          onClick={handleTheme}
        >
          Pink
        </button>
        <button
          className="btn-switch"
          aria-pressed={selectedButton === "shine"}
          value="shine"
          onClick={handleTheme}
        >
          Shine
        </button>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mariano Alvarez - All rights reserved - 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
