export type Category = 'Project' | 'Experience' | 'Education' | 'Certification' | 'Skill' | 'Contact' | 'Profile';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // Optional preview video
  techStack: string[];
  match: number; // e.g., 98% Match
  year: string;
  duration?: string;
  genre: string[];
  category?: Category;
  link?: string; // For external links (Contact, Project URLs)
  icon?: string; // URL for the skill icon
  color?: string; // Tailwind gradient classes for the card background
}

// Experience is now merged into Project for visual consistency, 
// but we keep the type export for backward compatibility if needed, 
// though we primarily use Project now.
export interface Experience extends Project {}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isKid?: boolean;
}