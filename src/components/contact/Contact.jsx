// import React from "react";
// import "./contact.css";
// import { useRef } from 'react';
// import emailjs from 'emailjs-com';
// import Alert from '@mui/material/Alert';
// import {MdOutlineEmail} from 'react-icons/md'

// const Contact = () => {
//  const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_m5ezkos', 'template_cys8vap', form.current, '90RIMMXBWxGu7zF-s')
   
//     e.target.reset(e)
//     alert('message sent')
//   };
//   return (
//     <section id="contact">
//       <h5>Get in Touch!</h5>
//       <h2>Contact Me</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <div className="article contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>marianoalvarez66@gmail.com</h5>
//             <a href="mailto:marianoalvarez66@gmail.com" target='_blank'>Send a message</a>
//           </div>
//         </div>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name='name' placeholder="Full Name" required/>
//           <input type="email" name='email' placeholder="Email" required/>
//           <textarea name="message" placeholder="Message" rows="7" required></textarea>
//           <button  className="btn btn-primary" type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useEffect, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from 'emailjs-com';

const Contact = () => {
  const contactRef = useRef(null);
  const headingRef = useRef(null)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m5ezkos', 'template_cys8vap', form.current, '90RIMMXBWxGu7zF-s')
   
    e.target.reset(e)
    alert('message sent')
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      contactRef.current.querySelectorAll(".contact__option, form"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={contactRef}>
      <h5 ref={headingRef}>Get in Touch!</h5>
      <h2 ref={headingRef}>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <div className="article contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>marianoalvarez66@gmail.com</h5>
            <a href="mailto:marianoalvarez66@gmail.com" target='_blank'>Send a message</a>
        </div>
        </div>
        <form onSubmit={sendEmail}>
        <input type="text" name='name' placeholder="Full Name" required/>
          <input type="email" name='email' placeholder="Email" required/>
          <textarea name="message" placeholder="Message" rows="7" required></textarea>
          <button  className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
