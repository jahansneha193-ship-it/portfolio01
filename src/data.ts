import { ProjectItem, SkillCategory, EducationItem } from './types';

export const PORTRAIT_DESKTOP_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB1pflez6oYG5bX2hj080DH7Yc_nALaaIE0UW7HPZ0ShDQmHSuDL609lz5uTHq3jExYGYo4Q5VIrhVY3OBAm6wIYkY6J-yFhWVoCBxAe3-8zDBJiYaNMF9fpl1S1dzlQXhGyF7EwiBWSqfRKctKWCcHz8ne68DOf0mk_guPhxeTCoHrDqFs6SajpDE5nAqwqdISmzS-fVUgcfFOJkh_g-cX4YGIV148bj2sifS0rR9DJY4o8U06nfjIQJ08K0YyWx_gKw';

export const PORTRAIT_MOBILE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCn42acIQSFGg-OjjVqD5sJsWltUD-1M6cpbrtDBR1X5fKsUyp8lfufaCLEYO4eMhQu7iJXh8BCOaHRtZmeXUwZrImoR6pjHGMrHawlZuXLoOaW-W7aSZV-A6pgAl4jE9f5t9kMLEP6lpRu_bqmsSGXGXybmK0tgHd4Sv4q1LscmI95C-z65rp3cGak-M85ZLpZthYT8j4GHdlvTjJ_3qITgyH6CVro8k6SHMavdp-Yv3NZfWqJOFwndqh6Q6DAzvMToQ';

export const CERTIFICATE_PREVIEW_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgQLPSV-d4qUFyzuqprWnLDFPRzv0TCEnfCijbGyup0lE908yDr4MMHx4ZrYn0OYKrm_wGhUZlUgQnlHXuQ8EYLh6-TB1QFbu7PMFAtDLBy4tLU37fOVhYPg1l-rs3Uxc9W9jjySJZfk0tZI3jrRalCTNJNW7-JzC_pASQjIPlVjwmAa7Eo-FEfSAUd_YOl3i9qDw_2t2ePuO_eiBCxOKGUSpoK7KF-ubZIQaJa32vW9KJ06BcJllgSiLNPh4YXfg-5g';

export const CERTIFICATE_FULL_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBB8uWpgm5gR1sdMMkweVkE_m3lp7tj1atX8vDlooKegwoPDKKgQnQiP6F8AL2th8tpqG3oQZ7g2xpdkaVW8fLaCuWb-i8Am_gARj6Hgiw6KqGKgiVc90ND5F4g2fGHTGU2rx2sOWms-bIsPez7R0SNoSIxvUFFY_b4LrPXtJgwtY1RA9RuHJ5NWizM7lp96uw8VLD0bxlXTtxmjDfWDb2ZOy-RNmJ58AAhl43d44Jpga-kSK7wMRcCUyCJ6YEExpjC5Q';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Technology',
    iconName: 'ai',
    skills: [
      { name: 'Artificial Intelligence & AI Tools', subIcon: 'bolt' },
      { name: 'AI Prompt Engineering', subIcon: 'terminal' },
      { name: 'Basic HTML & Web Design', subIcon: 'code' },
    ],
  },
  {
    title: 'Marketing & Content',
    iconName: 'marketing',
    skills: [
      { name: 'Digital Marketing', subIcon: 'chart' },
      { name: 'Social Media Marketing', subIcon: 'share' },
      { name: 'Content Creation', subIcon: 'pen' },
    ],
  },
  {
    title: 'Design & Presentation',
    iconName: 'design',
    skills: [
      { name: 'Canva & Graphic Design', subIcon: 'image' },
      { name: 'Presentation Design', subIcon: 'presentation' },
      { name: 'Microsoft Word & PowerPoint', subIcon: 'file' },
    ],
  },
  {
    title: 'Creative Skills',
    iconName: 'creative',
    skills: [
      { name: 'Photography', subIcon: 'camera' },
      { name: 'Video Editing', subIcon: 'video' },
      { name: 'Cooking & Culinary Art', subIcon: 'book' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-presentation',
    title: 'AI Presentation – AI in Workplace',
    tag: 'AI & Deck',
    description:
      'A modern slide presentation exploring how generative AI tools streamline productivity, data structuring, and modern office workflows.',
    detailedDescription:
      'A comprehensive presentation deck analyzing real-world generative AI integration across corporate environments, productivity gains, ethical safeguards, and intelligent workflow automation.',
    iconType: 'deck',
  },
  {
    id: 'ai-banner',
    title: 'AI Course Banner',
    tag: 'Branding',
    description:
      'Creative promotional banners crafted for youth AI workshops and training bootcamps with captivating typography and graphics.',
    detailedDescription:
      'High-impact visual banner campaign designed for student bootcamps and youth technology cohorts, featuring refined color balancing and typographic hierarchy to maximize workshop registrations.',
    iconType: 'branding',
  },
  {
    id: 'html-app',
    title: 'HTML App – Pet Care & Selection',
    tag: 'Web App',
    description:
      'An interactive web project featuring responsive HTML, CSS, and basic JavaScript to help users find suitable pet care routines and matches.',
    detailedDescription:
      'A lightweight and responsive interactive web utility allowing pet owners and prospective adopters to discover tailored pet care schedules, nutrition recommendations, and breed care essentials.',
    iconType: 'code',
  },
  {
    id: 'marketing-project',
    title: 'Marketing Project',
    tag: 'Marketing',
    description:
      'Product marketing strategies and promotional ideas tailored for local consumer goods, focusing on digital engagement and branding.',
    detailedDescription:
      'End-to-end strategic marketing analysis for retail FMCG products, encompassing market segmentation, target customer archetypes, omnichannel promotional cadences, and ROI measurement metrics.',
    iconType: 'marketing',
  },
  {
    id: 'creative-artwork',
    title: 'Creative Artwork',
    tag: 'Artwork',
    description:
      'Explorations in digital art, typography posters, and harmonious color studies balancing elegance and modern visual storytelling.',
    detailedDescription:
      'A collection of digital artworks, minimalist editorial layouts, and pastel-themed typography posters celebrating modern aesthetics, color theory, and creative expression.',
    iconType: 'artwork',
  },
  {
    id: 'canva-design',
    title: 'Canva Design – Social Media',
    tag: 'Canva',
    description:
      'A collection of social media creatives, Instagram feed designs, and brand promotion templates made with Canva.',
    detailedDescription:
      'Curated set of 20+ Instagram carousel layouts, story templates, and promotional social media assets engineered for brand cohesion, audience retention, and visual flair.',
    iconType: 'canva',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'bba',
    degree: 'Bachelor of Business Administration (BBA)',
    major: 'Major in Marketing',
    statusBadge: 'Enrolled',
    badgeType: 'enrolled',
    description:
      'Focusing on modern consumer behavior, brand management, data analytics, and digital promotion channels.',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Sirajganj Government College',
    result: 'GPA 5.00 / 5.00',
    statusBadge: 'Year: 2023',
    badgeType: 'year',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sobuj Kanon School',
    result: 'GPA 5.00 / 5.00',
    statusBadge: 'Year: 2021',
    badgeType: 'year',
  },
  {
    id: 'ai-training',
    degree: 'AI (Artificial Intelligence) Training',
    statusBadge: 'AI 01 Batch',
    badgeType: 'batch',
    description:
      'Specialized practical hands-on training in AI tools, prompt craft, generative workflows, and web integration.',
  },
];
