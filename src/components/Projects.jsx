import React from "react";
import Footer from './Footer';
import hotel from '../components/hotelhomepage.jpeg'
import write from '../components/writepage.jpeg'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={git} target="_blank" rel="noreferrer">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} target="_blank" rel="noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a> {/* Updated this line */}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
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
        image: 'https://viso.ai/wp-content/smush-webp/2023/01/smart-city-computer-vision-yolov7-deep-learning-1060x596.jpg.webp',
        git: 'https://github.com/vjsyam/Object_DetectionAI',
        technologies: ['Python','Speaking']
    },
    {
        title: 'Transparent Charity Platform',
        description: 'Built a decentralized donation platform with React, Flask, and Ethereum (Truffle & Ganache) to ensure secure and transparent transactions. The platform allows users to donate to charities and track their donations on the blockchain.',
        // image: write,
        git: 'https://github.com/vjsyam/TransparentCharityPlatform-TechGeeks-',
        technologies: ['React', 'Node.js', 'Mongo.db', 'Firebase','BlockChain']
    }
    
];

export default Projects;
