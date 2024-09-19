import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');
  
  // Update name to display your name letter by letter
  const updatedName = ['V', 'i', 'j', 'a', 'y', 'S', 'y', 'a', 'm', ' ', 'B', 'K'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < updatedName.length) {
        ref.current++;
        setText(prevText => prevText + updatedName[ref.current - 1]);
      }
    }, 300); // Make it faster
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className='relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 w-screen h-screen'>
      <ul className="circles">
        {/* Add new animations or keep the same */}
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      <div className='hero relative flex flex-col justify-center items-center text-white h-full'>
        {/* Animated introduction */}
        <motion.div 
          className='backdrop-blur-sm rounded-3xl p-6'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl sm:text-6xl font-bold'>
            Hi, I'm <span className='text-yellow-400'>{text}</span>
          </h1>
          <motion.p 
            className='mt-4 text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I'm passionate about learning, coding, and creating beautiful web experiences.
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
