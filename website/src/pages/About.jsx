import React from 'react'
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
const About = () => {
  return (
    <div className='w-full h-screen bg-white' 

    >
      <Reveal>
        <div className='bg-image text-black subhead-text text-center align-middle'>
          <div>
            <h1>Hello, 👋 I'm</h1>
            <span className='red-gradient_text sm:text-5xl text-3xl'>Dylan Ngo,</span>
            <p>a software engineering</p>
            <p>student</p>
          </div>
          
        </div>
      </Reveal>
      
      <section className='max-container'>
      
       
       <p>a software engineering student studying at UNSW. I am passionate about design, full-stack development and also game development. 
        My favourite thing that I find about coding is that satisfying result after a continous grind. I enjoy pushing myself
        to my absolute limit, to bring the best out of anything I do.
        <br />
        <br />
        If you manage to find me not behind a monitor and keyboard, I'll be enjoying some of my hobbies such as training with my Oztag team or listening to music.
        </p>
        <br />
        <h2 className='head-text'>Skills</h2>
        <br />
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