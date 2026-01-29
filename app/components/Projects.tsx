'use client';

import styles from './Projects.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'dental-cavity-detection',
      title: 'Dental Cavity Detection',
      description: 'Machine learning model for automated dental cavity detection using image analysis.',
      image: '/projects/dental.jpg',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask']
    },
    {
      id: 'kotlin-marketplace',
      title: 'Kotlin Marketplace App',
      description: 'Android e-commerce application with real-time inventory and secure payment integration.',
      image: '/projects/marketplace.jpg',
      techStack: ['Kotlin', 'Android', 'Firebase', 'REST API']
    },
    {
      id: 'company-website',
      title: 'Company Website',
      description: 'Modern, responsive corporate website with content management and analytics.',
      image: '/projects/website.jpg',
      techStack: ['Next.js', 'React', 'TypeScript', 'Vercel']
    }
  ];

  const handleProjectClick = (projectId: string) => {
    // Will navigate to project pages in Phase 3
    console.log(`Navigate to /projects/${projectId}`);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  {project.title}
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
