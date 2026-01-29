import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '@/app/data/projects';
import styles from './project.module.css';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.projectPage}>
      <div className={styles.container}>
        {/* Back Button */}
        <Link href="/#projects" className={styles.backButton}>
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.shortDescription}>{project.shortDescription}</p>
          
          {/* Tech Stack */}
          <div className={styles.techStack}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className={styles.links}>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                View Live Demo →
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                View on GitHub →
              </a>
            )}
          </div>
        </header>

        {/* Main Image */}
        <div className={styles.mainImage}>
          <div className={styles.imagePlaceholder}>
            {project.title}
          </div>
        </div>

        {/* Problem Statement */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.text}>{project.problem}</p>
        </section>

        {/* Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={styles.text}>{project.solution}</p>
        </section>

        {/* Key Features */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <ul className={styles.featureList}>
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Screenshots</h2>
            <div className={styles.screenshotsGrid}>
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className={styles.screenshot}>
                  <div className={styles.imagePlaceholder}>
                    Screenshot {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
