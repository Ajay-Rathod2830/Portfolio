export interface TimelineItem {
  year: string;
  event: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  details: string;
}

export interface SkillLevel {
  name: string;
  level: number;
}

export interface CertificateItem {
  title: string;
  organization: string;
  issueDate: string;
  image: string;
  verifyUrl: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  leetcode: string;
  hackerrank: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  about: {
    education: string;
    objective: string;
    skills: string[];
    interests: string[];
    timeline: TimelineItem[];
  };
  projects: ProjectItem[];
  skills: Record<string, SkillLevel[]>;
  certificates: CertificateItem[];
  social: SocialLinks;
  contact: ContactInfo;
}
