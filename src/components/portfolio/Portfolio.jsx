import React from "react";
import "./portfolio.css";
import EC from '../../assets/edlab_back.png';
import TMDB from '../../assets/tmdb.png';
import PF from '../../assets/portfolio.png'
import WA from '../../assets/weatherapp.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PF} alt="reactnative" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/malvarez88/portfolio/tree/master"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EC} alt="ecommerce" />
          </div>
          <h3>App for HHRR Managment - Global News</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/diego-scarpati/Global-News-Back"
              className="btn btn-primary"
              target="_blank"
            >
              Github Backend
            </a>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/diego-scarpati/Global-News-Front"
              className="btn btn-primary"
              target="_blank"
            >
              Github Frontend
            </a>
          </div>
          {/* <div className="porfolio__item-cta">
            <a
              href="https://github.com/diego-scarpati/Global-News-Back"
              className="btn btn-primary"
              target="_blank"
            >
              Github Back
            </a>
            <a
              href="https://github.com/diego-scarpati/Global-News-Front"
              className="btn btn-primary"
              target="_blank"
            >
              Github Front
            </a>
          </div> */}
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EC} alt="reactnative" />
          </div>
          <h3>Ecommerce EDLAB - Backend</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/malvarez88/EDLAB_BACK/tree/master"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WA} alt="reactnative" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/malvarez88/weatherApp/tree/master"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://weather-app-livid-gamma.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Deploy
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TMDB} alt="reactnative" />
          </div>
          <h3>TMDB - Movie Database</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/malvarez88/TMDB/tree/master"
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
