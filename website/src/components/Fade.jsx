import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
const Fade = ({ children, width = 'fit-content' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect (() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);
  return (
    <div ref={ref} className='relative' style={{ width }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          exit='hidden'
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
        
    </div>
  )
}

export default Fade