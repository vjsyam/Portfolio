import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full p-[1px] rounded-[20px] bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500'>
      <div className='rounded-[20px] py-6 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-[#151030] hover:bg-[#18123a] transition-colors'>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain drop-shadow' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-4'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-rose-300 to-pink-400'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px] text-white/80'>
              👨‍💻 Hi, I'm Vijay Syam BK, I have a strong passion for learning, developing projects, and designing websites, with a keen interest in coding. 
              <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/vijaysyam-bk/' target='_blank' rel='noreferrer'>Software developer</a> 
              I specialize in both MEAN and MERN stacks🚀.
              <br />
              As a student who is continuously learning, I have developed a strong foundation in front-end technologies, specializing in HTML and CSS. I excel at crafting intuitive and engaging user interfaces. On the back end, I am proficient in server-side languages such as C++, Java, and JavaScript. I focus on designing efficient database structures and writing optimized SQL queries. I ensure smooth integration between front-end and back-end systems. Additionally, I am skilled in using Git for version control and thrive in collaborative environments utilizing Agile methodologies.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1cmQcxl3YyAAakRHwPgP9IMyAH2_Z5gwD/view?usp=sharing'
              text='View Resume →'
              padding={`px-4 py-2 border border-amber-400/30 bg-gradient-to-r from-amber-400/20 to-pink-400/20 text-amber-200 hover:from-amber-400/30 hover:to-pink-400/30`}
            />

          </div>
          <div className='mt-16 flex justify-center flex-wrap gap-7'>
            {services.map((service, idx) => (
              <ServiceCard key={`${service.title}-${idx}`} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
