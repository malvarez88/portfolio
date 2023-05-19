import React from "react";
import "./portfolio.css";

import { projects } from "../../utils/proyects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              {project.cta ?
              <a
                href={project.github ? project.github : project.deploy}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                {project.cta}
              </a>
              : null }
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
