
import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "../slider/Slider";
import { projects } from "../../utils/constants";

const Portfolio = () => {
  const headingRef = useRef(null);
  const portfolioSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(portfolioSectionRef.current, {
      position:'fixed',
      width: "100%",
      top: 0,
      scrollTrigger: {
        trigger: portfolioSectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="portfolio" ref={portfolioSectionRef}>
      <h5 ref={headingRef}>My Recent Work</h5>
      <h2 ref={headingRef}>Portfolio</h2>
      <Slider projects={projects} />
    </section>
  );
};

export default Portfolio;
