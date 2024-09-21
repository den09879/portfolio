import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
const Reveal = ({ children, width = 'fit-content' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect (() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [isInView]);
  return (
    <div ref={ref} className='relative' style={{ width }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          exit='hidden'
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          initial='hidden'
          animate={slideControls}
          exit='hidden'
          transition={{ duration: 0.5, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: '#8b0000',
            zIndex: 20,
          }}
        >
        </motion.div>
        
    </div>
  )
}

export default Reveal