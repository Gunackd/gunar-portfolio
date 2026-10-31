export interface Project {
  id: string;
  title: string;
  category: 'React & Web' | 'Full-Stack' | 'Systems & Python';
  tagline: string;
  description: string;
  detailedDescription?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  architecture?: string[];
  interactiveDemoType?: 'task-app' | 'infinity-visions' | 'rsa-encryption' | 'colorization' | 'hall-reservation';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    description: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  category: 'Education' | 'Core Engineering' | 'React Ecosystem' | 'Deployment & Tooling';
  description: string;
  keyPoints: string[];
}

export interface CreativeItem {
  title: string;
  discipline: string;
  description: string;
  tools: string[];
}
