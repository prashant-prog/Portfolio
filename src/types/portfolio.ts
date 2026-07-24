export interface SkillCategory {
  title: string;
  skills: string[];
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  skillsUsed?: string[];
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  requestCurl: string;
  responseJson: string;
}

export interface ArchitectureNode {
  title: string;
  role: string;
  tech: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl: string;
  overview: string;
  challenges: string[];
  learnings: string[];
  architectureNodes?: ArchitectureNode[];
  architectureDataFlow?: string[];
  apiEndpoints?: ApiEndpoint[];
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  verifyUrl?: string;
}

export interface Achievement {
  title: string;
  organizer: string;
  description: string;
  rank: string;
  highlights?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bioSummary: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    availability: string;
  };
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: {
    degree: string;
    institution: string;
    status: string;
    expectedGraduation: string;
  };
  certifications: Certification[];
  achievement: Achievement;
}
