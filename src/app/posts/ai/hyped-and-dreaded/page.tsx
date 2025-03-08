import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/ai/hyped-and-dreaded",
  title: "AI; Hyped and dreaded",
  date: "2023-04-16",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["AI", "Technology"],
  excerpt:
    "Is GPT-4 intelligent? According to Sebastien Bubeck the answer highly depends on your definition of intelligence. Just watched his talk where he shows if GPT-4 is intelligent according to his definition.",
};

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title={metadata.title}
        publishedAt={metadata.date}
        excerpt={metadata.excerpt}
        author={metadata.author}
      />

      <div className="prose prose-lg max-w-none">
        <p>
          Is GPT-4 intelligent? According to{" "}
          <a href="https://www.linkedin.com/in/ACoAAC_2G2kB0D5D-x5k-fdgmpJAT55-R0D2uoM">
            Sebastien Bubeck
          </a>{" "}
          the answer highly depends on your definition of intelligence. Just
          watched his talk where he shows if GPT-4 is intelligent according to
          his definition.
        </p>

        <p>
          Especially the comparison to ChatGPTs answers blew my mind in terms of
          what progress there was in a relatively short amount of time, plus the
          ability to make the AI use tools to provide a proper solution. Still,
          it lacks some aspects of my definition of intelligence (Sebastien
          Bubeck e.g. names it&apos;s inability to plan and limitations in real
          time learning).
        </p>

        <figure className="my-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/qbIk7-JPB2c"
              title="Recording of Sebastien Bubecks talks about Sparks of AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <figcaption className="text-center text-sm mt-2">
            Recording of Sebastien Bubecks talks about &quot;Sparks of AI&quot;
          </figcaption>
        </figure>

        <p>
          The evolution from ChatGPT to GPT-4 in a relatively short amount of
          time is stunning and makes me wonder, what more there is to come or
          even already existing, without the public being aware of it.
        </p>

        <p>
          AI is either hyped or feared these days. The ones who dread it came
          together and wrote
          <a href="https://futureoflife.org/open-letter/pause-giant-ai-experiments/">
            {" "}
            an open letter to pause giant AI experiments
          </a>{" "}
          for at least 6 months, which is signed by over 26k people (16th april
          2023); amongst those: Elon Musk. There were different reactions to
          that letter, e.g. by{" "}
          <a href="https://futureoflife.org/open-letter/pause-giant-ai-experiments/">
            Emily M. Bender
          </a>{" "}
          or the{" "}
          <a href="https://www.dair-institute.org/blog/letter-statement-March2023">
            DAIR institute
          </a>
          . I find it important to critically observe the usage of AI, but
          pausing it? In my eyes it should be more about providing transparent
          information about how an AI was rained, making sure that it is used in
          a non harmful way, and to educate end-users about what AI is and what
          it is not. Just last week I told a colleague, that the information
          provided by in that case ChatGPT is not true, just because it is
          provided my a machine learning algorithm. Definitely a new source for
          fake news, if you take those outputs at face value.
        </p>

        <p>
          Besides hyping AI, we should also talk about introducing obligatory
          watermarks for AI-generated media as well as answering the question
          who can be held accountable for what an AI produces. How are we able
          to prevent the reproduction of bias and oppression based on an AIs
          training data and how do we make sure, that our information system is
          not corrupted?
          <strong>What do you think?</strong>
        </p>
      </div>
    </article>
  );
}
