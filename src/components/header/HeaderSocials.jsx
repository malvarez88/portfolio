import React, {useEffect, useRef} from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { gsap } from "gsap";


const HeaderSocials = () => {
  const socialsRef = useRef(null)

  useEffect(()=> {
    gsap.fromTo(socialsRef.current, {opacity:0 }, { opacity: 1, delay: 2.5 })
  })
  return (
    <div className="header__socials" ref={socialsRef}>
      <a href="https://www.linkedin.com/in/malvarez88/"  rel="noreferrer" target="_blank"><BsLinkedin  className="header__socials-icon"/></a>
      <a href="https://github.com/malvarez88" rel="noreferrer" target="_blank"><BsGithub className="header__socials-icon"/></a>
    </div>
  );
};

export default HeaderSocials;
