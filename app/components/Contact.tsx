'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          I'm always open to discussing new opportunities, collaborations, or interesting projects.
        </motion.p>
        <motion.div 
          className={styles.contactLinks}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.a 
            href="mailto:your.email@example.com" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={linkVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.linkIcon}>📧</span>
            Email
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourprofile" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={linkVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.linkIcon}>💼</span>
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/yourprofile" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={linkVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.linkIcon}>💻</span>
            GitHub
          </motion.a>
          <motion.a 
            href="https://twitter.com/yourprofile" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={linkVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.linkIcon}>𝕏</span>
            X (Twitter)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
