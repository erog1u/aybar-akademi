export interface ProgramItem {
  title: string;
  leaderNote?: string;
  description?: string;
  subjects: string[];
  featured?: boolean;
}

export interface ProgramCategory {
  id: string;
  code: string;
  shortTitle: string;
  title: string;
  tagline?: string;
  summary?: string;
  items: ProgramItem[];
}

// Metinler ve görseller site-content.json'dadır; /yonetim panelinden düzenlenir.
import data from "./site-content.json";

export interface SiteImage {
  src: string;
  alt: string;
}

export const homeContent = data.home;
export const siteImages: Record<keyof typeof data.images, SiteImage> = data.images;
export const founderMessage = data.founderMessage;
export const aboutContent = data.aboutContent;
export const programsIntro = data.programsIntro;
export const programCategories: ProgramCategory[] = data.programCategories;
export const educationModelContent = data.educationModelContent;
export const whyDifferentContent = data.whyDifferentContent;
