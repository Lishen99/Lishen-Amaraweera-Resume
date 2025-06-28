'use client';
import { motion } from 'framer-motion';

const certifications = [
    'Python Programming (Distinction) - Informatics Institute of Technology, Sri Lanka',
    'Python for Beginners - University of Moratuwa, Sri Lanka',
    'Web Design for Beginners - University of Moratuwa, Sri Lanka',
    'IELTS (C1 Level) - Overall Band Score: 7.5'
];

const Certifications = () => (
    <motion.section
        id="certifications"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
    >
        <h2>Certifications</h2>
        <ul className="text-ul">
            {certifications.map((cert, index) => (
                <li key={index} className="text-list">
                    <strong><span style={{ color: 'var(--accent-color)' }}>{cert}</span></strong>
                </li>
            ))}
        </ul>
    </motion.section>
);

export default Certifications;