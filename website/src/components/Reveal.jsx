import React from 'react'
import { Children } from 'react';
const Reveal = ({ children }) => {
  return (
    <div className='overflow-hidden'>
        {children}
    </div>
  )
}

export default Reveal