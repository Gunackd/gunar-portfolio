import { Project, SkillCategory, JourneyMilestone, CreativeItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Guna R',
  title: 'Front-End Developer | React.js',
  roleTag: 'React Developer',
  headline: 'Building Modern Web Experiences with React.',
  education: 'M.Sc. Computer Science',
  location: 'Bangalore, India',
  experienceLevel: 'Fresher / Entry-Level Developer',
  email: 'gunackd@gmail.com',
  githubUrl: 'https://github.com/gunackd',
  linkedinUrl: 'https://linkedin.com/in/gunar-dev',
  creativeBrand: 'Infinity Visions',
  bioIntro: `I'm a passionate Front-End Developer focused on creating responsive, interactive, and user-friendly web applications. I enjoy transforming ideas into functional digital experiences using modern web technologies.`,
  bioExtended: `I enjoy building modern web applications, exploring new technologies, and solving problems through code. My focus is on writing clean, maintainable code and creating responsive user interfaces that deliver great user experiences.`,
  careerGoals: `Seeking an entry-level Front-End Developer role where I can contribute to high-impact user experiences, apply React best practices, write resilient code, and grow within a collaborative engineering culture.`,
  availability: 'Open to Front-End Developer Opportunities',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Core web standards and modern component-driven libraries for building high-performance UIs.',
    skills: [
      { name: 'React.js', description: 'Functional components, hooks, custom state hooks, and virtual DOM diffing' },
      { name: 'JavaScript (ES6+)', description: 'Modern syntax, async/await, closures, promises, DOM manipulation, modules' },
      { name: 'HTML5', description: 'Semantic structure, accessibility best practices, SEO hierarchy' },
      { name: 'CSS3', description: 'Flexbox, Grid, custom properties, animations, and transitions' },
      { name: 'React Router', description: 'Declarative routing, nested routes, route loaders, and protected layouts' },
      { name: 'Tailwind CSS', description: 'Utility-first styling, design system tokens, responsive variants, dark mode' },
      { name: 'Bootstrap', description: 'Responsive grid systems, utility classes, and component scaffolding' },
      { name: 'Material UI', description: 'Component theming, design systems, and standardized accessible controls' },
      { name: 'Responsive Design', description: 'Mobile-first viewport design, fluid typography, cross-device compatibility' },
    ],
  },
  {
    title: 'Tools & Technologies',
    description: 'Modern development workflow, version control, build tools, and design handoff utilities.',
    skills: [
      { name: 'Git', description: 'Branch management, semantic commit history, merge conflict resolution' },
      { name: 'GitHub', description: 'Code hosting, pull requests, issue tracking, and repository management' },
      { name: 'VS Code', description: 'Configured extensions, linting integration, debugging workflows' },
      { name: 'Vite', description: 'Next-gen frontend tooling, lightning fast HMR, and optimized production builds' },
      { name: 'NPM', description: 'Package management, dependency auditing, and npm scripts configuration' },
      { name: 'Vercel', description: 'Continuous deployment, serverless routing, and preview environments' },
      { name: 'Figma', description: 'Design inspection, component measurements, SVG exports, asset slicing' },
    ],
  },
  {
    title: 'Currently Exploring',
    description: 'Active technical roadmap and continuous skill acquisition to deepen front-end engineering expertise.',
    skills: [
      { name: 'TypeScript', description: 'Static typing, interfaces, generics, and strict compile-time safety in React' },
      { name: 'Next.js', description: 'App router, server-side rendering (SSR), and static site generation (SSG)' },
      { name: 'Advanced React', description: 'Performance optimization, useMemo, useCallback, React memo, code-splitting' },
      { name: 'Redux / Toolkit', description: 'Global state centralization, reducers, and predictable state containers' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'infinity-visions',
    title: 'Infinity Visions',
    category: 'React & Web',
    tagline: 'Creative Digital Agency Platform',
    description: 'A creative digital agency website featuring modern animations, fluid layout transitions, and high-impact visual presentation.',
    detailedDescription: 'Infinity Visions represents the digital agency portfolio designed to showcase modern visual branding and web development capabilities. Built with React.js, Vite, and Framer Motion, it features responsive layouts, smooth micro-interactions, dark aesthetic color grading, and performant asset rendering across all device sizes.',
    techStack: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://infinityvisions.framer.website/',
    githubUrl: 'https://github.com/gunackd/infinity-visions',
    highlights: [
      'Engineered smooth scroll animations and micro-interactions using Framer Motion',
      'Configured lightning-fast bundling and assets optimization with Vite',
      'Created custom responsive grid systems with Tailwind CSS utility classes',
      'Implemented clean navigation architecture and fluid view transitions',
    ],
    architecture: [
      'Modular React component hierarchy for rapid section authoring',
      'Declarative viewport enter animations with motion hooks',
      'Mobile-first responsive breakpoints with zero layout shift',
    ],
    interactiveDemoType: 'infinity-visions',
  },
  {
    id: 'task-list-app',
    title: 'Task List Web Application',
    category: 'React & Web',
    tagline: 'Responsive Task & Productivity Tracker',
    description: 'A responsive task management application featuring dynamic task creation, status categorization, priority sorting, and persistent state.',
    detailedDescription: 'A clean, intuitive productivity application developed to help users organize daily goals, organize tasks by priority, filter by completion status, and maintain persistent data using browser LocalStorage. Built with focus on clean state updates and accessibility.',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'LocalStorage'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gunackd/task-list-app',
    highlights: [
      'Real-time task filtering by All, Active, and Completed states',
      'Priority level categorization (High, Medium, Low) with visual indicators',
      'Client-side LocalStorage synchronization with fallback recovery',
      'Keyboard accessibility for rapid task creation and status toggling',
    ],
    architecture: [
      'Unidirectional data flow with React state hooks and reducer patterns',
      'Custom persistence hook wrapping localStorage operations safely',
      'Zero layout flicker during rapid array mutations and filter toggling',
    ],
    interactiveDemoType: 'task-app',
  },
  {
    id: 'seminar-hall-reservation',
    title: 'Seminar Hall Online Reservation System',
    category: 'Full-Stack',
    tagline: 'Web-Based Facility Booking & Management',
    description: 'A full-featured hall reservation platform with role-based authentication, interactive calendar slot booking, and administrative oversight.',
    detailedDescription: 'Designed to solve venue scheduling conflicts across academic faculties and student organizations. The platform allows registered users to browse campus halls, inspect real-time availability calendar matrices, submit reservation requests with event details, and enables department administrators to review, approve, or reject bookings.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gunackd/seminar-hall-reservation',
    highlights: [
      'Implemented secure user authentication and session management',
      'Built automated conflict-detection algorithms to prevent double-booking',
      'Developed admin control panel for venue approval workflows and usage auditing',
      'Designed responsive booking forms with client and server-side validation',
    ],
    architecture: [
      'Relational database schema with foreign-key constraints for halls, slots, and users',
      'RESTful PHP endpoint handlers returning JSON-formatted booking responses',
      'Interactive date-picker integration with slot availability lookups',
    ],
    interactiveDemoType: 'hall-reservation',
  },
  {
    id: 'file-encryption-decryption',
    title: 'File Encryption and Decryption',
    category: 'Systems & Python',
    tagline: 'Cryptographic Desktop Security Application',
    description: 'A desktop application for secure file encryption and decryption built using Python, Tkinter, and RSA cryptographic key generation.',
    detailedDescription: 'A standalone security utility focused on protecting sensitive document payloads. It utilizes asymmetric RSA 2048-bit key generation for key exchanges combined with symmetric AES cipher block chaining for bulk file encryption, wrapped in an accessible Tkinter graphical user interface.',
    techStack: ['Python', 'Tkinter GUI', 'RSA Cryptography', 'AES Cipher'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gunackd/file-encryption-rsa',
    highlights: [
      'Implemented 2048-bit asymmetric RSA public/private key generation',
      'Built hybrid cryptography flow combining RSA key encapsulation with AES-256',
      'Created cross-platform desktop GUI using Python Tkinter with file-browser dialogs',
      'Enforced cryptographic hash verification (SHA-256) for data integrity check',
    ],
    architecture: [
      'Separation of cryptographic engine from UI presentation layer',
      'Memory-efficient binary file stream chunking for large file sizes',
      'Safe key export to PEM formats with password-protected private keys',
    ],
    interactiveDemoType: 'rsa-encryption',
  },
  {
    id: 'image-colorization',
    title: 'Image Colorization',
    category: 'Systems & Python',
    tagline: 'Computer Vision Grayscale Restoration Pipeline',
    description: 'An image processing project using OpenCV and deep learning models to predict and restore realistic color to black-and-white photos.',
    detailedDescription: 'A computer vision pipeline utilizing pre-trained deep convolutional neural networks and OpenCV. The algorithm operates in the LAB color space by extracting the L (luminance) channel from a grayscale image and using a neural network to infer the corresponding A and B (chrominance) channels before reconstructing the full RGB image.',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Deep Learning / Caffe'],
    liveUrl: '#',
    githubUrl: 'https://github.com/gunackd/image-colorization-opencv',
    highlights: [
      'Implemented LAB color space decomposition for isolated luminance processing',
      'Integrated pre-trained deep learning colorization model weights with OpenCV DNN',
      'Preserved high-resolution image details while reconstructing color channels',
      'Built automated image batch processing and side-by-side evaluation comparison',
    ],
    architecture: [
      'Image normalization and spatial resizing pipeline before neural tensor pass',
      'Post-processing bilinear interpolation to map predicted AB channels to original L dimension',
      'Dynamic RGB conversion preserving contrast and edge clarity',
    ],
    interactiveDemoType: 'colorization',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2022 - 2024',
    title: 'M.Sc. Computer Science Graduate',
    category: 'Education',
    description: 'Earned Master of Science in Computer Science in Bangalore, India. Strengthened core theoretical foundations in algorithms, data structures, database architecture, and computer systems.',
    keyPoints: [
      'Developed academic projects in web platforms and computer vision',
      'Achieved strong foundations in object-oriented programming and software engineering principles',
      'Explored data modeling, relational databases, and algorithm complexity',
    ],
  },
  {
    year: '2023 - 2024',
    title: 'Front-End Core & JavaScript Mastery',
    category: 'Core Engineering',
    description: 'Focused dedicated study and coding practice on modern JavaScript (ES6+), semantic HTML5, CSS3 layout systems (Flexbox, Grid), and responsive design principles.',
    keyPoints: [
      'Deepened knowledge of closures, promises, async/await, and event bubbling',
      'Mastered responsive layouts with mobile-first media queries and modern CSS',
      'Built clean user interfaces avoiding framework overhead when vanilla JS was optimal',
    ],
  },
  {
    year: '2024 - 2025',
    title: 'React.js Component Architecture & Ecosystem',
    category: 'React Ecosystem',
    description: 'Specialized in the React ecosystem: component lifecycle, React Hooks (useState, useEffect, useMemo, useCallback), and unidirectional data flow.',
    keyPoints: [
      'Developed modular, reusable UI components with clean prop contracts',
      'Practiced client-side routing using React Router for seamless single-page applications',
      'Integrated external REST APIs with robust error handling and loading skeletons',
    ],
  },
  {
    year: '2025 - Present',
    title: 'Modern Tooling, Version Control & CI/CD Deployment',
    category: 'Deployment & Tooling',
    description: 'Adopted Vite for next-generation developer tooling, Tailwind CSS for scalable design tokens, and Git/GitHub for structured version control and automated deployments.',
    keyPoints: [
      'Configured continuous deployment pipelines on Vercel and Netlify',
      'Authored clean README documentation and structured git commit histories',
      'Actively exploring TypeScript, Next.js, and advanced state management patterns',
    ],
  },
];

export const CREATIVE_SKILLS: CreativeItem[] = [
  {
    title: 'Graphic Design & Visual Assets',
    discipline: 'Graphic Design',
    description: 'Designing clean marketing visuals, social banners, iconography, and structured design layouts that enhance web applications.',
    tools: ['Figma', 'Photoshop', 'Canva', 'Illustrator'],
  },
  {
    title: 'Brand Identity & Art Direction',
    discipline: 'Branding',
    description: 'Developing cohesive visual language, typography scales, color palettes, and brand presence—as showcased in the Infinity Visions project.',
    tools: ['Design Systems', 'Brand Guidelines', 'Typography Pairing'],
  },
  {
    title: 'Video Editing & Motion Graphics',
    discipline: 'Video Editing',
    description: 'Editing dynamic video sequences, short-form promotional content, pacing, sound synchronization, and introductory motion assets.',
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
  },
];

export const GITHUB_STATS = {
  username: 'gunackd',
  repositoriesCount: 12,
  contributionsThisYear: 284,
  streakDays: 14,
  topLanguages: [
    { name: 'JavaScript / React', percentage: 58 },
    { name: 'HTML & CSS', percentage: 22 },
    { name: 'Python', percentage: 14 },
    { name: 'PHP / SQL', percentage: 6 },
  ],
};
