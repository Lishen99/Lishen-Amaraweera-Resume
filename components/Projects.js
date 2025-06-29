'use client';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Project Matilda', description: 'A mini tank-like robot with a 5-DOF arm, similar to a bomb disposal robot. Powered by ESP32 boards and a Raspberry Pi, it can be controlled via radio or PC with an all-in-one Python script for camera feeds and control.' },
    { title: 'Blog Website', description: 'Developed a full-stack blog platform featuring a Python Flask backend for API services and a responsive frontend for dynamic content display and user interaction.' },
    { title: 'Home Power Management System', description: 'Designed and implemented a console-based application in Java for comprehensive monitoring and optimization of residential energy consumption, including data logging and analysis.' },
    { title: 'Arduino-Based Sensor Monitoring', description: 'Created an embedded system using Arduino to collect real-time data from various sensors, displaying live readings on an LCD interface and enabling basic data logging capabilities.' },
    { title: 'Web-Based Portfolio', description: 'This personal resume website, built with Next.js and Tailwind CSS, showcases my skills, experience, and projects. It features a responsive design and interactive elements.' },
    { title: 'ARC Assembly Calculator', description: 'Developed a calculator application entirely in ARC assembly language, capable of performing fundamental arithmetic operations with direct memory manipulation and register-based computations.' }
];

const Projects = () => (
    <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
    >
        <h2>Projects</h2>
        <div className="project-cards flex flex-wrap justify-evenly mt-[20px]">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="card bg-[rgba(255,255,255,0.1)] p-[20px] w-full max-w-[300px] m-[10px] rounded-[8px] backdrop-filter backdrop-blur-md"
                    initial={{ boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}
                    whileHover={{
                        y: -10,
                        scale: 1.05,
                        boxShadow: '0 12px 24px rgba(0,0,0,0.7), 0 0 0 3px var(--accent-color)',
                        transition: {
                            duration: 0.3,
                            ease: 'easeOut',
                        },
                    }}
                >
                    <h3><strong className="large-strong">{project.title}</strong></h3>
                    <p>{project.description}</p>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

export default Projects;