import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { Link } from 'react-scroll';
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BiBook } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";
import { gsap } from 'gsap'

const Navbar = () => {
  const [active, setActive] = useState("");
  const navRef = useRef(null);

  useEffect(()=> {
    gsap.fromTo(navRef.current, {opacity:0 }, { opacity: 1, delay: 3 })
  },[])

  return (
    <nav ref={navRef}>
    <Link
      to="home"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      onClick={() => setActive('#')}
      className={active === '#' ? 'active' : ''}
    >
      <AiOutlineHome />
    </Link>
    <Link
      to="about"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      onClick={() => setActive('#about')}
      className={active === '#about' ? 'active' : ''}
    >
      <SiAboutdotme />
    </Link>
    <Link
      to="portfolio"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      onClick={() => setActive('#portfolio')}
      className={active === '#portfolio' ? 'active' : ''}
    >
      <RiSuitcaseLine />
    </Link>
    <Link
      to="experience"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      onClick={() => setActive('#experience')}
      className={active === '#experience' ? 'active' : ''}
    >
      <BiBook />
    </Link>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      onClick={() => setActive('#contact')}
      className={active === '#contact' ? 'active' : ''}
    >
      <BiMessageAltDetail />
    </Link>
  </nav>
  
  );
};

export default Navbar;
