import React, { useEffect, useRef } from "react";
import "./experience.css";
import { frontend, backend } from "../../utils/constants";

import { BsPatchCheckFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const headingRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
      }
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
            {frontend.map((front) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{front.name}</h4>
                    <small className="text-ligth">{front.experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend" ref={backendRef}>
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend.map((back) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{back.name}</h4>
                    <small className="text-ligth">{back.experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
