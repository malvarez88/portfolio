import React from "react";
import "./slider.css";

const Slider = ({ projects }) => {
  return (
    <div className="container slider__container">
      {projects.map(({ slug, image, title, description, cta, github, deploy }, index) => (
        <div className="project__container" key={index}>
          <h1 className="project__title">{slug}</h1>
          <div className="project__hidden">
            <img
              src={image}
              alt={title}
              className="project__image"
            />
            <div className="project__description">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                {cta && (
                  <a
                    href={github || deploy}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cta}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
