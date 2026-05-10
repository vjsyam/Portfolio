import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';
import skcet from '../components/skcet.jpeg'
import bmhss from '../components/bmhss.jpeg'

const education = [
  {
    role: 'B.E. Computer Science',
    company: 'Sri Krishna College of Engineering and Technology',
    duration: '2023 - Present',
    logo: skcet,
    url: 'https://www.skcet.ac.in',
    points: [
      'Pursuing a Bachelor’s Degree in Computer Science Engineering.',
      'Participating in hackathons and coding competitions.',
      'Actively involved in coding, web design, and technical presentations.'
    ]
  },
  {
    role: 'Higher Secondary Education',
    company: 'Bharathi Matric Higher Secondary School',
    duration: '2010 - 2023',
    logo: bmhss,
    url: 'https://bharathimatricschool.in/home',
    points: [
      'Completed higher secondary education with a focus on Science stream.',
      'Developed a passion for coding and technology during school projects.',
      'Actively participated in school-level coding competitions.'
    ]
  }
];

const Experience = () => {
  return (
    <div className='bg-transparent w-full min-h-screen text-white pt-20 overflow-hidden' id='experience'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-6 sm:px-16'
      >
        <p className='text-secondary text-center sm:text-left uppercase tracking-wider text-[18px]'>My Journey So Far</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center sm:text-left'>Education Journey.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={edu.role}
              contentStyle={{ background: "#1d1836", color: "#fff", borderBottom: '2px solid white' }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={edu.duration}
              iconStyle={{ background: '#fff' }}
              icon={
                <a className='flex justify-center items-center w-full h-full' href={edu.url} target='_blank' rel='noreferrer'>
                  <img
                    src={edu.logo}
                    alt={edu.company}
                    className='w-[60%] h-[60%] object-contain rounded-full'
                  />
                </a>
              }
            >
              <div>
                <h3 className='text-white text-[24px] font-bold'>{edu.role}</h3>
                <p
                  className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0 }}
                >
                  {edu.company}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {edu.points.map((point, index) => (
                  <li
                    key={`education-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
