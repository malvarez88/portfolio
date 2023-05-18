import React from "react";
import "./header.css";
import CTA from "./CTA";
import logo from "../../assets/logoma.png";
import HeaderSocials from "./HeaderSocials";
// import video from '../../assets/harley.mp4';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Mariano Alvarez</h1>
        <HeaderSocials />
        <h3 className="text-ligth">Full Stack Developer</h3>
        <CTA />
        
        <div className="me">
          <img src={logo} alt="logo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
      {/* <video muted autoPlay loop>
        <source src={video} type='video/mp4'/>
      </video> */}
    </header>
  );
};

export default Header;
