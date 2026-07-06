// Core content types. Field names intentionally mirror a typical
// normalized CMS schema (articles, categories, authors, media) so this
// mock data layer can later be swapped for real Supabase queries with
// minimal changes to the components that consume it.

export interface Category {
  id: string;
  slug: string;
  name: string;
  group: 'national' | 'international' | 'societe' | 'autre';
  description: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[]; // paragraphs
  categorySlug: string;
  author: Author;
  publishedAt: string; // ISO
  readingTimeMinutes: number;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  breaking?: boolean;
  tags: string[];
  views: number;
  commentsCount: number;
}

export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  durationLabel: string;
  publishedAt: string;
  type: 'emission' | 'actualite' | 'reportage' | 'interview' | 'documentaire';
}

export interface PodcastEpisode {
  id: string;
  title: string;
  show: string;
  description: string;
  durationLabel: string;
  publishedAt: string;
  coverUrl: string;
}

export interface Show {
  id: string;
  slug: string;
  title: string;
  description: string;
  host: string;
  schedule: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  caption: string;
}
