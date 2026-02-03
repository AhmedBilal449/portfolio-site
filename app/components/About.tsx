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
              I'm Bilal (Not Ahmed), and this is my portfolio (obviously). I make things, and I break things.
              I have a severe case of shiny object syndrome, and I'm trying to cure it by building things.
              What I can do, I do, and what I can't do, I learn. This approach has allowed me to explore
              a lot of different technologies and tools, and I'm always looking for new challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              I’m currently a Software Developer at Indigo AI. When I joined, the tech stack was unfamiliar, but 
              I dove in headfirst and quickly got up to speed with both the technology and the industry. I’m always
              looking for opportunities to learn, experiment, and build meaningful things.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
