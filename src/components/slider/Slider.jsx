import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./slider.css";
import { projects } from "../../utils/constants";

const Slider = () => {
  const sliderRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(projectsRef.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section>
      <div className="container slider__container" ref={sliderRef}>
        {projects.map((project, index) => (
          <div
            className="project__container"
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <h1 className="project__title">{project.slug}</h1>
            <img
              src={project.image}
              alt={project.title}
              className="project__image"
            />
            <div className="project__description">
              <p>{project.description}</p>
            </div>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
