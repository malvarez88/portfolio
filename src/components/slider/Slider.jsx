import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./slider.css";

const Slider = ({ projects }) => {
  const sliderRef = useRef(null);
  console.log("🚀 ~ file: Slider.jsx:8 ~ Slider ~ sliderRef:", sliderRef)
  const projectsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top center",
        end: () => `+=${sliderRef.current.offsetWidth}`,
        scrub: true,
      },
    });

    projectsRef.current.forEach((project) => {
      tl.from(project, {
        xPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: project,
        },
      });
    });
  }, []);

  return (
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
  );
};

export default Slider;
