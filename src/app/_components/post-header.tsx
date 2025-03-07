import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/types/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  excerpt?: string;
  coverImage?: string;
  publishedAt?: string;
  lastEditedAt?: string;
  author?: Author;
};

export function PostHeader({
  title,
  excerpt,
  coverImage,
  publishedAt,
  lastEditedAt,
  author,
}: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {author && <Avatar name={author.name} picture={author.picture} />}
      {publishedAt && (
        <div className={lastEditedAt ? "" : "mb-6"}>
          <DateFormatter dateString={publishedAt} />
        </div>
      )}
      {lastEditedAt && (
        <p className="text-sm text-gray-600 mb-6 italic">
          Last edited: <DateFormatter dateString={lastEditedAt} />
        </p>
      )}
      {excerpt && (
        <div className="prose prose-lg max-w-none mb-6">
          <p>{excerpt}</p>
        </div>
      )}
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
    </>
  );
}
