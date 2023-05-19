import React, { useEffect, useRef } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const headingRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
    );


    gsap.fromTo(
      frontendRef.current.querySelectorAll(".experience__details"),
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: frontendRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      backendRef.current.querySelectorAll(".experience__details"),
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: backendRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="experience">
      <h5 ref={headingRef}>What Skills I Have</h5>
      <h2 ref={headingRef}>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend" ref={frontendRef}>
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Typescript</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Next</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Material UI</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React Redux</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React Native</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Illustrator</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend" ref={backendRef}>
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Sequelize</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-ligth">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
