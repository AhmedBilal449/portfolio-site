'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>Your Name</h1>
        <h2 className={styles.title}>Full-Stack / Data-Focused Software Engineer</h2>
        <p className={styles.tagline}>
          Building scalable systems and solving complex problems with clean, maintainable code.
        </p>
        
        <div className={styles.ctaButtons}>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            View Projects
          </button>
          <a 
            href="/resume.pdf" 
            download
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
