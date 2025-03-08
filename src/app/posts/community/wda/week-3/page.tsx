import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/community/wda/week-3",
  title: "We Are Developers Academy: Week 3 - Building Momentum",
  date: "2023-11-22",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Community", "Education", "WDA"],
  excerpt:
    "Third week at WDA showcases our growing capabilities. Working on complex projects and learning to tackle real-world development challenges.",
};

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Women Developer Academy - Woche 3"
        publishedAt="2022-02-26"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        excerpt="Die Wochen des Inputs sind vorbei. Nächste Woche gilt es das Gelernte in einer Live Speaking Practice unter Beweis zu stellen. Hier sind die Take Aways aus Woche drei."
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            Die Wochen des Inputs sind vorbei. Nächste Woche gilt es das
            Gelernte in einer Live Speaking Practice unter Beweis zu stellen.
          </p>

          <p>👇🏻 Shortcuts👇🏻:</p>
          <ul>
            <li>
              <a href="#mentoring">Second Mentoring Session</a>
            </li>
            <li>
              <a href="#contributions">Ways of Community Contributions</a>
            </li>
            <li>
              <a href="#marketing">Marketing Yourself</a>
            </li>
            <li>
              <a href="#sneak-peek">Sneak Peek</a>
            </li>
          </ul>

          <p>
            Du hast den Anfang verpasst? Hier geht's zu den vorherigen Wochen:
            <br />
            👉🏽{" "}
            <a href="https://ellenschwartau.com/2022/02/05/women-developer-academy-woche-0/">
              Woche 0
            </a>
            <br />
            👉🏽{" "}
            <a href="https://ellenschwartau.com/2022/02/13/wda-week-1/">
              Woche 1
            </a>
            <br />
            👉🏽{" "}
            <a href="https://ellenschwartau.com/2022/02/19/wda-week-2/">
              Woche 2
            </a>
          </p>

          <h5>Montag, 21.02.2022</h5>

          <h2>Mentoring Session</h2>
          <p>
            Eine Weitere 1:1 Session mit Jad. Er musste mir Rede und Antwort
            bzgl. des Bewerbungsverfahrens zum Google Developer Expert Program
            stehen. Wahrscheinlich versuche ich einfach mal mein Glück. Ein Nein
            habe ich ja schon.
          </p>

          <h5>Dienstag, 22.02.2022</h5>

          <h2>
            Ways of Community Contributions (Blogposts, Podcasts, Tutorials,
            YouTube)
          </h2>
          <p>
            <em>
              "Being an important and influential part of the developer
              ecosystem doesn't stop with speaking opportunities - writing
              blogposts and creating content is another step."
            </em>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/martina-kraus-398493108/">
              Martina Kraus, Google Developer Expert Angular & Web-Technologies
            </a>
            , hat uns Einblicke in die verschiedenen Arten der Contributions
            gegeben. Ich hätte mir ein bisschen mehr Input darüber gewünscht,
            wie sich die verschiedenen Medien unterscheiden: Wie bereitest du
            Inhalte für einen Talk auf? Welche Unterschiede ergeben sich aus der
            Veröffentlichung eines Blog Posts? Was macht man anders in einem
            Video? Und woraus achtest du am besten bei einem Podcast? Das werde
            ich wohl für mich selbst rausfinden müssen. Der Inhalt war trotzdem
            wertvoll.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              <strong>Research Efficiently</strong>
              <br />
              Recherchiere, aber ohne ins Rabithole abzusteigen. Nutze externe
              Links, um Fakten aus deinem Vortrag zu unterstreichen.
            </li>
            <li>
              <strong>Create a table of content</strong>
              <br />
              Hier geht's nicht um eine Folie mit Inhaltsverzeichnis, sondern es
              handelt sich um eine Methode, um deinen Inhalt zu strukturieren:
              Erstelle z.B. erstmal Überschriften zu den Themenbereichen, die
              abgedeckt werden sollen. Die Folien oder Paragraphen kannst du
              anschließen frei verschieben, um einen roten Faden in deinen
              Vortrag zu bringen.
            </li>
            <li>
              <strong>Edit after writing</strong>
              <br />
              Der Feinschliff kann später erfolgen. Wenn du im Fluss bist,
              solltest du vor allem eines tun: Schreiben. Die Eloquenz kannst du
              auch später in die Sätze treiben.
            </li>
          </ul>

          <h5>Donnerstag, 24.02.2022</h5>

          <h2>Marketing Yourself As A Speaker/Contributor</h2>
          <p>
            <em>
              "Learn how to find your uniqueness to highlight in your speaker
              bio and CV."
            </em>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/maria-grazia-frontoso-6803bb5/">
              Dr. Grazia Frontoso, Customer Engineering Manager,
            </a>{" "}
            hat uns einige Tips im Speaker-Marketing und Verfassen guter
            Proposals für Talks mitgegeben. Am hilfreichsten waren ihre
            konkreten Beispiele von Abstracts, die wir diskutierten und die
            gelernten Stichpunkte direkt in die Tat umsetzen konnten.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              Schreib ein Proposal, bei dem es nicht um dich sondern um die
              Zuhörer geht.{" "}
              <strong>Warum sollten sie dir ihre Zeit schenken?</strong> Der
              Punkt hilft außerdem beim Zusammenstellen der Inhalte:{" "}
              <strong>
                Was erwartet die Audience in deinem Vortrag zu lernen?
              </strong>{" "}
              Durch aktive Sätze kannst du direkt deine Zuhörer ansprechen:
              Nutze anstelle der Formulierung <em>"I am going to show you"</em>{" "}
              zum Beispiel <em>"You will learn..."</em>. In der Diskussion
              offenbarte sich, dass die Bewertung von Texten stark vom eigenen
              Geschmack abhängt. Ein Grund mehr eine Ablehnung nicht persönlich
              zu nehmen.
            </li>
            <li>
              <strong>In der Kürze liegt die Würze:</strong> Lange Blog-Beiträge
              werden eher gelesen, wenn du sie in mehrere aufteilst. Auch bei
              Vorträgen von mehr als 20 Minuten wirst du dir kleine Tricks
              überlegen müssen, um die Aufmerksamkeit deiner Zuhörerschaft zu
              behalten: Binde zum Beispiel mal eine weiße Slide ein, damit alle
              wieder zuhören oder stelle eine simple Frage, um ihre
              Aufmerksamkeit wieder auf dich zu ziehen. Bei komplexen Themen
              hilft auch ab und zu mal eine kleine Pause 💆🏻
            </li>
            <li>
              <strong>
                Du willst unbedingt einen Talk auf einer Konferenz halten?
              </strong>{" "}
              Nichts hält dich davon ab, mehrere Abstracts einzureichen und so
              deine Chancen zu erhöhen 😉
            </li>
          </ul>

          <h2>Sneak Peek</h2>
          <p>
            Das Thema meiner Präsentation steht:{" "}
            <strong>"Reasonable Refactorings"</strong>. Ich habe mir selbst eine
            Challenge gestellt: Die grobe Präsentation ohne Googel befüllen. Mal
            sehen, welche Learnings mir zu dem Thema als erstes in den Sinn
            kommen.
          </p>

          <hr />

          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://events.withgoogle.com/women-developer-academy-europe/#content">
                Übersicht über das Programm
              </a>
            </li>
            <li>
              <a href="https://events.withgoogle.com/women-developer-academy-europe/schedule-v1/#content">
                Schedule
              </a>
            </li>
            <li>
              <a href="https://events.withgoogle.com/women-developer-academy-europe/mentors--speakers/#content">
                Mentoren & Sprechende
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
