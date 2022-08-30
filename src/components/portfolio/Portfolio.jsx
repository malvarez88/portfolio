import React from "react";
import "./portfolio.css";
import EC from '../../assets/edlab_back.png';
import TMDB from '../../assets/tmdb.png';
import PF from '../../assets/portfolio.png'
import WA from '../../assets/weatherapp.png'
import YT from '../../assets/ytclone.png'


// const projects = [
//   {name: 'Portfolio', github: 'https://github.com/malvarez88/portfolio/tree/master', image: {YT}, }
// ]


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
          <div className="portfolio__overview">
            <p>This is my portfolio, actually i don't need to explain a lot, you can see it by your self 😉</p>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={YT} alt="reactnative" />
          </div>
          <h3>Youtube Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/malvarez88/youtube-clone"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://ytmedia-clone.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Deploy
            </a>
          </div>
          <div className="portfolio__overview">
            <p>Here, i tried to copy Youtube page. With a Sidebar, a Search bar, and the posibility to watch YT videos and YT Channels. <br/> Used technologies: React, Material UI, Javascript, CSS, Axios and the RapidAPI</p>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EC} alt="ecommerce" />
          </div>
          <h3>App for HHRR Managment - Global News</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/diego-scarpati/Global-News-Front"
              className="btn btn-primary"
              target="_blank"
            >
              Github Frontend
            </a>
            <a
              href="https://github.com/diego-scarpati/Global-News-Back"
              className="btn btn-primary"
              target="_blank"
            >
              Github Backend
            </a>
          </div>
          <div className="portfolio__overview">
            <p>We made an application for the Global News company in two weeks, which was necessary so that its employees could notify absences and see notifications from their cell phones and at any time. <br/>
            Used technologies: React Native, Redux, NodeJS, Sequelize.
            </p>
          </div>
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
          <div className="portfolio__overview">
            <p>We created an ecommerce from scratch, in two weeks. In this project I had to work on the backend. We separate the files in their corresponding folders, so that when checking errors, you would know where to look for them <br/>
            Used technologies: NodeJS, JWT, Sequelize.
            </p>
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
          <div className="portfolio__overview">
            <p>I made an application to see the weather of any city, using Vanilla Javascript
            </p>
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
          <div className="portfolio__overview">
            <p>In this proyect i had to use a public API. The one i used was from TMDB. <br/> Used technologies: React
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
