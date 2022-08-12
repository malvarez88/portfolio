import React from "react";
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><h3>Mariano Alvarez</h3></a>
      <div className="footer__links">
      <a href="https://www.linkedin.com/in/malvarez88/" target="_blank"><BsLinkedin  className="footer__links-icon"/></a>
      <a href="https://github.com/malvarez88" target="_blank"><BsGithub className="footer__links-icon"/></a>
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
      </ul>
  
      <div className="footer__copyright">
        <small>&copy; Mariano Alvarez - All rights reserved - 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
