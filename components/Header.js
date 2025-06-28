'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
  const name = "Lishen Madusha Amaraweera";
  const title = "Computer Science Student | Robotics & Computer Vision Enthusiast";

  const [displayName, setDisplayName] = useState('');
  const [displayTitle, setDisplayTitle] = useState('');
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showTitleCursor, setShowTitleCursor] = useState(false);

  useEffect(() => {
    let nameIndex = 0;
    let titleIndex = 0;
    let nameInterval;
    let titleInterval;

    const typeName = () => {
      nameInterval = setInterval(() => {
        setDisplayName(name.substring(0, nameIndex + 1));
        nameIndex++;
        if (nameIndex === name.length) {
          clearInterval(nameInterval);
          setShowNameCursor(false); // Hide name cursor
          setTimeout(() => {
            setShowTitleCursor(true); // Show title cursor
            typeTitle();
          }, 500); // Delay before typing title
        }
      }, 100);
    };

    const typeTitle = () => {
      titleInterval = setInterval(() => {
        setDisplayTitle(title.substring(0, titleIndex + 1));
        titleIndex++;
        if (titleIndex === title.length) {
          clearInterval(titleInterval);
          setShowTitleCursor(false); // Hide title cursor after typing
        }
      }, 50);
    };

    typeName();

    return () => {
      clearInterval(nameInterval);
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <motion.header
      id="about"
      className="h-screen flex flex-col justify-center items-center text-center p-[20px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-[4.5em] mb-[10px] text-[var(--accent-color)]">
        {displayName}{showNameCursor && <span className="typewriter-caret"></span>}
      </h1>
      <p className="intro text-white text-xl md:text-2xl">
        {displayTitle}{showTitleCursor && <span className="typewriter-caret"></span>}
      </p>
    </motion.header>
  );
};

export default Header;