'use client';

import { useState, useEffect } from 'react';
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
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <button 
          onClick={() => scrollToSection('home')}
          className={styles.logo}
        >
          Portfolio
        </button>
        
        <ul className={styles.navLinks}>
          <li>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>

        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
