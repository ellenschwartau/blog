import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/spicy-communication",
  title: "Spicy Communication in Tech Teams",
  date: "2023-11-30",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Communication", "Team Work", "Soft Skills"],
  excerpt:
    "Handling challenging conversations and conflicts in tech teams. Strategies for effective communication when things get heated.",
};

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="No-brainers to spice-up your communication"
        publishedAt="2023-01-06"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        coverImage="/assets/blog/communication/headerbild-remote-communication-blogartikel-28.png"
        excerpt="The way you communicate is key to convey your thoughts and be heard. By applying these tips you can improve your communication in (almost) no time. Curious?"
      />

      <div className="max-w-2xl mx-auto">
        <p className="italic mb-4">
          Originally created as part of the{" "}
          <a
            href="https://techsnack.orbitdigital.de/team-members/ellen-schwartau"
            className="text-blue-600 hover:underline"
          >
            Tech Snack blog provided by Orbit
          </a>
          .
        </p>

        <p className="mb-4">
          I am confident that we all remember a presentation that was
          interesting topic wise, but you were simply unable to follow the
          person speaking. Communication is an essential tool to make your
          points stick in people's minds.
        </p>

        <p className="mb-4">
          The following tips are easy to adapt in your day to day work,
          especially when being in a virtual call. Before you read, perform this
          quick exercise to measure their impact directly:
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
          <p className="italic mb-2">
            Record a quick video of yourself answering the following questions:
          </p>
          <p className="italic mb-2">
            - Who are you and what's your profession?
            <br />
            - What does your normal day look like?
            <br />- What is a topic you are passionate about?
          </p>
          <p className="font-bold">
            EXERCISE TO MEASURE THE DIFFERENCES THESE SMALL ADAPTIONS ACTUALLY
            MAKE
          </p>
        </blockquote>

        <p className="mb-4">
          My communication training at{" "}
          <a
            href="https://pitchingninja.com/"
            className="text-blue-600 hover:underline"
          >
            Pitch Ninjas
          </a>{" "}
          started off with this video. I had to watch my own recording again,
          first without and then with audio, answering the questions "Do I
          believe the person?" and "Does anything surprise me?". Some aspects
          actually took me by surprise about my mimic when watching it without
          sound, so definitely worth the exercise.
        </p>

        <h3 className="text-3xl mt-8 mb-4 font-bold">
          What went well on first try
        </h3>
        <p className="mb-4">
          Yep, this is me, taking the exercise myself. The good parts: My gaze
          is directed to the camera, keeping eye contact with my imaginary
          conversational partner. It takes a bit of training during virtual
          calls, but you could start by facing the camera from time to time.
        </p>

        <figure className="my-6">
          <img
            src="https://ellenschwartau.files.wordpress.com/2023/01/first-shot.png?w=1024"
            alt="Yep, this is me, doing the exercise myself."
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            Yep, this is me, doing the exercise myself.
          </figcaption>
        </figure>

        <p className="mb-4">
          In addition, my position is pretty good. My upper body (chest upwards)
          is fully visible and there is an appropriate amount of space over my
          head. You can use your own hand to check it.
        </p>

        <h3 className="text-3xl mt-8 mb-4 font-bold">Things to improve</h3>
        <p className="mb-4">
          Besides what went well, there are a couple of things worth some
          attention. For starters, the lighting isn't optimal: I mostly rely on
          natural light originating from a window. If one is having lots of
          calls it may be worth investing in two lights you could position left
          and right from your face to avoid shadows. The scene can benefit from
          neutral lighting instead of the yellow warmth in my example.
        </p>

        <p className="mb-4">
          Another point of improvement is my background: Although I personally
          use the bike for kicking off smalltalk, it is indeed a bit
          distracting. Your background shouldn't be completely clean either, but
          non-disturbing. You can use elements like a tidy bookshelf to bring in
          a personal touch.
        </p>

        <p className="mb-4">
          My body position is good, but my posture is not: My shoulders are
          lifted and sloped. To appear more energised you can make use of the
          "Power Posture": Slide to the edge of your chair, straighten your back
          and pull down your shoulders. Your hands may be placed on your legs or
          the desk in front of you. This affects how you feel as well and, by
          that, influences your appearance positively. Give it a go now.
        </p>

        <p className="mb-4">
          Once your setup is complete, you can make your talk more engaging by
          involving your hands using gestures directed to your camera. To get a
          grasp on the impact, compare yourself listening to someone sitting
          still to someone using their hands. You may need to remind yourself of
          using hand gestures to underline what you're saying, but after some
          time it starts feeling more natural to you.
        </p>

        <h3 className="text-3xl mt-8 mb-4 font-bold">
          Actions you can take now
        </h3>
        <p className="mb-4">
          The tips described so far are pretty easy to adapt. Of course your
          content relies heavily on{" "}
          <strong>
            <em>what</em>
          </strong>{" "}
          you say and more importantly{" "}
          <strong>
            <em>how</em>
          </strong>{" "}
          you say it. Starting with being aware of your pace, e.g. by actively
          using pauses, followed by storytelling and the usage of metaphors.
          There are different frameworks for structuring what to say upfront,
          e.g. the <em>"Problem, Solution, Benefit"</em>-model or the{" "}
          <em>"Think, Feel, Do"</em>-framework. You may want to give them a read
          to leverage your communication further.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
          <p className="italic mb-2">
            The advantage of the tips mentioned above is the ability to
            implement them without any further ado. Take your time and retake
            the video, keeping them in mind:
          </p>
          <p className="mb-2">
            - <em>Be aware of your position and posture</em>
            <br />- <em>Take care of good lighting</em>
            <br />- <em>Have a non-disturbing background</em>
            <br />- <em>Make eye contact</em>
            <br />- <em>Use hand gestures whilst speaking</em>
          </p>
          <p className="font-bold">
            SUMMARY OF NO-BRAINERS TO IMPROVE YOUR COMMUNICATION IN (ALMOST) NO
            TIME
          </p>
        </blockquote>

        <p className="mb-4">
          Now, compare it with the video you took upfront. What do you think?
        </p>
      </div>
    </article>
  );
}
