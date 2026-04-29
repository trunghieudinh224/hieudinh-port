/**
 * PROJECTS DATA
 * Chứa danh sách các dự án.
 */
const PROJECTS = [
  {
    id: 'fintrack-pro',
    title: 'FinTrack Pro',
    description: 'A comprehensive financial dashboard for SMEs designed to simplify expense tracking and revenue visualization with real-time data updates.',
    category: 'web',
    tags: ['React', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?q=80&w=1470&auto=format&fit=crop',
    role: 'Frontend Lead',
    timeline: '3 Months',
    type: 'SaaS Product',
    platform: 'Web & Mobile',
    overview: 'FinTrack Pro was born out of a need to help small business owners visualize their cash flow without needing a degree in accounting. The client wanted a dashboard that was both powerful and incredibly simple to use.',
    longDescription: 'My responsibility was to architect the frontend, ensuring the application was responsive, accessible, and performant even when processing large datasets of transaction history.',
    challenge: 'Users were overwhelmed by complex spreadsheets. The app needed to handle thousands of rows of data instantly without UI lag.',
    solution: 'Implemented virtualized lists for data rendering and WebWorkers for heavy calculations, resulting in a 60fps experience.',
    features: [
      'Real-time data synchronization',
      'Interactive financial charting',
      'Export reports to PDF/CSV',
      'Role-based access control',
      'Dark/Light mode support'
    ],
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Recharts', 'Vercel'],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1470&auto=format&fit=crop', title: 'Mobile Responsiveness' },
      { url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1470&auto=format&fit=crop', title: 'User Settings' },
      { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop', title: 'Clean Code Architecture' }
    ],
    liveLink: 'https://example.com',
    repoLink: 'https://github.com/example/fintrack'
  },
  {
    id: 'taskmaster-mobile',
    title: 'TaskMaster Mobile App',
    description: 'A productivity mobile application allowing users to organize tasks, set reminders, and collaborate with teams.',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1470&auto=format&fit=crop',
    role: 'Fullstack Developer',
    timeline: '5 Months',
    type: 'Mobile App',
    platform: 'iOS & Android'
  },
  {
    id: 'prism-design-system',
    title: 'Prism Design System',
    description: 'A unified UI kit and component library created in Figma to standardize design across multiple enterprise platforms.',
    category: 'design',
    tags: ['Figma', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1470&auto=format&fit=crop',
    role: 'UI/UX Designer',
    timeline: '2 Months',
    type: 'Design System',
    platform: 'Figma'
  }
];
