'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <p>
            I'm a software engineer who builds real systems that solve real problems. 
            My focus is on creating scalable, maintainable solutions using modern web 
            technologies and data-driven approaches. Whether it's developing full-stack 
            applications, implementing machine learning models, or designing robust APIs, 
            I prioritize clean code and user experience.
          </p>
          <p>
            I approach engineering with a problem-first mindset: understand the challenge, 
            design the right solution, and build it to last. I'm constantly learning new 
            technologies and applying them to create meaningful impact through software.
          </p>
        </div>
      </div>
    </section>
  );
}
