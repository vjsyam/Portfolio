import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ idx, service }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className='w-full sm:w-[250px] p-[1px] rounded-[20px] bg-gradient-to-b from-white/20 to-transparent'
  >
    <div className='bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-black-100 transition-colors duration-300 shadow-card'>
      <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain' />
      <h3 className='text-white text-[20px] font-bold text-center tracking-wider'>
        {service.title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className='bg-transparent relative w-full overflow-hidden min-h-screen flex flex-col' id='about'>
      <div className='max-w-7xl mx-auto py-20 px-6 sm:px-10 flex-grow'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className='text-secondary uppercase tracking-wider text-[16px]'>Introduction</p>
          <h2 className='text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px]'>Overview.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
        >
          Hi, I'm <span className='text-white font-medium'>Vijay Syam BK</span>. I'm a software developer who loves building things for the web. 
          I specialize in the MERN stack and enjoy creating clean, user-friendly interfaces along with solid backend architectures.
          <br className='block mb-4' />
          Whether working on personal projects or collaborating with a team, I always aim to write efficient code and learn something new along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mt-8'
        >
          <ButtonLink
            url='https://drive.google.com/file/d/1AAXJj82OoefRiBr_4q2hdKu4Dhw7aN9V/view?usp=sharing'
            text='View Resume →'
            padding={`px-6 py-3 border border-[#915EFF]/50 rounded-lg text-white hover:bg-[#915EFF]/20 transition-all shadow-md shadow-primary`}
          />
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service, idx) => (
            <ServiceCard key={service.title} idx={idx} service={service} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
