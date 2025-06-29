'use client';
import { motion } from 'framer-motion';

const experiences = [
    { title: 'Volunteer Robotics Developer - Computational Public Safety Lab', description: 'Assisting with the development, maintenance, and improvement of robotics systems as part of an academic research lab at TMU.' },
    { title: 'Toronto MetRobotics Mechanical Team', description: 'Collaborated on building and testing robotic components and troubleshooting mechanical and software challenges.' },
    { title: 'Senior Prefect | Vidura College Colombo', description: 'Led school events, managed logistics, and supported fundraising efforts.' },
    { title: 'Media Coordinator & Editor | Vidura College ICT & Science Societies', description: 'Created promotional materials, organized teams, and assisted with backstage technical operations.' }
];


const Experience = () => (
    <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
    >
        <h2>Experience</h2>
        <ul className="text-ul">
            {experiences.map((exp, index) => (
                <li key={index} className="text-list">
                    <strong className="large-strong">{exp.title}</strong> {exp.description}
                </li>
            ))}
        </ul>
    </motion.section>
);

export default Experience;