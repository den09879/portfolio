import React from 'react'
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
const Projects = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <section className='max-container'>
          <Reveal>
            <h2 className='subhead-text text-green-700 mt-20'>My Projects</h2>
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

export default Projects