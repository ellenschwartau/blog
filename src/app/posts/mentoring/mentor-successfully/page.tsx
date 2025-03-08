import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/mentoring/mentor-successfully",
  title: "Keys to Successful Technical Mentoring",
  date: "2023-09-20",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Mentoring", "Leadership", "Career Development"],
  excerpt:
    "Essential tips and strategies for being an effective technical mentor. How to guide and support others while fostering their growth in the tech industry.",
};

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Mentor Successfully"
        publishedAt="2022-11-29"
        coverImage="/assets/blog/mentor-successfully/image-10.png"
        excerpt="Being a Mentee is a wonderful experience if your Mentor is actively listening to what you say, shares personal experience and provides honest feedback. Someone, who doesn't tell you what to do, but helps you find the path yourself. Lots can go wrong in such a relationship. Achieving the overall goal of making the mentee figure out the answers highly depends on the questions you are using. Keep the following rules in mind when preparing the session."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <p className="italic">
          Originally created as part of the{" "}
          <a href="https://techsnack.orbitdigital.de/posts/mentor-successfully">
            Tech Snack blog provided by Orbit
          </a>
          .
        </p>

        <p>
          Being a Mentee is a wonderful experience if your Mentor is actively
          listening to what you say, shares personal experience and provides
          honest feedback. Someone, who doesn&apos;t tell you what to do, but
          helps you find the path yourself. Lots can go wrong in such a
          relationship, but it begins with having someone providing the
          opportunity to be mentored. This is where the{" "}
          <a href="https://rsvp.withgoogle.com/events/women-techmakers-women-mentorship-development-program">
            Google Mentor Development Program
          </a>{" "}
          comes into place:
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
          <p className="font-bold">About the program</p>
          <p>
            &quot;The Women Techmakers Mentor Development Program is a 5-week
            virtual program designed to empower women in tech to pursue
            mentorship opportunities through in-depth mentorship coaching,
            experience, and direct mentorship opportunities.&quot;
          </p>
        </blockquote>

        <p>
          I was fortunate to take part in that program. Despite me being unable
          to grow a long, grey beard I say <em>&quot;I am a Mentor&quot;</em>{" "}
          with confidence now. I want to share the main aspects I apply to my
          mentoring sessions that help make the sessions a success for both
          sides.
        </p>

        <p>
          Achieving the overall goal of making the mentee figure out the answers
          highly depends on the questions you are using. Keep the following
          rules in mind when preparing the session.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          The most important part is asking good questions
        </h2>

        <p>
          If you want to help your mentee figure out the solution to problems
          they are facing or the next step on the path on their own, you have to
          make them reflect by asking good questions. Don&apos;t worry,
          I&apos;ll provide qualitative example questions, but let&apos;s figure
          out the problems first:
        </p>

        <p>
          <strong>
            &quot;Why was is hard for you to face the situation?&quot;
          </strong>
          <br />
          The reasoning behind things is important to understand, but using the
          word WHY can feel judgemental and should be used with caution.
        </p>

        <p>
          <strong>&quot;Do you want to achieve XYZ?&quot;</strong>
          <br />
          The answer to this can be a short yes or no. We want to encourage
          dialogue - Open questions can help to do so. Avoid closed questions
          starting with WHO and WHEN make use of WHAT and HOW instead.
        </p>

        {/* TGROW model sections */}
        <figure className="my-8">
          <img
            src="https://ellenschwartau.files.wordpress.com/2022/11/image-2.png"
            alt="TGROW model"
            className="w-40"
          />
        </figure>

        <h3 className="text-2xl font-bold mt-6 mb-3">Topic</h3>
        <p>
          It is important to figure out what the <strong>TOPIC</strong> of the
          session is going to be. It helps me to prepare the resources I want to
          share and sets a direction for the session.
        </p>
        <p className="italic">
          What&apos;s the agenda for today? Which area of your career would you
          like to talk about?
        </p>

        <figure className="my-8">
          <img
            src="https://ellenschwartau.files.wordpress.com/2022/11/image-3.png"
            alt="Goals"
            className="w-40"
          />
        </figure>

        <h3 className="text-2xl font-bold mt-6 mb-3">Goals</h3>
        <p>
          Everyone can have different <strong>GOALS</strong> for a specific
          area.
        </p>
        <p className="italic">
          What do you want to achieve? How could you make this goal more
          specific? What would you do if you could not fail?
        </p>

        {/* Continue with Reality, Options, Will sections similarly */}

        <h2 className="text-3xl font-bold mt-8 mb-4">Summary</h2>
        <p>
          Mentoring sessions should not only be an open talk about some generic
          subject, instead you should carve out the <strong>topic</strong>. As
          soon as you define the <strong>goals</strong> your mentee aims for,
          you should perform a <strong>reality</strong> check to find out where
          your mentee is at. What are the <strong>options</strong> to actually
          target these objectives and which steps the mentee{" "}
          <strong>will</strong> take.
        </p>

        <p>
          Achieving the overall goal of making the mentee figure out the answers
          highly depends on the questions you are using. Keep the
          above-mentioned rules in mind when preparing the session.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p>
            Feel free to book a mentoring session with me using calendly:{" "}
            <a
              href="https://ellenschwartau.com/mentoring/"
              className="text-blue-600 hover:text-blue-800"
            >
              Mentoring
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
