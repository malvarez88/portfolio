import React from 'react'
import './about.css'
import image from '../../assets/caricature-square-pink.png'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
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
            <article className='about__card'>
              <FiAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>Years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta et maxime ducimus ipsum voluptate ab aperiam, facilis quaerat, possimus repudiandae aliquid necessitatibus, amet commodi suscipit quae omnis nisi consequuntur consequatur!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About