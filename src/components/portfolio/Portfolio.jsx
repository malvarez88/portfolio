import React from "react";
import "./portfolio.css";
import RN from "../../assets/reactnative-example.png";
import EC from "../../assets/ecommerce-example.jpeg";
import TMDB from "../../assets/tmdb-example.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RN} alt="reactnative" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="porfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RN} alt="reactnative" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RN} alt="reactnative" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
