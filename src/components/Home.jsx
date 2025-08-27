import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Background from './Background';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');
  
  const nameRef = useRef(['V', 'i', 'j', 'a', 'y', 'S', 'y', 'a', 'm', ' ', 'B', 'K']);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < nameRef.current.length) {
        ref.current++;
        setText(prevText => prevText + nameRef.current[ref.current - 1]);
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-black w-screen h-screen'>
      <Background />
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      <div className='hero relative flex flex-col justify-center items-center text-white h-full px-6'>
        
        <motion.div 
          className='backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-xl shadow-black/30'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl sm:text-6xl font-extrabold tracking-tight text-center'>
            Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-rose-300 to-pink-400'>{text}</span>
          </h1>
          <motion.p 
            className='mt-4 text-xl text-center text-white/80 max-w-2xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I'm passionate about learning, coding, and creating beautiful web experiences.
          </motion.p>
          <div className='mt-6 flex flex-wrap justify-center gap-4'>
            <a href='https://github.com/vjsyam' target='_blank' rel='noreferrer' className='group inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-fuchsia-400/20 to-purple-400/20 border border-fuchsia-400/30 text-fuchsia-200 hover:from-fuchsia-400/30 hover:to-purple-400/30 transition'>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 opacity-80 group-hover:opacity-100' viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.985 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.505.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.698 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481C19.138 20.162 22 16.416 22 12c0-5.523-4.477-10-10-10Z" clipRule="evenodd"/></svg>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/vijaysyam-bk/' target='_blank' rel='noreferrer' className='group inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 text-emerald-200 hover:from-emerald-400/30 hover:to-teal-400/30 transition'>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 opacity-80 group-hover:opacity-100' viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6V23h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V23h-4V8z"/></svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
