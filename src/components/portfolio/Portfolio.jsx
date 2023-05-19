import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import { projects } from "../../utils/proyects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


    gsap.fromTo(
      portfolioRef.current.querySelectorAll(".portfolio__item"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="portfolio">
      <h5 ref={headingRef}>My Recent Work</h5>
      <h2 ref={headingRef}>Portfolio</h2>
      <div className="container portfolio__container" ref={portfolioRef}>
        {projects.map((project, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              {project.cta ? (
                <a
                  href={project.github ? project.github : project.deploy}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.cta}
                </a>
              ) : null}
            </div>
            <div className="portfolio__overview">
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

