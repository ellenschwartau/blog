import { PageMetaData, PostMetaData } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const pagesDirectory = join(process.cwd(), "_pages");

export function getFileNames(directory: string) {
  return fs.readdirSync(directory);
}

export function getPageBySlug(slug: string) {
  return getBySlug<PageMetaData>(slug, pagesDirectory);
}

export function getPostBySlug(slug: string): PostMetaData {
  return getBySlug<PostMetaData>(slug, postsDirectory);
}

function getBySlug<T>(slug: string, directory: string): T {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as T;
}

export function getAllPosts(): PostMetaData[] {
  const slugs = getFileNames(postsDirectory);
  return (slugs || [])
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
export function getAllPages(): PageMetaData[] {
  const slugs = getFileNames(pagesDirectory);
  return (slugs || [])
    .map((slug) => getPageBySlug(slug))
    .sort((page1, page2) => (page1.title > page2.title ? -1 : 1));
}
