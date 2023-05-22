import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "../slider/Slider";

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const headingRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
    );


  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  });

  return (
    <section id="portfolio">
      <h5 ref={headingRef}>My Recent Work</h5>
      <h2 ref={headingRef}>Portfolio</h2>
      <Slider ref={portfolioRef}/>
    </section>
  );
};

export default Portfolio;

