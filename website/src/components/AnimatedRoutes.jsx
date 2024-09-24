import React from 'react'
import { Routes, Route, useLocation } from 
'react-router-dom';

import { Home, About, Projects, Contact } from '../pages';

import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
    
  )
}

export default AnimatedRoutes