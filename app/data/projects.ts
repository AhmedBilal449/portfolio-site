export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectData[] = [
  {
    id: '1',
    slug: 'dental-cavity-detection',
    title: 'Dental Genie',
    shortDescription: 'Machine learning model for automated dental cavity detection using image analysis.',
    image: '/projects/dental.jpg',
    techStack: ['Python', 'Ultralytics (YOLO)','Gradio', 'OpenCV','NumPy','Pandas'],
    problem: 'Dental cavity detection often relies on manual inspection, which can be time-consuming and subject to human error. Early detection is critical for preventing more serious dental issues, but traditional methods may miss subtle cavities.',
    solution: 'Built a machine learning-powered system that analyzes dental X-ray images to automatically identify and flag potential cavities. The model uses convolutional neural networks trained on thousands of annotated dental images to achieve high accuracy detection rates.',
    keyFeatures: [
      'Automated cavity detection with 92% accuracy',
      'Real-time image analysis and processing',
      'Visual highlighting of detected cavities',
      'RESTful API for integration with dental software',
      'Batch processing support for multiple images'
    ],
    screenshots: ['/projects/dental.jpg', '/projects/dental-2.jpg'],
    githubUrl: 'https://github.com/AhmedBilal449/dental-genie'
  },
  {
    id: '2',
    slug: 'company-website',
    title: 'Company Website',
    shortDescription: 'Modern, responsive corporate website with content management and analytics.',
    image: '/projects/website.jpg',
    techStack: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Tailwind CSS'],
    problem: 'A growing tech startup needed a professional web presence that could scale with their business. Their existing website was slow, difficult to update, and not optimized for search engines or mobile devices.',
    solution: 'Created a modern, static-first website using Next.js that delivers exceptional performance and SEO. The site is fully responsive, includes integrated analytics, and is designed for easy content updates without requiring a full CMS.',
    keyFeatures: [
      'Static generation for optimal performance',
      '100/100 Lighthouse performance score',
      'Fully responsive design across all devices',
      'SEO optimized with meta tags and structured data',
      'Smooth animations and transitions',
      'Contact form with email integration'
    ],
    screenshots: ['/projects/website.jpg', '/projects/website-2.jpg'],
    liveUrl: 'https://example-company.vercel.app',
    githubUrl: 'https://github.com/yourusername/company-website'
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
