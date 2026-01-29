'use client';

import Link from 'next/link';
import { projects } from '@/app/data/projects';
import styles from './Projects.module.css';

export default function Projects() {

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  {project.title}
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.shortDescription}</p>
                <div className={styles.techStack}>
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
