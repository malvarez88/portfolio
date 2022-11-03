import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/malvarez88/" target="_blank"><BsLinkedin  className="header__socials-icon"/></a>
      <a href="https://github.com/malvarez88" target="_blank"><BsGithub className="header__socials-icon"/></a>
    </div>
  );
};

export default HeaderSocials;
