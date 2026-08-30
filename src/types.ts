export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe' | 'file-text';
  username?: string;
  primary?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100%
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'AI & Data' | 'Architecture & Tools';
  icon?: string;
  highlight?: boolean;
  yearsOfExp?: number;
  description?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'AI & Data' | 'Cloud & Systems' | 'Mobile & Web';
  summary: string;
  fullDescription: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  role: string;
  timeline: string;
  architectureHighlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Open Source';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  courses?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  relationship: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  type: 'Master Thesis Defense' | 'Technical Preprint' | 'Conference Paper' | 'Space Agency Report';
  venue: string;
  year: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  pdfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  status: string;
  location: string;
  email: string;
  phone?: string;
  website: string;
  avatarUrl?: string;
  yearsOfExperience: number;
  bioParagraphs: string[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  socials: SocialLink[];
  highlights: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timeline?: string;
  budget?: string;
}

export type Language = 'en' | 'ar' | 'fr';

