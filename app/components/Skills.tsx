'use client';

import styles from './Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Modern CSS', 'Framer Motion', 'Responsive Design']
    },
    {
      title: 'Backend / Data',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'SQL', 'Data Analysis']
    },
    {
      title: 'Engineering',
      skills: ['REST APIs', 'Git/GitHub', 'Vercel/Netlify', 'CI/CD', 'Testing', 'System Design']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillBadge}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
