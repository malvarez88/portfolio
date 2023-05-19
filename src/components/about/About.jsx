// import React from "react";
// import "./about.css";
// import mariano from '../../assets/mariano1.jpeg';
// import ma from '../../assets/MA.png'


// const About = () => {
//   return (
//     <section id="about">
//       <h5>Get To Know</h5>
//       <h2>About Me</h2>

//       <div className="container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={ma} alt="me-image" />
//           </div>
//         </div>
//         <div className="about__content">
//           <div className="about__cards">
//           </div>
//           <p>
//             I'm a React & Node Full Stack developer, based in Buenos Aires,
//             Argentina. I am a passionate person, a good problem
//             solver, handful with both technical and human skills.
//             <br />
//             I'm self driven and responsible for delivery of assigned task within
//             the delivery of a cycle of proyects. I feel that it is very
//             important to have a good relationship with team members and
//             customers.
//             <br />
//             For me Agile methodoliogies its a way of life. Mistakes and changes
//             in priority are a natural part of evolution. Therefore, the best way
//             to evolve is to try, learn, and then try again.
//             <br />
//             I'm a innovator, and want to create the worlds very best software
//             solutions, purppose-built to improve the way people work and live.
//           </p>
//           <a href="#contact" className="btn btn-primary">
//             Contact Me!
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect, useRef } from "react";
import "./about.css";
import mariano from '../../assets/mariano1.jpeg';
import ma from '../../assets/MA.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
    );

    gsap.fromTo(imageRef.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });

    gsap.fromTo(contentRef.current, 
      { x: 100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="about">
 <h5 ref={headingRef}>Get To Know</h5>
      <h2 ref={headingRef}>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image" ref={imageRef}>
            <img src={ma} alt="me-image" />
          </div>
        </div>
        <div className="about__content" ref={contentRef}>
          <div className="about__cards">
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

