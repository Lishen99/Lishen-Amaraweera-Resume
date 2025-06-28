'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GITHUB_PAGES_BASE_PATH = '/Lishen-Amaraweera-Resume';

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
            <a className="links px-[0.5%]" href="https://www.instagram.com/lishen_99/" target="_blank"><Image className="zoom" src={`${GITHUB_PAGES_BASE_PATH}/icons/instagram.png`} width={30} height={30} alt="Instagram"/></a>
            <a className="links px-[0.5%]" href="https://github.com/Lishen99" target="_blank"><Image className="zoom" src={`${GITHUB_PAGES_BASE_PATH}/icons/github.png`} width={30} height={30} alt="GitHub"/></a>
            <a className="links px-[0.5%]" href="https://www.linkedin.com/in/lishen-amaraweera-88507a291/" target="_blank"><Image className="zoom" src={`${GITHUB_PAGES_BASE_PATH}/icons/linkedin.png`} width={30} height={30} alt="LinkedIn"/></a>
        </p>
    </motion.section>
);

export default Contact;
