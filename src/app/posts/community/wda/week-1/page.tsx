import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Women Developer Academy - Woche 1"
        publishedAt="2022-02-13"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        excerpt="Die erste Woche der Women Developer Academy ist vorbei. Hier sind meine Take Aways aus den Sessions zu Mentoring, Networking und Personal Branding."
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            Die erste Woche der Women Developer Academy ist vorbei. Hier sind
            meine Take Aways aus den Sessions zu Mentoring, Networking und
            Personal Branding.
          </p>

          <p>👇🏻 Shortcuts👇🏻:</p>
          <ul>
            <li>
              <a href="#mentoring">Mentoring</a>
            </li>
            <li>
              <a href="#networking">Networking</a>
            </li>
            <li>
              <a href="#branding">Personal Branding</a>
            </li>
          </ul>

          <p>
            Du hast den Anfang verpasst? Hier geht's zu{" "}
            <a href="https://ellenschwartau.com/2022/02/05/women-developer-academy-woche-0/">
              Woche 0
            </a>
            .
          </p>

          <h5>Montag, 07.02.2022</h5>

          <h2 id="mentoring">First Mentoring Session</h2>
          <p>
            Mein Mentor ist{" "}
            <a href="https://www.linkedin.com/in/jadjoubran/">Jad Joubran</a>.
            Er ist Google Developer Expert für Web Technologies und hat bereits
            viele Vorträge auf Konferenzen gehalten. In unserer ersten Session
            haben wir uns kennengelernt und über meine Ziele gesprochen. Ich
            möchte mich vor allem im Bereich Public Speaking weiterentwickeln.
          </p>

          <h5>Dienstag, 08.02.2022</h5>

          <h2 id="networking">Networking</h2>
          <p>
            <em>
              "Learn how to build and maintain a strong professional network."
            </em>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/magdalena-krysa-9b17b6127/">
              Magdalena Krysa, Developer Relations Program Manager
            </a>
            , hat uns in dieser Session gezeigt, wie wichtig Networking ist und
            wie wir es richtig angehen können.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              <strong>Networking ist keine Einbahnstraße</strong>. Es geht
              darum, Beziehungen aufzubauen und zu pflegen.
            </li>
            <li>
              Sei authentisch und zeige echtes Interesse an deinem Gegenüber.
            </li>
            <li>
              Nutze Social Media wie LinkedIn, um dein Netzwerk zu erweitern.
            </li>
            <li>
              Follow-up ist wichtig: Bleib in Kontakt mit den Menschen, die du
              kennenlernst.
            </li>
          </ul>

          <h5>Donnerstag, 10.02.2022</h5>

          <h2 id="branding">Personal Branding</h2>
          <p>
            <em>
              "Learn how to build your personal brand and establish yourself as
              an expert in your field."
            </em>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/kseniafedorova/">
              Ksenia Fedorova, Developer Relations Program Manager
            </a>
            , hat uns beigebracht, wie wir unsere persönliche Marke aufbauen
            können.
          </p>

          <h4>Meine Take Aways</h4>
          <ul>
            <li>
              <strong>
                Deine persönliche Marke ist, was andere über dich sagen
              </strong>
              , wenn du nicht im Raum bist.
            </li>
            <li>Definiere deine Werte und wofür du stehen möchtest.</li>
            <li>
              Sei konsistent in deiner Kommunikation und deinem Auftreten.
            </li>
            <li>Teile dein Wissen und deine Erfahrungen mit anderen.</li>
            <li>
              Nutze verschiedene Kanäle, um deine Expertise zu zeigen (Blog,
              Talks, Social Media).
            </li>
          </ul>

          <h2>Ausblick</h2>
          <p>
            Nächste Woche geht es um Storytelling, Imposter Syndrome und Public
            Speaking. Ich bin schon sehr gespannt auf die Sessions!
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
