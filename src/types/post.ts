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
  url?: string; // TODO make mandatory once all were migrated
  ogImage?: {
    url: string;
  };
  preview?: boolean;
};
