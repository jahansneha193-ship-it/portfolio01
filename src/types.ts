export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  detailedDescription?: string;
  iconType: 'deck' | 'branding' | 'code' | 'marketing' | 'artwork' | 'canva';
}

export interface SkillCategory {
  title: string;
  iconName: 'ai' | 'marketing' | 'design' | 'creative';
  skills: {
    name: string;
    subIcon: 'bolt' | 'terminal' | 'code' | 'chart' | 'share' | 'pen' | 'image' | 'presentation' | 'file' | 'camera' | 'video' | 'book';
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  major?: string;
  result?: string;
  statusBadge: string;
  badgeType: 'enrolled' | 'year' | 'batch';
  description?: string;
}
