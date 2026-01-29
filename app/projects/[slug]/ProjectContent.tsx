'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectData } from '@/app/data/projects';
import styles from './project.module.css';

interface ProjectContentProps {
  project: ProjectData;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <motion.div 
      className={styles.projectPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/#projects" className={styles.backButton}>
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.shortDescription}>{project.shortDescription}</p>
          
          {/* Tech Stack */}
          <div className={styles.techStack}>
            {project.techStack.map((tech, index) => (
              <motion.span 
                key={tech} 
                className={styles.techBadge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <motion.div 
            className={styles.links}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo →
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub →
              </motion.a>
            )}
          </motion.div>
        </motion.header>

        {/* Main Image */}
        <motion.div 
          className={styles.mainImage}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.imagePlaceholder}>
            {project.title}
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.text}>{project.problem}</p>
        </motion.section>

        {/* Solution */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={styles.text}>{project.solution}</p>
        </motion.section>

        {/* Key Features */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <ul className={styles.featureList}>
            {project.keyFeatures.map((feature, index) => (
              <motion.li 
                key={index} 
                className={styles.featureItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Screenshots</h2>
            <div className={styles.screenshotsGrid}>
              {project.screenshots.map((screenshot, index) => (
                <motion.div 
                  key={index} 
                  className={styles.screenshot}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={styles.imagePlaceholder}>
                    Screenshot {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
}
