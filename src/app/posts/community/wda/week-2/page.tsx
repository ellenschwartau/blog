import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Women Developer Academy - Woche 2"
        publishedAt="2022-02-19"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        excerpt="Die zweite Woche der Women Developer Academy ist vorbei. Hier sind meine Take Aways aus den Sessions zu Storytelling, Imposter Syndrome und Public Speaking."
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            Die zweite Woche der Women Developer Academy ist vorbei. Hier sind
            meine Take Aways aus den Sessions zu Storytelling, Imposter Syndrome
            und Public Speaking.
          </p>

          <p>👇🏻 Shortcuts👇🏻:</p>
          <ul>
            <li>
              <a href="#storytelling">Storytelling</a>
            </li>
            <li>
              <a href="#imposter">Imposter Syndrome</a>
            </li>
            <li>
              <a href="#speaking">Public Speaking</a>
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
          </p>

          <h5>Dienstag, 15.02.2022</h5>

          <h2 id="storytelling">Storytelling</h2>
          <p>
            <em>
              "Learn how to tell a story that will engage your audience and make
              your content memorable."
            </em>
          </p>

          <p>
            Die Session wurde von{" "}
            <a href="https://www.linkedin.com/in/kseniafedorova/">
              Ksenia Fedorova, Developer Relations Program Manager
            </a>
            , geleitet. Sie hat uns die Grundlagen des Storytellings näher
            gebracht.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              <strong>Storytelling ist ein Werkzeug</strong>, um deine Botschaft
              zu vermitteln. Dabei ist es wichtig, dass du deine Zuhörer auf
              eine Reise mitnimmst. Dafür kannst du die{" "}
              <strong>Hero's Journey</strong> als Vorlage nutzen.
            </li>
            <li>
              Eine gute Story hat einen <strong>Konflikt</strong>. Ohne Konflikt
              gibt es keine Geschichte. Der Konflikt kann dabei auch ein Problem
              sein, das gelöst werden muss.
            </li>
            <li>
              Eine gute Story hat einen <strong>Helden</strong>. Der Held kann
              dabei auch dein Publikum sein.
            </li>
            <li>
              Eine gute Story hat eine <strong>Botschaft</strong>. Was soll dein
              Publikum mitnehmen?
            </li>
          </ul>

          <h5>Donnerstag, 17.02.2022</h5>

          <h2 id="imposter">Imposter Syndrome</h2>
          <p>
            <em>
              "Learn how to overcome imposter syndrome and build confidence in
              your abilities."
            </em>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/magdalena-krysa-9b17b6127/">
              Magdalena Krysa, Developer Relations Program Manager
            </a>
            , hat uns in dieser Session gezeigt, wie wir mit dem Imposter
            Syndrome umgehen können.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              Das Imposter Syndrome ist <strong>normal</strong>. Viele Menschen
              haben es.
            </li>
            <li>
              Es ist wichtig, dass du dir <strong>bewusst machst</strong>, dass
              du das Imposter Syndrome hast.
            </li>
            <li>
              Sammle <strong>Beweise</strong> für deine Fähigkeiten. Das können
              Feedback von Kollegen, Zertifikate oder auch deine eigenen Erfolge
              sein.
            </li>
            <li>
              Vergleiche dich nicht mit anderen. Jeder hat seinen eigenen Weg.
            </li>
          </ul>

          <h2 id="speaking">Public Speaking</h2>
          <p>
            <em>
              "Learn how to deliver a great presentation and engage your
              audience."
            </em>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/magdalena-krysa-9b17b6127/">
              Magdalena Krysa
            </a>{" "}
            hat uns auch in dieser Session begleitet und uns gezeigt, wie wir
            bessere Präsentationen halten können.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              <strong>Vorbereitung ist alles</strong>. Je besser du vorbereitet
              bist, desto sicherer fühlst du dich.
            </li>
            <li>
              Nutze die <strong>Power Pose</strong>. Stehe aufrecht und nimm
              Raum ein.
            </li>
            <li>
              Sprich <strong>langsam und deutlich</strong>. Mache Pausen.
            </li>
            <li>
              Nutze <strong>Gestik und Mimik</strong>. Das macht dich
              authentischer.
            </li>
            <li>
              Übe deine Präsentation. Am besten vor einem Spiegel oder nimm dich
              auf.
            </li>
          </ul>

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
