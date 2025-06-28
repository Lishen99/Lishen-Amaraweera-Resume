'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] flex justify-center py-[10px] bg-transparent ${isOpen ? 'menu-open' : ''}`}>
      <div className="hamburger md:hidden fixed top-[10px] left-[5px] z-[1100] text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="times"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="bars"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <FaBars />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ul className={`menu ${isOpen ? 'active' : ''} md:flex list-none p-0 m-0 ${isOpen ? 'flex flex-col fixed top-0 left-0 bg-black bg-opacity-90 w-[200px] h-full justify-start items-start pt-[50px] transform-none transition-transform duration-300' : 'hidden md:flex'}`}>
        {links.map((link) => (
          <li key={link} className="mx-[15px] my-[10px] md:my-0">
            <a href={`#${link}`} className="text-white no-underline text-[18px] transition-colors duration-300 hover:text-[var(--accent-color)] hover:scale-110 block py-[10px] px-[15px]">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;