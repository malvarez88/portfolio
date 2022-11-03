import React from "react";
import "./contact.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m5ezkos', 'template_cys8vap', form.current, '90RIMMXBWxGu7zF-s')
   
    e.target.reset(e)
    alert('message sent')
  };
  return (
    <section id="contact">
      <h5>Get in Touch!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="article contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>marianoalvarez66@gmail.com</h5>
            <a href="mailto:marianoalvarez66@gmail.com" target='_blank'>Send a message</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
