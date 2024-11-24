import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import Alert from "./_components/alert";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1);

  const author = {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  };
  const excerpt =
    "I recently attended We Are Developers and took the opportunity to gather insights in the field of web security; An area where I definitely lack knowledge, even though I consider it our responsibility as developers to build secure applications. 🔐 I decided to delve deeper into the topic; here's what I learned today.";
  return (
    <main>
      <Container>
        <Alert />
        <Intro />
        <HeroPost
          title="First Thoughts on Web Security"
          coverImage="/assets/blog/web-security/web-security-talk.JPG"
          date="2023-08-18"
          author={author}
          slug="web-security/first-thoughts"
          excerpt={excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
