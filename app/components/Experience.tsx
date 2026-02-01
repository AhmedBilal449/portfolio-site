'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Experience.module.css';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Indigo AI',
      period: 'Sept 2025 - Present',
      description: 'Built LangGraph multi-agent systems and modernized an Electron app UI with React/TypeScript.',
      highlights: [
        'Designed and implemented LangGraph-based multi-agent workflows to extract structured insights from heterogeneous enterprise data sources.',
        'Built agents capable of reasoning over hot channels (live meetings, chats, PDFs) and cold channels (static knowledge bases such as Notion), enabling context-aware responses',
        'Integrated and extended MCP, enabling dynamic context sharing between LangGraph agents and real-time sessions.',
        'Collaborated on refactoring the Electron desktop application, modernizing legacy UI components using ShadCN to improve consistency and maintainability.'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'LingoPal',
      period: 'Aug 2024 - Dec 2024',
      description: 'Built lip-synced ElevenLabs audio and improved translation quality in a Next.js/FastAPI stack.',
      highlights: [
        'Built an audio generation feature using ElevenLabs, syncing voice output precisely with lip movements based on subtitle timing.',
        'Led research comparing translation services, benchmarking accuracy with cosine similarity on Kaggle datasets; reduced errors by 14% through a hybrid approach using OpenAI for long text and Google Translate for short text, guided by user feedback.',
        'Followed Agile methodology with weekly sprints and daily stand-ups; worked under a Scrum Master to ensure efficient delivery.',
        'Performed extensive code reviews across a large existing codebase, improving readability, consistency, and maintainability.'
      ]
    },
    {
      title: 'AI Automation Engineer',
      company: 'BizNav',
      period: 'Sep 2023 - Dec 2023',
      description: 'Automated workflows and built simple AI tools to boost productivity for non-technical teams.',
      highlights: [
        'Automated departmental workflows with AI-enhanced Excel solutions, cutting manual effort and saving 14+ hours/week.',
        'Designed and deployed simple locally hosted internal web tools using Python and Gradio that wrapped LLMs with structured, pre-defined prompts, enabling non-technical staff to consistently obtain high-quality AI outputs.',
        'Organized and led AI workshops for staff, promoting adoption of AI tools to boost team productivity and efficiency.',
        'Maintained and upgraded the company website, coordinating with external IT contractors to deliver timely updates.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
