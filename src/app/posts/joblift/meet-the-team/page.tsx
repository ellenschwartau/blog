import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Meet the Team: Ellen, Software Developer at Joblift"
        publishedAt="2018-07-26"
        excerpt='Meet Ellen, a developer and one of the "oldest" Joblifters – she has been part of the company since (almost) the very beginning and supports the tech team in Hamburg.'
        coverImage="/assets/blog/meet-the-team/hero.png"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <p className="italic">
          This post was originally published as part of the{" "}
          <a href="https://joblift.co.uk/career-insider/meet-the-team-joblift-developer/">
            Joblift Blog
          </a>
          .
        </p>

        <p>
          <strong>
            Meet Ellen, a developer and one of the "oldest" Joblifters – she has
            been part of the company since (almost) the very beginning and
            supports the tech team in Hamburg.
          </strong>
        </p>

        <figure className="my-8">
          <img
            src="https://ellenschwartau.files.wordpress.com/2021/02/824425e9ab9fbb609cb1a9130508c33b.jpeg"
            alt="Meet the Team: Ellen, Software Developer at Joblift"
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-sm mt-2">
            Meet the Team: Ellen, Software Developer at Joblift
          </figcaption>
        </figure>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          What is your job title and how long have you worked at Joblift?
        </h3>
        <p>
          I&apos;m a Software Developer and started in December 2015 as a
          working student. After finishing my Master&apos;s thesis in
          cooperation with Joblift, I joined full-time in October 2016. So,
          it&apos;s been almost three years now, which is a pretty long time for
          a startup employee. In fact, my boss once called me a "Joblift
          dinosaur".
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          What is the most challenging part of your job?
        </h3>
        <p>
          Software Development is a very fast moving industry. What is valid now
          may no longer be in a couple of months. In my line of work, it would
          be more appropriate to say "state of the moment" than "state of the
          art". On the one hand, constantly leaving your comfort zone is a big
          challenge, but on the other hand this is what makes Software
          Development such an interesting field: there is always something new
          to discover.
        </p>

        <p>
          Another challenge is bridging the gap in perspective between users and
          developers: What seems intuitive to you as a developer might be the
          complete opposite for someone else. Finding out what end users want
          and transferring that into a usable feature that works from a UX
          perspective is a problem that will always pop up.
        </p>

        <p>
          Besides that, we (as a company) are facing the typical challenges of a
          growing startup: At first, it was quite easy to keep track of what
          happened in the company, what features were developed and which parts
          of our software architecture were responsible for the corresponding
          functionality. Now, with nearly 20 developers, this has become nearly
          impossible. As a consequence our daily work must be done in smaller
          teams and structured by processes. Additionally, knowledge and
          information have to be actively distributed.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          What gets you out of bed in the morning?
        </h3>
        <p>A hot cup of coffee! Or two.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          What did you want to be when you were a child and to what extent does
          your position at Joblift match this idea?
        </h3>
        <p>
          As a child I never had a concrete plan as to what I wanted to be, but
          I had lots of different ideas – none of them lasted long. Indeed,
          studying Software Development was more like an "accident", but it
          turned out I really enjoy it, and can even find some aspects of my
          childhood dream jobs in my current profession. For example:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>
            An <strong>interpreter</strong>, as well as a developer, needs to
            learn lots of different languages: Each programming language has its
            own kind of grammar and syntax.
          </li>
          <li>
            Who didn&apos;t want to be Sherlock Holmes as a child? Well, I did.
            And sometimes when hunting, finding and fixing a bug, you somehow
            feel like a <strong>detective</strong>. And you&apos;re never truly
            complete without having good team members like John Watson!
          </li>
          <li>
            And last but not least: <strong>architects</strong> or{" "}
            <strong>cabinet maker</strong>. Of course, as a developer, you do
            not design buildings or furniture – but designing software
            architecture and planning how to build it is a big part of your job.
            Based on an idea or feature request you create a concept, and then
            implement and test it. After providing it to our users, we can see
            the results on our website and how exactly it is used.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          If you were a Disney character, which one would you be?
        </h3>
        <p>
          Cheshire Cat – a bit weird (hopefully in a funny way), sarcastic and
          accommodating.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          What do you like best about working at Joblift?
        </h3>
        <p>
          I like the atmosphere at Joblift: It&apos;s a young and evolving
          company. The youth is for sure based on the fact that Joblift was
          founded just a couple of years ago, but we&apos;re also quite young
          from a demographic point of view. This means that we might have a
          higher turnover rate, but at the same time there is constantly someone
          bringing in fresh ideas.
        </p>

        <p>
          As I already said we are facing some normal organisational challenges,
          but this gives you the chance to influence processes, collaboration
          and company culture. For me, this is very valuable because one does
          not always have the opportunity to shape the company you work for.
        </p>
      </div>
    </article>
  );
}
