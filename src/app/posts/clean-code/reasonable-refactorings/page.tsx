import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/clean-code/reasonable-refactorings",
  title: "Reasonable Refactorings: Making Code Better Step by Step",
  date: "2023-10-20",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Clean Code", "Refactoring", "Software Development"],
  excerpt:
    "Practical approaches to improving code quality through reasonable refactoring steps. Learn how to make your code more maintainable without breaking things.",
};

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Reasonable Refactorings"
        publishedAt="2022-04-16"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        coverImage="/assets/blog/reasonable-refactorings/screenshot-2022-04-19-at-19.54.33.png"
        excerpt='It was tough to be told "Do not refactor just to refactor" since I love clean, maintainable, and high-quality code. By now, I found ways to make space for refactorings in my day-to-day work. So, what are the cues to refactor code regularly, but in a reasonable way?'
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            <em>
              My personal challenge for this post: No googling whilst creating
              this talk,
              <br />
              to fill it with my personal experience only.
            </em>
          </p>

          <h4>The background story</h4>
          <p>
            I am prone to being a perfectionist. The cruel part about it: In a
            programmer's reality there is rarely time for <em>perfect</em> code.
            The good thing: There is no need for it as well. What's needed is a
            healthy amount of pragmatism. There are methodologies helping
            perfection-lovers become more pragmatic: For example, the 80/20 rule
            is a start to finding the balance between pragmatism and
            perfectionism.
          </p>

          <p>
            The downside: Imperfection leaves unfinished business. Despite
            trying to guess right when leaving things out, you can't get rid of
            the fact that you are skipping points - Meaning the list of possible
            improvements grows alongside the lifetime of a project. Talking to
            my former boss about how to get rid of that pile of imperfect code,
            growing in size and smell,{" "}
            <strong>she said "Do not refactor just to refactor"</strong>, which
            was a tough thing to hear at first. By now, I found ways to{" "}
            <strong>make space for refactorings in my day-to-day work</strong>{" "}
            to keep code maintainable and clean.{" "}
            <strong>
              So, what are the cues to refactor code regularly, but in a
              reasonable way?
            </strong>
          </p>

          <h4>What if you just don't refactor?</h4>
          <p>
            One way to deal with untidy code is to just leave it. But even if
            things once were neat and tidy, they tend to get entangled and messy
            over time. So this if not really an option.
          </p>

          <h4>What if you refactor too much?</h4>
          <p>
            The other extreme can become harmful as well: It leaves your Project
            Manager unhappy since no features get done. Besides your co-workers
            get unhappy since you introduce breaking changes and your code diffs
            become huge and illegible.
          </p>

          <h4>So, how to refactor?</h4>
          <p>
            To still make space for refactorings you should check the following
            points:
          </p>
          <ul>
            <li>
              Know <strong>when</strong> to refactor.
            </li>
            <li>
              Know <strong>how</strong> to refactor.
            </li>
            <li>
              Know when to <strong>stop</strong> refactoring.
            </li>
          </ul>

          <h5>WHEN to refactor</h5>
          <p>
            To decide whether to refactor I find it helpful to ask myself a
            couple of questions. The most important one: "
            <em>Do I understand this?</em>" No? Very likely others don't as
            well. Time to improve readability. In addition there are various
            Coding Patterns out there that can be translated into questions.
            E.g: "<em>Does this component fulfill exactly one purpose?</em>" No?
            Time to apply changes to fulfill Single Responsibility Principle.
            <br />"<em>Does a change take too much time?</em>" Do you e.g. need
            2 hours to change the color of your primary buttons? Sounds like
            your stylesheets got way too messy and should be refactored to make
            sure development speed goes back to normal.
          </p>

          <p>
            Next to these questions there are other very obvious indicators you
            can check by just looking at your code. E.g. repeated blocks should
            be reused or classes with too many lines of code should be split
            appropriately. Make sure that everything you can automate is, as an
            example you shouldn't fix code style manually.
          </p>

          <p>
            Coding Patterns help identify where code is not done right and
            knowing them is crucial. But what's even more helpful is practical
            experience: Over time you develop a gut feeling for where Code Smell
            is coming from. Your nose becomes finer the more expert knowledge
            you gain in practice and helps you stop the "odours" before they
            spread. Indicators can be the WTFs per time that pop up in your
            mind, or the bare feeling that this or that was done too complicated
            and should be done easier.
          </p>

          <p>
            But: Trust your colleagues - there might have been a good reason to
            add the complexity. Check for code comments and hints in the commit
            message. Make sure you understand the code you are editing (or at
            least know what it was meant to do once).
          </p>

          <h5>HOW to refactor</h5>
          <p>
            Once you figured it's time for a refactoring the success depends on
            how you perform it. First: Do it right away. I try to{" "}
            <strong>always leave the code cleaner than you found it</strong>.
            What helped me was to take it as a personal challenge. But don't
            freak out about it: Every change to existing code is a refactoring,
            no matter the scale. <em>Edit:</em>{" "}
            <strong>
              Every change to existing code, which aims to improve it, is a
              refactoring, no matter the scale
            </strong>
            . This can already be achieved by small changes: Actions like
            renaming, reordering and reusing code can be very impactful.
          </p>

          <p>
            And if there really is no time in that very moment (we all had to
            fix some fuckups in the live system... self-produced or not ;)) -
            Avoid creating separate tasks for the improvements. Once in the
            backlog they tend to stay there for a very long time. What works
            better is combining these with a user story since it helps
            prioritising the change, or leave a <em>// FIXME</em> comment in the
            code. The next person coming across the code may find time to fix
            it.
          </p>

          <p>
            Another thing: Huge refactorings are hard to understand. Break it
            down into smaller steps and implement them one by one. If that's for
            whatever reason not possible, review the changes separately during
            pair programming or via a standalone merge request. In both cases,
            you should use a separate commit to not mix it with feature-related
            changes and to keep the code diff readable.
          </p>

          <h5>STOP refactoring</h5>
          <p>
            If you follow the above guidelines there is one last important
            thing: Don't dive too deep into the rabbit hole. You need to stop
            refactoring at some point. What helps is defining multiple steps or
            working with a timebox.
          </p>

          <p>
            And make sure to understand:{" "}
            <strong>Good enough is good enough.</strong>
          </p>

          <h2>Questions & Answers</h2>
          <p>
            <em>
              Popped up during talks or discussions about this topic. The below
              answers are thus likely to be more elaborate or eloquent than the
              original ones ;-)
            </em>
          </p>

          <p>
            <strong>
              PyLadies Berlin Meetup: Do you have any tips for refactoring other
              people's code, for example when you are not familiar with it?
            </strong>
          </p>

          <p>
            Most importantly: Understand it. What I do is checking the commit
            message for notes or the link to a user story, which may give a bit
            of context. In best case the original author is still working for
            your company and you can ask them for elaboration and propose your
            changes. Or a product owner that provides an overview on a higher,
            user-oriented level. Programming in pair and doing Code Reviews also
            help to get familiar with unknown code, plus if your test coverage
            is good the tests make sure you won't break something... fingers
            crossed :D
          </p>

          <p>
            Sometimes code evolves to a point where no one can make sense of it
            (anymore). It may be time to throw away messy parts and rewrite
            functionality that makes sense from the current point of view ;)
          </p>

          <h2>Slides</h2>
          <ul>
            {[...Array(13)].map((_, i) => (
              <li key={i}>
                <img
                  src={`https://ellenschwartau.files.wordpress.com/2022/04/reasonable-refactorings-${
                    i + 1
                  }.jpg?w=960`}
                  alt={`Slide ${i + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
