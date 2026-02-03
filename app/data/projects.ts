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
  disclaimer?: string;
}

export const projects: ProjectData[] = [
  {
    id: '1',
    slug: 'dental-cavity-detection',
    title: 'Dental Genie',
    shortDescription: 'Machine learning model for automated dental cavity detection using image analysis.',
    image: '/dental-genie/logo.png',
    techStack: ['Python', 'Ultralytics (YOLO)','Gradio', 'OpenCV','NumPy','Pandas','Gemini AI'],
    problem: 'Dental cavity detection often relies on manual inspection, which can be time-consuming and subject to human error. Early detection is critical for preventing more serious dental issues, but traditional methods may miss subtle cavities.',
    solution: 'Built a machine learning-powered system that analyzes dental X-ray images to automatically identify and flag potential cavities. The model uses convolutional neural networks trained on thousands of annotated dental images to achieve high accuracy detection rates. Added LLM capabilities using Gemini AI to generate accurate reports for dentists.',
    keyFeatures: [
      'Automated cavity detection with 92% accuracy',
      'Real-time image analysis and processing',
      'Visual highlighting of detected cavities',
      'RESTful API for integration with dental software',
      'Batch processing support for multiple images'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/AhmedBilal449/dental-genie'
  },
  {
    id: '2',
    slug: 'tile-mania',
    title: 'Tile Mania',
    shortDescription: 'Modern, responsive corporate website with content management and analytics.',
    image: '/tile-mania/logo.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Tailwind CSS', 'Supabase'],
    problem: 'A tile company needed a professional admin panel to manage their inventory and orders. They were using a manual system which was time consuming and prone to errors.',
    solution: 'Created a modern, static-first website using Next.js that delivers exceptional performance. The site is fully responsive, includes integrated analytics, and is designed for easy content updates without requiring a full CMS.',
    keyFeatures: [
      'Bespoke admin panel for managing inventory and orders',
      'Admin and Sales agent authentication for different levels of access',
      'Fully responsive design across all devices',
      'Custom analytics dashboard for inventory alerts and stock levels',
      'Smooth animations and transitions',
      'Contact form with email integration'
    ],
    screenshots: ['/projects/website.jpg', '/projects/website-2.jpg'],
    disclaimer: 'Due to a contract with the company, I cannot reveal the source code or provide a live demo of this project.'
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
