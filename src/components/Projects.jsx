import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Footer from './Footer';
import hotel from '../components/hotelhomepage.jpeg'
import write from '../components/writepage.jpeg'
import electro from '../components/electro.png'
import obj from '../components/obj.jpg'
import tcp from '../components/tcp.png'
import skill from '../components/skill.png'
import aletheia from '../components/aletheia.png'

const getBadgeClass = (tag) => {
    const t = tag.toLowerCase();
    // Simplified elegant badges
    return 'text-[14px] text-secondary tracking-wide';
};

const ProjectCard = ({ index, image, title, description, git, demo, technologies }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-[#915EFF]/50 transition-all hover:shadow-card group"
        >
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                    {git && (
                        <div
                            onClick={() => window.open(git, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:bg-black transition-colors"
                        >
                            <FaGithub className="w-1/2 h-1/2 object-contain" />
                        </div>
                    )}
                    {demo && (
                        <div
                            onClick={() => window.open(demo, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:bg-black transition-colors"
                        >
                            <FiExternalLink className="w-1/2 h-1/2 object-contain" />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{title}</h3>
                <p className="mt-2 text-secondary text-[14px] leading-[24px] line-clamp-3">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((tag) => (
                    <p key={tag} className={`text-[14px] ${getBadgeClass(tag)}`}>
                        #{tag}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="bg-primary min-h-screen flex flex-col justify-between" id="projects">
            <div className="pt-24 pb-10 flex-grow">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-6 sm:px-16"
                >
                    <p className="text-secondary uppercase tracking-wider text-[18px]">My Work</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
                    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        Following projects showcases my skills. Each project is briefly described with links to code repositories.
                    </p>
                </motion.div>

                <div className="mt-20 flex flex-wrap gap-7 justify-center max-w-7xl mx-auto px-6">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            index={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Hotel Booking Application',
        description: 'A comprehensive hotel booking application developed to manage hotel reservations efficiently.',
        image: hotel,
        git: 'https://github.com/vjsyam/Hotel-Booking-Project-Clg',
        technologies: ['React', 'AI']
    },
    {
        title: 'Time Capsule',
        description: 'Futuristic platform designed to let users write to their future selves, relive memories, and set goals.',
        image: write,
        git: 'https://github.com/vjsyam/Time_Capsule',
        technologies: ['React', 'Node.js', 'MongoDB', 'Firebase']
    },
    {
        title: 'Object Detection',
        description: 'AI System for object detection in real-time video streams using Python and OpenCV.',
        image: obj,
        git: 'https://github.com/vjsyam/Object_DetectionAI',
        technologies: ['Python', 'OpenCV']
    },
    {
        title: 'Transparent Charity Platform',
        description: 'Decentralized donation platform ensuring secure and transparent transactions via Blockchain.',
        image: tcp,
        git: 'https://github.com/vjsyam/TransparentCharityPlatform-TechGeeks-',
        technologies: ['React', 'Node', 'BlockChain']
    },
    {
        title: 'Peak Demand Prediction',
        description: 'ML model using Random Forest to predict electricity peak demand and analyze power consumption.',
        image: electro,
        technologies: ['ML', 'RandomForest']
    },
    {
        title: 'Skill Tracker System',
        description: 'Full-stack app to track, manage, and analyze employee skills with role-based access.',
        image: skill,
        git: 'https://github.com/vjsyam/skilltracker',
        demo: 'https://skilltracker-jade.vercel.app/',
        technologies: ['Spring Boot', 'React', 'MySQL']
    },
    {
        title: 'Aletheia',
        description: 'One Dilemma. Three Minds. Your Verdict. An interactive storytelling experience.',
        image: aletheia,
        git: 'https://github.com/vjsyam/aletheia',
        demo: 'https://aletheia-vj.vercel.app/',
        technologies: ['Next.js', 'TypeScript', 'Tailwind']
    }
];

export default Projects;
