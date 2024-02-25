import { type Author } from "./author";


export type Page = {
  slug: string;
  title: string;
  coverImage?: string;
  excerpt: string;
  content: string;
};


export type Post = Page & {
  date: string;
  author: Author;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  preview?: boolean;
};
