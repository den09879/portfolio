import React from 'react'
import { Link } from "react-router-dom";

import { projects } from "../assets/constants";
import { arrow } from "../assets/icons";

import Reveal from '../components/Reveal';
import Fade from '../components/Fade';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const Projects = () => {

  const checkProject = (project) => {
    if (project === "3D Platformer - It Takes Five") {
      return "hidden"
    } else {
      return "link"
    }
  }

  const checkVideo = (project) => {
    if (project === "3D Platformer - It Takes Five") {
      return "vid"
    } else if (project === "Brain Painting Application") {
      return "vid"
    } else {
      return "hidden"
    }
  }

  const checkPhoto = (project) => {
    if (project === "Weather Application") {
      return "vid"
    } else if (project === "E-Invoicing Application") {
      return "vid"
    } else {
      return "hidden"
    }
  }

  const codeOrBuild = (project) => {
    if (project === "Brain Painting Application") {
      return "build"
    } else {
      return "code"
    }
    
  }

  return (
    <div className='w-full h-screen bg-white'>
      <section className='max-container'>
          <Reveal>
            <h2 className='subhead-text text-green-700 mt-20'>My Projects</h2>
            <br />
          </Reveal>
          <Reveal>
          <p> These are my most notable projects that demonstrate my journey studying software engineering. 
            Each project has improved my skills as a software developer, as I have studied different languages, frameworks, libraries, adapting all sorts of services into my coding.
            My projects have provided me with hands on experience with software concepts such as agile and scrum methodolgies object-oriented programming and software testing. 
          </p>
          </Reveal>
          <div className='flex flex-wrap my-20 gap-16'>
            {projects.map((project) => 
              (
              <div className='w-full' key={project.name}>
                <Fade>
                <div className='block-container w-12 h-12'>
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt='threads'
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
                </Fade>
                <div className='mt-5 flex flex-col'>
                  <Reveal>
                    <h4 className='text-2xl font-poppins font-semibold'>
                      {project.name}
                    </h4>
                  </Reveal>
                  <Reveal>
                  <p className='mt-2 text-slate-500'>{project.description}</p>
                  </Reveal>
                  <Fade>
                  <video controls loop className={checkVideo(project.name)}>
                    <source src={project.video} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                  <img className={checkPhoto(project.name)} src={project.video}>
                  </img>
                  </Fade>
                  <Reveal>
                  <div className={checkProject(project.name)}>
                    <Link
                      to={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      Link to {codeOrBuild(project.name)}
                    </Link>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                  </Reveal>
                </div>
              </div>
          ))}
          </div>
      </section>

      <Fade>
        <CTA />
        <Footer />
      </Fade>

      </div>
  )
}

export default Projects