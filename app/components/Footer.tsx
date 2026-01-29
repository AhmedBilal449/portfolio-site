'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className={styles.socialLinks}>
            <a 
              href="mailto:your.email@example.com" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <span className={styles.linkIcon}>📧</span>
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className={styles.linkIcon}>💼</span>
            </a>
            <a 
              href="https://github.com/yourprofile" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className={styles.linkIcon}>💻</span>
            </a>
            <a 
              href="https://twitter.com/yourprofile" 
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <span className={styles.linkIcon}>𝕏</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
