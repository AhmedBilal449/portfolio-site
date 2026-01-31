'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Leading frontend development initiatives and mentoring junior developers.',
      highlights: [
        'Architected and implemented responsive web applications using React and Next.js',
        'Improved application performance by 40% through code optimization',
        'Led a team of 5 developers in delivering high-quality features'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      period: '2021 - 2023',
      description: 'Developed full-stack applications and managed cloud infrastructure.',
      highlights: [
        'Built RESTful APIs using Node.js and Express',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver features'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Created responsive websites and maintained client projects.',
      highlights: [
        'Developed client websites using modern web technologies',
        'Maintained and updated existing codebases',
        'Participated in code reviews and agile ceremonies'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
