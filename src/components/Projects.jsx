import React from "react";
import Footer from './Footer';

// Updated ProjectCard component to handle image dynamically
const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
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
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
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

// Updated project array with correct image references
export const project = [
    {
        title: 'Hotel Booking Application',
        description: 'A comprehensive hotel booking application developed to manage hotel reservations efficiently. The application allows users to book rooms, view hotel details, and manage bookings.',
        image: '', // Add path to your hotel booking image if available
        git: 'https://github.com/vjsyam/React-Clg',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB','Artificial Intelligence']
    },
    {
        title: 'Hackathon Projects',
        description: 'Participated in various hackathons, working on diverse projects that challenge creativity and problem-solving skills. Examples include real-time chat applications, collaborative tools, and more.',
        // image: '', // Add path to your hackathon image if available
        // git: 'https://github.com/yourusername/hackathon-projects',
        technologies: ['React', 'Node.js', 'Socket.io', 'Firebase']
    },
    {
        title: 'Presentations',
        description: 'Delivered presentations on various topics including web development, React, and design principles. These presentations were aimed at sharing knowledge and insights with peers and industry professionals.',
        // image: '', // Add a relevant image if available
        // git: '', // You may leave this empty or add relevant links
        technologies: ['Technologies','Speaking']
    }
];

export default Projects;
