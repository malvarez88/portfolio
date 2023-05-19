import React, { useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import logo from "../../assets/logoma.png";
import HeaderSocials from "./HeaderSocials";

import { gsap } from "gsap";

import WordAnimation from "../wordAnimation/wordAnimation";

const Header = () => {
  const h4Ref = useRef(null);
  const h3Ref = useRef(null);
  const logoRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h4Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      h3Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 2 }
    );
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 2.5 }
    );
    gsap.fromTo(
      scrollRef.current,
      {opacity:0 }, { opacity: 1, duration: 0.5, delay: 2 }
    );
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h4 ref={h4Ref}>Hello I'm</h4>
        <WordAnimation word="Mariano.Alvarez" />
        <HeaderSocials />
        <h3 ref={h3Ref} className="text-ligth">
          Full Stack Developer
        </h3>
        {/* <CTA /> */}
        <div className="me">
          <img src={logo} alt="logo" className="logo" ref={logoRef} />
        </div>
        <a href="#contact" className="scroll__down" ref={scrollRef}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
