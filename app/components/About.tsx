'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import profileImage from '../assets/Me.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          About Me
        </motion.h2>
        <div className={styles.flexContainer}>
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={profileImage}
                alt="Profile picture"
                className={styles.profileImage}
                width={300}
                height={300}
                priority
              />
            </div>
          </motion.div>
          <div className={styles.textColumn}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              I'm a software engineer who builds real systems that solve real problems. 
              My focus is on creating scalable, maintainable solutions using modern web 
              technologies and data-driven approaches. Whether it's developing full-stack 
              applications, implementing machine learning models, or designing robust APIs, 
              I prioritize clean code and user experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              I approach engineering with a problem-first mindset: understand the challenge, 
              design the right solution, and build it to last. I'm constantly learning new 
              technologies and applying them to create meaningful impact through software.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
