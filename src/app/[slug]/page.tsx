import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages, getPageBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Alert from "../_components/alert";
import Container from "../_components/container";
import Header from "../_components/header";
import { PostBody } from "../_components/post-body";
import { PostHeader } from "../_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const page = getPageBySlug(params.slug);

  if (!page) {
    return notFound();
  }

  const content = await markdownToHtml(page.content || "");

  return (
    <main>
      <Alert />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={page.title}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const page = getPageBySlug(params.slug);

  if (!page) {
    return notFound();
  }

  const title = `${page.title} | Ellens Blog`;

  return {
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  return getAllPages().map((page) => ({
    slug: page.slug,
  }));
}
