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
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          exit='hidden'
          transition={{ duration: 0.25, delay: 0.15 }}
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
          transition={{ duration: 0.4, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: '#5bd683',
            zIndex: 20,
          }}
        >
        </motion.div>
        
    </div>
  )
}

export default Reveal