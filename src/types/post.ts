import { type Author } from "./author";

export type PageMetaData = {
  slug: string;
  title: string;
  coverImage?: string;
  excerpt: string;
  content: string;
};

export type PostMetaData = {
  date: string;
  author: Author;
  excerpt: string;
  url: string;
  tags: string[];
  language: string;
  title: string;
};
