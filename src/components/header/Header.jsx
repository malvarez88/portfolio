import React from "react";
import "./header.css";
import CTA from "./CTA";
import logo from "../../assets/logoma.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1 class="glitch">Mariano Alvarez</h1>

        <h3 className="text-ligth">Fullstack Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={logo} alt="logo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
