import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Accidental pun of words with git commands"
        publishedAt="2022-01-28"
        coverImage="/assets/blog/accidental-pun-of-words/untitleddesign_1_original_jcm0te0ikid.png"
        excerpt="I love pun of words. Especially the bad ones. In my day to day life I use git as version control and find myself laughing about some of my typos. I started collecting the ones that made me giggle. By chance it is your taste of humor."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <p>
          I love pun of words. Especially the bad ones. In my day to day life I
          use <strong>git</strong> as version control and find myself laughing
          at some of my <strong>typos</strong>. I started collecting the ones
          that <strong>made me giggle</strong>. By chance it is your taste of
          humor. Enjoy 🤓
        </p>

        <p>In case you reaaaaally need your code to work:</p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            🙏🏻 [2021-11-09] {">"} git commit --amen // git commit --amend
          </code>
        </pre>

        <p>
          Suitable for when you did the mightiest code change of &apos;em all:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            👸🏻 [2021-12-13] {">"} god push --force // git push --force
          </code>
        </pre>

        <p>This is my favourite one and kind of made me publish this post:</p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>🤮 [2022-01-27] {">"} git vommit // git commit</code>
        </pre>

        <p>It took a while, but here is another one:</p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>😭 [2022-06-21] {">"} git sad // git add</code>
        </pre>

        <p>Aaaaand it happened again.. only working on hot stuff.</p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>🔥 [2022-09-12] {">"} hot push -u // git push</code>
        </pre>

        <p>First pun in 2023 🥁🥁🥁</p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>👌🏻 [2023-02-10] {">"} git logo // git log</code>
        </pre>

        <p>
          <strong>
            Some addition needed to follow why my head found that a nice pun:
          </strong>{" "}
          Add some proper emphasis and punctuation (<strong>git? logo!</strong>
          ), plus a bit of german knowledge: &quot;Na logo!&quot; is a phrase
          expressing your commitment about something, similar to &quot;Oh
          well!&quot;, &quot;Fair enough&quot; or &quot;So what&quot;. With the
          difference that &quot;Na logo!&quot; is positively framed, showing
          approval and sometimes shouted with thrill of ecstasy. Or is there a
          better choice for version control?! Doubt it. 😏
        </p>

        <p>There is more to come. Promise. 🤞🏻</p>
      </div>
    </article>
  );
}
