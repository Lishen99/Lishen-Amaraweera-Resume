'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
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
          className="fixed bottom-5 right-5 z-[1000]"
        >
          <button
            onClick={scrollToTop}
            className="bg-[var(--accent-color)] text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-50"
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