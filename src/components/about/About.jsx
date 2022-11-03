import React from "react";
import "./about.css";
import image from "../../assets/caricature-square-pink.png";
import mariano from '../../assets/mariano1.jpeg';
// import { FiAward } from "react-icons/fi";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={mariano} alt="me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
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
            </article> */}
          </div>
          <p>
            I'm a React & Node Full Stack developer, based in Buenos Aires,
            Argentina. I am a passionate person, a good problem
            solver, handful with both technical and human skills.
            <br />
            I'm self driven and responsible for delivery of assigned task within
            the delivery of a cycle of proyects. I feel that it is very
            important to have a good relationship with team members and
            customers.
            <br />
            For me Agile methodoliogies its a way of life. Mistakes and changes
            in priority are a natural part of evolution. Therefore, the best way
            to evolve is to try, learn, and then try again.
            <br />
            I'm a innovator, and want to create the worlds very best software
            solutions, purppose-built to improve the way people work and live.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
