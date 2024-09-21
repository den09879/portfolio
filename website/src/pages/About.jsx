import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Reveal from '../components/Reveal';
import { socialLinks, skills } from "../assets/constants";
const About = () => {
  return (
    <div className='w-full h-screen bg-white' 

    >
      
        <div className='bg-image font-medium text-black subhead-text2 flex justify-center'>
          <div className='w-fit sm:mx-0 sm:mt-40 sm:ml-40 sm:mr-auto mt-24 '>
            <Reveal> 
              <h1>Hello, 👋 I'm</h1>  
            </Reveal>  
            <Reveal> 
              <span className='font-semibold sm:text-7xl red-gradient_text'>Dylan Ngo</span>
            </Reveal>  
            <Reveal> 
              <p className='text-base'>Software Engineering Student</p>
            </Reveal>  
            <Reveal> 
              <div className='flex gap-2 items-center justify-center'>
                {socialLinks.map((link) => (
                <Link key={link.name} to={link.link} target={link.target}>
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className='w-8 h-8 object-contain hover:scale-125 transition-all ease-in-out duration-500'
                  />
                </Link>
              ))} 
              </div>
            </Reveal>
              
          </div>
          
        </div>
      
      

      <section className='max-container'>
      
        <Reveal>
          <h1 className='subhead-text'>About Me</h1>
       <p>a software engineering student studying at UNSW. I am passionate about design, full-stack development and also game development. 
        My favourite thing that I find about coding is that satisfying result after a continous grind. I enjoy pushing myself
        to my absolute limit, to bring the best out of anything I do.
        <br />
        <br />
        If you manage to find me not behind a monitor and keyboard, I'll be enjoying some of my hobbies such as training with my Oztag team or listening to music.
        </p>
        <br />
        <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
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
          ))}
        </div>
      </div>
        <br />
        </Reveal>
      </section>
      
      <motion.div
            className='slide-in'
            initial={{ scaleY:0 }}
            animate={{ scaleY:0 }}
            exit={{ scaleY:1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
            className='slide-out'
            initial={{ scaleY:1 }}
            animate={{ scaleY:0 }}
            exit={{ scaleY:0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
    </div>
    
    
    
  )
}

export default About