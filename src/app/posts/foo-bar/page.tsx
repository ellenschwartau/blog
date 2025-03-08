import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Foo Bar"
        publishedAt="2022-08-17"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <p>
          One thing I stumbled upon in my first job as a working student was the
          term <strong>foo bar</strong>. My mentor back then told me it was a
          fantasy word used as input value without meaning. Just recently I
          found out that wasn&apos;t true.
        </p>

        <p>
          In fact the usage he talked about was correct. But foo bar has
          it&apos;s origins in military and stands for:{" "}
          <em>
            <strong>fu</strong>cked <strong>u</strong>p <strong>b</strong>eyond
            <strong>a</strong>ll <strong>r</strong>ecognition
          </em>
          !
        </p>

        <p>
          Once you get tired of always using the same take a look at{" "}
          <a
            href="https://en.wikipedia.org/wiki/List_of_military_slang_terms#FUBAR"
            className="text-blue-600 hover:text-blue-800"
          >
            <strong>this list of acronyms for inspiration</strong>
          </a>
          . My favourite:{" "}
          <em>
            <strong>f</strong>ucking <strong>r</strong>idiculous{" "}
            <strong>e</strong>ating
            <strong>d</strong>evice
          </em>
          .
        </p>

        <p>Have fun!</p>
      </div>
    </article>
  );
}
