import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="object-contain"
      width={1300}
      height={330}
    />
  );
  return (
    <div className="h-full sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          <div className="h-full">{image}</div>
        </Link>
      ) : (
        <div className="h-full">{image}</div>
      )}
    </div>
  );
};

export default CoverImage;
