import { motion } from 'framer-motion';
import { useState } from 'react';

const Alert = ({ type, text }) => {
  const [alert, setAlert] = useState(false);
  const onClick = () => setAlert(true)
  return (
    <motion.div className='absolute top-24 left-0 right-0 flex justify-center items-center'
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={{ duration: 0.5 }}
    >
      <div className={ alert ? "hidden" : ""}>
        <div
          className={`p-2 ${
            type === "danger" ? "error-msg" : "success-msg"
          } items-center text-black leading-none lg:rounded-md flex lg:inline-flex flex-col py-3 text-center`}
          role='alert'
        >
          <h1 className='subhead-text'>
            {type === "danger" ? "❌Error!" : "✔️Success!"}
          </h1>
          <p className='text-center font-medium'>{text}</p>
        </div>
      </div>
      
    </motion.div>
  );
};
  
export default Alert;