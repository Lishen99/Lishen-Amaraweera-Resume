'use client';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Blog Website', description: 'Dynamic blog platform with Python back end and responsive front end.' },
    { title: 'Home Power Management System', description: 'Console application in Java for monitoring and optimizing home energy use.' },
    { title: 'Arduino-Based Sensor Monitoring', description: 'Real-time sensor data collection and LCD display using Arduino.' },
    { title: 'Web-Based Portfolio', description: 'Personal portfolio site using HTML, CSS, JavaScript and GitHub Pages.' },
    { title: 'ARC Assembly Calculator', description: 'Calculator implemented in ARC assembly supporting arithmetic operations.' }
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
                    className="card bg-[#333] p-[20px] w-full max-w-[300px] m-[10px] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:scale-[1.05] hover:shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
                >
                    <h3><strong className="large-strong">{project.title}</strong></h3>
                    <p>{project.description}</p>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

export default Projects;