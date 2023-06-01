import React
, { useEffect, useRef } 
from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../utils/constants";
import "./portfolio.css";
import Slider from "../slider/Slider";

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 id="title">Portfolio</h2>
      <Slider projects={projects} />
    </section>
  );
};

export default Portfolio;
