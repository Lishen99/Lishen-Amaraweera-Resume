'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: '90%' },
  { name: 'Java', level: '75%' },
  { name: 'HTML/CSS', level: '90%' },
  { name: 'JavaScript', level: '60%' },
  { name: 'SolidWorks', level: '70%' },
  { name: 'Assembly (ARC, AVR)', level: '35%' },
  { name: 'C++', level: '70%' },
  { name: 'MySQL', level: '60%' },
  { name: 'Git', level: '80%' },
  { name: 'Linux', level: '70%' },
  { name: 'Windows Server', level: '60%' },
  { name: 'Virtual Machines', level: '60%' },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      <div className="skills-container flex flex-wrap justify-evenly mt-[20px]">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill w-full max-w-[30%] mx-[10px] my-0 px-[0.5%]"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(var(--accent-color-rgb), 0.6)',
              transition: { duration: 0.2 },
            }}
          >
            <h3>{skill.name}</h3>
            <div className="progress-bar bg-[#444] block h-[10px] rounded-[5px] overflow-hidden">
              <motion.span
                className="block h-full bg-[var(--accent-color)]"
                style={{ width: skill.level }}
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;