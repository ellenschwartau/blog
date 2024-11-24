import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/types/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="h-50">
      {coverImage && (
        <div className="h-1/3 mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      )}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </section>
  );
}
