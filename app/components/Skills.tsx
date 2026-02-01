'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Modern CSS', 'Framer Motion', 'Responsive Design']
    },
    {
      title: 'Backend / Data',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'ML Pipelines', 'SQL', 'Data Analysis']
    },
    {
      title: 'Engineering',
      skills: ['REST APIs', 'Git/GitHub', 'Vercel', 'CI/CD', 'Testing', 'System Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              className={styles.skillCategory}
              variants={categoryVariants}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillBadge}>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
