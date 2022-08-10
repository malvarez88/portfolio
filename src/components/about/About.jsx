import React from "react";
import "./about.css";
import image from "../../assets/caricature-square-pink.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year - For Now</small>
            </article>
            <article className="about__card">
              <a href="#portfolio">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>4+ Completed Projects</small>
              </a>
            </article>
          </div>
          <p>
            Well, what can i say! My career as a developer started relatively
            recently, but I've always been interested in programming. I am a
            person who pays attention to detail and with the desire to continue
            learning. I love working in a team and achieving the proposed goals!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
