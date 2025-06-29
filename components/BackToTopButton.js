'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-[1200]"
        >
          <button
            onClick={scrollToTop}
            className="bg-black bg-opacity-50 text-[var(--accent-color)] p-4 rounded-full shadow-lg hover:bg-opacity-70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;