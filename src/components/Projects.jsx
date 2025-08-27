import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Footer from './Footer';
import hotel from '../components/hotelhomepage.jpeg'
import write from '../components/writepage.jpeg'
import electro from '../components/electro.png'
import obj from '../components/obj.jpg'
import tcp from '../components/tcp.png'
import skill from '../components/skill.png'

const getBadgeClass = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes('react')) return 'text-cyan-300 bg-cyan-500/10 border-cyan-400/20';
    if (t.includes('node')) return 'text-lime-300 bg-lime-500/10 border-lime-400/20';
    if (t.includes('mongo')) return 'text-green-300 bg-green-500/10 border-green-400/20';
    if (t.includes('mysql')) return 'text-sky-300 bg-sky-500/10 border-sky-400/20';
    if (t.includes('python')) return 'text-yellow-200 bg-yellow-500/10 border-yellow-400/20';
    if (t.includes('spring')) return 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20';
    if (t.includes('jwt')) return 'text-rose-300 bg-rose-500/10 border-rose-400/20';
    if (t.includes('rest')) return 'text-indigo-300 bg-indigo-500/10 border-indigo-400/20';
    if (t.includes('blockchain')) return 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/20';
    if (t.includes('firebase')) return 'text-amber-300 bg-amber-500/10 border-amber-400/20';
    if (t.includes('tailwind')) return 'text-teal-300 bg-teal-500/10 border-teal-400/20';
    if (t.includes('javascript')) return 'text-yellow-200 bg-yellow-500/10 border-yellow-400/20';
    return 'text-blue-300 bg-white/5 border-white/10';
};

const ProjectCard = ({ image, title, description, git, demo, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900/60 backdrop-blur border border-white/10 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform">
            <a href={git} target="_blank" rel="noreferrer">
                <img className="w-full rounded-t-xl h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-5 sm:p-6">
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                <p className="mt-2 font-normal text-sm sm:text-base md:text-lg text-gray-300">{description}</p>
            </div>
            <div className='m-3 sm:m-4 lg:m-5 flex justify-between items-center'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <span
                            key={`${index}-${tag}`}
                            className={`text-[12px] px-2 py-1 rounded-full border ${getBadgeClass(tag)}`}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className='flex gap-2'>
                  {demo && (
                    <a href={demo} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 text-emerald-200 hover:from-emerald-400/30 hover:to-teal-400/30 transition">
                      <FiExternalLink className='opacity-80 group-hover:opacity-100'/> Demo
                    </a>
                  )}
                  {git && (
                    <a href={git} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-fuchsia-400/20 to-purple-400/20 border border-fuchsia-400/30 text-fuchsia-200 hover:from-fuchsia-400/30 hover:to-purple-400/30 transition">
                      <FaGithub className='opacity-80 group-hover:opacity-100'/> GitHub
                    </a>
                  )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-stretch m-6 sm:m-12 p-6 sm:p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        demo={item.demo}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Hotel Booking Application',
        description: 'A comprehensive hotel booking application developed to manage hotel reservations efficiently. The application allows users to book rooms, view hotel details, and manage bookings.',
        image: hotel,
        git: 'https://github.com/vjsyam/Hotel-Booking-Project-Clg',
        technologies: ['React','Artificial Intelligence']
    },
    {
        title: 'Time Capsule',
        description: 'It is a futuristic platform designed to let users write to their future selves, relive memories, and set goals for tomorrow. The project uses modern web technologies like React, React Router, Material-UI (MUI), and a custom backend with APIs to deliver a seamless user experience.',
        image: write,
        git: 'https://github.com/vjsyam/Time_Capsule',
        technologies: ['React', 'Node.js', 'Mongo.db', 'Firebase']
    },
    {
        title: 'Object Detection',
        description: 'Delivered presentations on various topics including web development, React, and design principles. These presentations were aimed at sharing knowledge and insights with peers and industry professionals.',
        image: obj,
        git: 'https://github.com/vjsyam/Object_DetectionAI',
        technologies: ['Python','Speaking']
    },
    {
        title: 'Transparent Charity Platform',
        description: 'Built a decentralized donation platform with React, Flask, and Ethereum (Truffle & Ganache) to ensure secure and transparent transactions. The platform allows users to donate to charities and track their donations on the blockchain.',
        image: tcp,
        git: 'https://github.com/vjsyam/TransparentCharityPlatform-TechGeeks-',
        technologies: ['React', 'Node.js', 'Mongo.db', 'Firebase','BlockChain']
    },
    {
        title: 'Electricity Peak Demand Prediction Using AI',
        description: 'Developed a machine learning model using Random Forest to predict electricity peak demand,Analyzed historical power consumption data to enhance forecasting accuracy.',
        image: electro,
        // git: 'https://github.com/vjsyam/TransparentCharityPlatform-TechGeeks-',
        technologies: ['React', 'Node.js', 'Mongo.db', 'Firebase','BlockChain','Random Forest','Machine Learning']
    },
    {
        title: 'Skill Tracker and Management System',
        description: 'Built a full-stack application to track, manage, and analyze employee skills. Implemented role-based access for Admin, Manager, and Employee, with features like skill updates, search, and performance tracking.',
        image: skill, 
        git: 'https://github.com/vjsyam/skilltracker',
        demo: 'https://skilltracker-jade.vercel.app/',
        technologies: ['React', 'Spring Boot', 'MySQL', 'REST API', 'JWT Authentication', 'Role-Based Access']
    }
    
    
];

export default Projects;
