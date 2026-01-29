'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <motion.p 
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.p>
          
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.a 
              href="mailto:your.email@example.com" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.linkIcon}>📧</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourprofile" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.linkIcon}>💼</span>
            </motion.a>
            <motion.a 
              href="https://github.com/yourprofile" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.linkIcon}>💻</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com/yourprofile" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.linkIcon}>𝕏</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
