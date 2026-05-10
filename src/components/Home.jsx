import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "VijaySyam BK";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-screen mx-auto overflow-hidden bg-transparent'>
      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center z-10 px-6'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h1 className='text-6xl sm:text-8xl font-black text-white mb-4 tracking-tighter'>
            Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00CEC9]'>{text}</span>
            <span className='animate-pulse text-[#915EFF]'>|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='mt-4 text-secondary text-[18px] max-w-2xl mx-auto leading-[30px] font-light'
          >
            I love learning, coding, and building things for the web.
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className='mt-12 flex gap-6'
        >
          <a href='https://github.com/vjsyam' target='_blank' rel='noreferrer'
            className='px-6 py-3 rounded-full bg-tertiary border border-white/10 hover:border-[#915EFF]/50 text-white transition-all hover:scale-110 flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.985 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.505.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.698 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481C19.138 20.162 22 16.416 22 12c0-5.523-4.477-10-10-10Z" clipRule="evenodd" /></svg>
            GitHub
          </a>
          <a href='https://www.linkedin.com/in/vijaysyam-bk/' target='_blank' rel='noreferrer'
            className='px-6 py-3 rounded-full bg-tertiary border border-white/10 hover:border-[#00CEC9]/50 text-white transition-all hover:scale-110 flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6V23h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V23h-4V8z" /></svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
