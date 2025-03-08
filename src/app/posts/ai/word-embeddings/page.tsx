import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Code.Talks 2019: Using the Amazing World of Embeddings for Recommendations"
        publishedAt="2019-10-19"
        excerpt="Machine Learning, Neural Networks, Word2Vec, Doc2Vec... You know some of these words? Congratulations! You don't? Neither did I when we started experimenting with such technologies at Joblift. This was the first step of our journey towards creating a career advisor that offers personalized jobs based on how you act on our website."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <div className="aspect-w-16 aspect-h-9 my-8">
          <iframe
            src="https://www.youtube.com/embed/8Vo21HeF0fY"
            title="Using the Amazing World of Embeddings for Recommendations"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <p>
          Machine Learning, Neural Networks, Word2Vec, Doc2Vec... You know some
          of these words? Congratulations! You don&apos;t? Neither did I when we
          started experimenting with such technologies at Joblift. This was the
          first step of our journey towards creating a career advisor that
          offers personalized jobs based on how you act on our website.
        </p>

        <p>
          This talk will show how you can benefit from Machine Learning and that
          you&apos;re able to facilitate those benefits even with basic
          background knowledge. We will provide an overview on word embeddings
          as well as which problems we faced and with what points we still
          struggle.
        </p>

        <p>
          To do so we&apos;d like to guide you through the steps we took for
          getting closer to our vision; Starting with simple boosting on jobs
          having similar attributes like title and company, then using Doc2Vec
          for calculating similarity based on job descriptions and transferring
          that technique to learn embeddings from click histories to recommend
          jobs based on user behaviour.
        </p>

        <figure className="my-8">
          <img
            src="https://ellenschwartau.files.wordpress.com/2021/02/b759661d791d979c155f94099ed2eb56.jpeg"
            alt="Code Talks 2019: Using the Amazing World of Embeddings for Recommendations"
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-sm mt-2">
            Code Talks 2019: Using the Amazing World of Embeddings for
            Recommendations
          </figcaption>
        </figure>

        <p className="mt-4">
          <a href="https://www.youtube.com/hashtag/dontbeafraidtodomachinelearning">
            #dontbeafraidtodomachinelearning
          </a>
          ​{" "}
          <a href="https://www.youtube.com/hashtag/wordembeddingsareawesome">
            #wordembeddingsareawesome
          </a>
          ​{" "}
          <a href="https://www.youtube.com/hashtag/wejuststartedusingitinproduction">
            #wejuststartedusingitinproduction
          </a>
          ​{" "}
          <a href="https://www.youtube.com/hashtag/keepexperimenting">
            #keepexperimenting
          </a>
        </p>
      </div>
    </article>
  );
}
