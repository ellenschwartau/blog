import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/women-in-tech/the-good",
  title: "The Good Side of Women in Tech",
  date: "2023-12-01",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Women in Tech", "Diversity", "Success Stories"],
  excerpt:
    "Celebrating the positive changes and success stories of women in the tech industry. Highlighting achievements and progress in creating a more inclusive tech world.",
};

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="The Good Parts of Being a Woman in Tech"
        publishedAt="2021-03-05"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        excerpt="The disadvantages women face at work are numerous and not only based on biological facts, like the temporal pause during and after pregnancy. Even if IT is a very open-minded industry and negative aspects therefore aren't as prominent, they still appear. That's not necessary. For a change we want to look at what advantages there are, since these exist as well!"
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            <em>
              This post was originally published as part of{" "}
              <a href="https://techsnack.orbitdigital.de/posts/the-good-parts-of-being-a-woman-in-tech">
                Tech Snack Blog provided by Orbit Digital.
              </a>
              <br />
              It is{" "}
              <a href="https://ellenschwartau.wordpress.com/2021/02/19/example-post-3/">
                also available in German
              </a>
              .
            </em>
          </p>

          <figure>
            <img
              src="https://ellenschwartau.files.wordpress.com/2021/03/d08c94bf71138a98cb609ea7f3aba700.jpeg?w=750"
              alt="Blog Post: The Good Parts of Being a Woman in Tech"
            />
            <figcaption>
              Blog Post: The Good Parts of Being a Woman in Tech
            </figcaption>
          </figure>

          <p>
            Yep, women in average get paid less. Yep, women need to prove their
            value, whereas white, middle-aged men only lose their attributed
            competence if they slip up. Yep, women get catcalled at work. Things
            like "Smile for me, sweety!", "Are you always that bossy?" or "Are
            boobs distracting while typing?" are pretty harmless examples.
          </p>

          <p>
            The disadvantages women face at work are numerous and not only based
            on biological facts, like the temporal pause during and after
            pregnancy. Even if IT is a very open-minded industry and negative
            aspects therefore aren't as prominent, they still appear. That's not
            necessary; As a matter of fact more than 40% of women change their
            field of work due to the negative criteria after seven years of work
            in Tech.1 For a change, let's look at the advantages of being a
            woman instead of the negatives!
          </p>

          <h4>The reasoning behind this post</h4>
          <p>
            My intention is not for everything "to stay as it is". Even if many
            of the mentioned advantages arise due to women being a minority, I
            believe in an equal workplace. Diverse teams work that well due to
            their diversity. This post should serve as a motivation, lower
            concerns and hopefully encourage some who think about working in
            Tech to take the first step or to stay the course.
          </p>

          <h4>Lets get to the topic</h4>
          <p>
            Employing women holds numerous advantages from an employers point of
            view. There is a more balanced working atmosphere and the magnetic
            attraction of further female colleagues, since people of the same
            kind stick together. Women for whom a predominantly male working
            environment may seem daunting, hurdles diminish and further women
            come along as potential candidates via the network.
          </p>

          <p>
            Instead of the positive aspects from a companies perspective, today
            it should be about those for the female individual itself. To
            clarify, I don't represent the ultimate opinion of all women due to
            the huge variance in subjective perception. Some women have never
            had bad experiences in the workplace and others undergo negative
            incidents on a daily basis. Others lie in between these spaces where
            they have never experienced upsetting situations, but they may not
            be able to name positive moments either.
          </p>

          <h4>So, be ready for my very personal opinion:</h4>
          <p>
            Software development is filled with critics and cynics doubting our
            abilities. Some are scared off by that, but for others it awakens
            the fighting spirit. The opportunity to prove the idiots wrong makes
            us work as hard as we can. And even if these voices aren't arising
            from the outside, we may have this tiny disbeliever inside us saying
            "God damn it, I'll screw up". We'll silence this dickhead by showing
            unshakable discipline and the will to prove others, but first and
            foremost ourselves, wrong. This builds up our resistance and enables
            us to tackle challenges courageously, since we already proved
            ourselves that we can cope with them.
          </p>

          <p>
            Scepticism if only one of the obstacles facing us. Being part of a
            minority, we are confronted with lots of challenges, but we can find
            solace in this statement: combatants reach out their hands instead
            of their elbows. Though we might not have much in common, we are
            united in our gender and profession. A <em>Gemeinschaft</em> (german
            for: community) that is everything but <em>gemein</em> (german for:
            cruel).2 On the contrary, helpfulness is accompanied by mutual
            support. In fact, there are collectives like{" "}
            <a href="https://www.meetup.com/Women-In-Tech-Nottingham">
              Women in Tech
            </a>{" "}
            or <a href="https://www.meetup.com/PyLadies-Hamburg">PyLadies</a>,
            that offer a safe space for women to discuss and share knowledge.
          </p>

          <p>
            Meet Ups aren't the only social events offering advantages.
            Conferences are another great way for women to further their careers
            and network with others. There are special offers for minorities and
            you are actively invited to participate as speaker. I prefer gender
            neutral applications, but because the tech industry is largely made
            up of men, anonymous applications are not enough to adequately
            represent women. This is why I believe positive discrimination is
            not only beneficial, but necessary. It also allows women to visit
            discussions and events for free and to serve as a role model for
            other women.
          </p>

          <p>
            If public speaking makes you sweat just thinking about it. don't
            worry, put your mind at ease with these thoughts. Lots of small
            steps and actions can make a huge difference. Precisely due to the
            fact that we are a minority, we can actually change things. My
            former university named its lectures rooms after famous scientists.
            All of them were males without exception. A fellow student brought
            this to the attention and now women are considered as well. BAM!
            World improved! I am certain there are things in your everyday life
            that may have huge impact. Paying attention to the world around you
            and having your voice heard, for you and others, can make the world
            a better place.
          </p>

          <p>
            Whereas these (more or less) known female scientists had to fight
            hard in their past, the working environment of Tech is pretty
            enjoyable these days. As a tech employee you are wooed by potential
            corporate suitors. Sometimes it feels as if employers are competing
            to get you on board at their company. In their bid to employ you,
            they offer loads of benefits from paying your Netflix subscription
            to special deals for sports memberships (which is very useful when
            you need to get rid of all the extra calories due to the
            never-ending supply of lemonades and beer). Necessity is the mother
            of invention. On top of all that. there is also a good
            work-life-balance resulting from the employee-friendly state of the
            market. Flexible working times and hours offer mothers (and fathers)
            a more manageable route to return to work after parental leave.
          </p>

          <p>
            Needless to say the above mentioned advantages are valid for men as
            well, but women are sought after due to being a relative rarity in
            the industry. Women are often offered additional benefits like
            obtaining more interviews with prospective employers where
            successful employment dan arise. At least this is the case when
            there is an awareness of the discrimination of women and the
            positive influence a diverse team can bring to the workplace. When a
            company has no women on its team and two equally qualified
            applicants apply for a new role, the woman is likely to land the
            job. Even it that successful candidate is not better suited for the
            job from an experience or skills point of view, women boast other
            qualities that fill an otherwise existing gap. For example, women
            often possess more empathy. If the team respects women in leading
            positions, this trait may smooth the way towards management. Tech in
            general is a very open-minded field, therefore discrimination due to
            gender by comparison rarely happens. In contrast, job offers for
            leadership positions aren't as uncommon. An amplifying effect on
            that certainly is the figurehead "we have women in leading
            positions" or the women's quota. I may come back to discussing the
            necessity and the comparison to the quota of people with
            disabilities another day.
          </p>

          <h4>tl;dr: The good in short</h4>
          <p>
            I tend to talk quite verbose, see the most important aspects
            summarised below:
          </p>
          <ul>
            <li>
              There is a proper baseline for negotiations, which sets the
              foundation for perfectly wonderful working conditions, e.g.
              flexible working hours.
            </li>
            <li>
              As an orchid amongst all the flowers you are remembered, potential
              barriers for job interviews are lowered and job offerings are more
              like a rule than the exception.
            </li>
            <li>
              Often there are reductions for attending conferences and it's
              easier to obtain speaking opportunities.
            </li>
            <li>
              Your gender offers an alliance:
              <br />
              Welded together by the feeling of belonging together, you benefit
              from supporting each other and help can be found where help is
              needed.
            </li>
            <li>
              We can change things because there is a lot to change; small
              actions and steps may even change the world.
            </li>
            <li>
              The environment builds fortitude, encourages quick-wittedness and
              develops the courage to tackle challenges.
            </li>
          </ul>

          <h4>Before I forget:</h4>
          <p>
            If non of the above applies to you, here is one final thought:
            Toilets have shorter lines at tech events and you'll get a mostly
            private bathroom with exclusive access at work. Now that's
            happiness!
          </p>

          <h2>Notes</h2>
          <p>
            [1] Statistic from:{" "}
            <a href="https://medium.com/tech-diversity-files/if-you-think-women-in-tech-is-just-a-pipeline-problem-you-haven-t-been-paying-attention-cb7a2073b996">
              "If you think women in tech is just a pipeline problem, you
              haven't been paying attention"
            </a>
            <br />
            [2] This pun only works in german
          </p>
        </div>
      </div>
    </article>
  );
}
