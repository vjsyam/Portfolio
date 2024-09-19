import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';
import skcet from '../components/skcet.jpeg'
import bmhss from '../components/bmhss.jpeg'

// Updated education data
const education = [
  {
    role: 'B.E. Computer Science',
    company: 'Sri Krishna College of Engineering and Technology',
    duration: '2023 - Present',
    logo: skcet, // Add the path to your college logo
    url: 'https://www.skcet.ac.in', // Add your college's website URL
    points: [
      'Pursuing a Bachelor’s Degree in Computer Science Engineering.',
      'Participating in hackathons and coding competitions.',
      'Developed a hotel booking application as part of a project presentation.',
      'Actively involved in coding, web design, and technical presentations.'
    ]
  },
  {
    role: 'Higher Secondary Education',
    company: 'Bharathi Matric Higher Secondary School',
    duration: '2010 - 2023',
    logo: bmhss, // Add the path to your school logo
    url: 'https://bharathimatricschool.in/home', // You can leave this empty or add any relevant link
    points: [
      'Completed higher secondary education with a focus on Science stream.',
      'Developed a passion for coding and technology during school projects.',
      'Actively participated in school-level coding competitions.'
    ]
  }
];

const Experience = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Education Journey.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {education.map((edu) => (
          <VerticalTimelineElement
            key={edu.role}
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={edu.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={edu.url} target='_blank'>
                <img
                  src={edu.logo}
                  alt={edu.company}
                  className='w-[60%] h-[60%] object-contain'
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
      <Footer />
    </div>
  );
}

export default Experience;
