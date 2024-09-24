import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import { socialLinks, skills, libraries, tools } from "../assets/constants";
import pdf from '../assets/dylan_resume.pdf';

import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import Fade from '../components/Fade';

const About = () => {
  return (
    <div className='w-full h-screen bg-white'>

      <div className='bg-image font-medium text-black subhead-text2 flex justify-center'>
        <div className='w-fit sm:mx-0 sm:ml-48 sm:mr-auto mt-32 text-center'>
          <Fade> 
            <div>
              <h1 className='text-4xl'>Hello, 👋 I'm</h1>  
            </div>
            <span className='font-semibold sm:text-8xl text-6xl font-poppins red-gradient_text drop-shadow-[0_4px_2.4px_rgba(0,0,0,0.8)]'>Dylan Ngo</span>
            <p className='text-lg py-3'>Software Engineering Student</p>
            <div className='flex gap-5 justify-center'>
              {socialLinks.map((link) => (
              <Link key={link.name} to={link.link} target={link.target}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-12 h-12 object-contain hover:scale-125 transition-all ease-in-out duration-500'
                />
              </Link>
            ))} 
              <a href={pdf} target='_blank' className='my-auto'>
                <button className="button-33" role="button">Résumé</button>
              </a>
            </div>
          </Fade>  
        </div>
      </div>

      <section className='max-container'>
        <Reveal>
          <h2 className='subhead-text text-green-700'>About Me</h2>
          <br />
        </Reveal>
        <Reveal>
          <p>
            Hi, I'm Dylan, a software engineering student studying at UNSW. I am passionate about design, full-stack development and also game development. 
            If you manage to find me not behind a monitor and keyboard, I'll be enjoying some of my hobbies such as training with my Oztag team or listening to music.
          </p>
        </Reveal>
          
        <div className='pt-10 flex flex-col'>
          <Reveal>
            <h2 className='subhead-text text-green-700'>Skills</h2>
          </Reveal>
          <br />
          <Reveal>
            <h3 className='subhead-text2'>Languages</h3>
          </Reveal>
          <div className='my-8 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div>
                <Fade>
                  <div className='block-container w-20 h-20' key={skill.name}>
                    <div className='btn-back rounded-xl' />
                    <div className='btn-front rounded-xl flex justify-center items-center'>
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className='w-1/2 h-1/2 object-contain'
                      />             
                    </div>
                  </div>
                  <p className='text-center pt-1'>{skill.name}</p>
                </Fade>
              </div>
            ))}
          </div>
          <Reveal>
            <h3 className='subhead-text2'>Libraries and Frameworks</h3>
          </Reveal>
          <div className='my-8 flex flex-wrap gap-12'>
            {libraries.map((skill) => (
              <div>
                <Fade>
                  <div className='block-container w-20 h-20' key={skill.name}>
                    <div className='btn-back rounded-xl' />
                    <div className='btn-front rounded-xl flex justify-center items-center'>
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className='w-1/2 h-1/2 object-contain'
                      />           
                    </div>
                  </div>
                  <p className='text-center pt-1'>{skill.name}</p>
                </Fade>
              </div>
             
            ))}
          </div>
          <Reveal>
            <h3 className='subhead-text2'>Tools</h3>
          </Reveal>
          <div className='my-8 flex flex-wrap gap-12'>
            {tools.map((skill) => (
              <div>
                <Fade>
                  <div className='block-container w-20 h-20' key={skill.name}>
                    <div className='btn-back rounded-xl' />
                    <div className='btn-front rounded-xl flex justify-center items-center'>
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className='w-1/2 h-1/2 object-contain'
                      />  
                    </div>
                  </div>
                  <p className='text-center pt-1'>{skill.name}</p>
                  </Fade>
              </div>
            ))}
          </div>
        </div>
        <br />
      </section>

      <Fade>
        <CTA />
        <Footer />
      </Fade>

    </div> 
  )
}

export default About