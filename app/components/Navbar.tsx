'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.navContainer}>
        <button 
          onClick={() => scrollToSection('home')}
          className={styles.logo}
        >
          Portfolio
        </button>
        
        <ul className={styles.navLinks}>
          <li>
            <motion.button 
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => scrollToSection('skills')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => scrollToSection('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </li>
        </ul>

        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
