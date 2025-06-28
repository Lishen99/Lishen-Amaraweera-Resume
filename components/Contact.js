// Contact.js
'use client';
import { motion } from 'framer-motion';

const Contact = () => (
    <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
    >
        <h2>Contact Me</h2>
        <p>Email: lishen.madusha@gmail.com</p>
        <p className="flex justify-center items-center">
            <a className="links px-[0.5%]" href="https://www.instagram.com/lishen_99/" target="_blank"><img className="zoom" src="/icons/instagram.png" width="30vh" alt="Instagram"/></a>
            <a className="links px-[0.5%]" href="https://github.com/Lishen99" target="_blank"><img className="zoom" src="/icons/github.png" width="30vh" alt="GitHub"/></a>
            <a className="links px-[0.5%]" href="https://www.linkedin.com/in/lishen-amaraweera-88507a291/" target="_blank"><img className="zoom" src="/icons/linkedin.png" width="30vh" alt="LinkedIn"/></a>
        </p>
    </motion.section>
);

export default Contact;