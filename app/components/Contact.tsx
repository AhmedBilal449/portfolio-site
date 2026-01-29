'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.description}>
          I'm always open to discussing new opportunities, collaborations, or interesting projects.
        </p>
        <div className={styles.contactLinks}>
          <a 
            href="mailto:your.email@example.com" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.linkIcon}>📧</span>
            Email
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.linkIcon}>💼</span>
            LinkedIn
          </a>
          <a 
            href="https://github.com/yourprofile" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.linkIcon}>💻</span>
            GitHub
          </a>
          <a 
            href="https://twitter.com/yourprofile" 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.linkIcon}>𝕏</span>
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
}
