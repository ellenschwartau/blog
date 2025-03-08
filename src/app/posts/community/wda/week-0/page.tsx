import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Women Developer Academy - Woche 0"
        publishedAt="2022-02-05"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        excerpt="Die Women Developer Academy von Google startet! Hier erfährst du, was das Programm ist und was ich mir davon erhoffe."
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2>Was ist die Women Developer Academy?</h2>
          <p>
            Die Women Developer Academy ist ein 6-wöchiges Programm von Google
            für Entwicklerinnen in Europa. Ziel ist es, mehr Frauen dazu zu
            ermutigen, auf Tech-Konferenzen zu sprechen und sich in der
            Community zu engagieren.
          </p>

          <p>Das Programm besteht aus:</p>
          <ul>
            <li>
              Wöchentlichen Sessions zu Themen wie Public Speaking, Personal
              Branding und Storytelling
            </li>
            <li>1:1 Mentoring mit Google Developer Experts</li>
            <li>Networking mit anderen Teilnehmerinnen</li>
            <li>Einer Live Speaking Practice am Ende des Programms</li>
          </ul>

          <h2>Warum nehme ich teil?</h2>
          <p>
            Ich möchte mich weiterentwickeln und neue Herausforderungen
            annehmen. Die Academy bietet mir die Möglichkeit:
          </p>
          <ul>
            <li>Meine Public Speaking Skills zu verbessern</li>
            <li>Von erfahrenen Speakern zu lernen</li>
            <li>Mein Netzwerk zu erweitern</li>
            <li>Mich mit anderen Entwicklerinnen auszutauschen</li>
          </ul>

          <h2>Kick-Off</h2>
          <p>
            Am Donnerstag war der Kick-Off der Academy. Wir haben uns
            kennengelernt und einen Überblick über das Programm bekommen.
            Besonders spannend fand ich die Vorstellung der Mentorinnen und
            Mentoren. Sie alle haben beeindruckende Erfahrungen im Bereich
            Public Speaking und Community Building.
          </p>

          <h2>Was kommt als nächstes?</h2>
          <p>Nächste Woche starten die ersten Sessions:</p>
          <ul>
            <li>Montag: Erste Mentoring Session</li>
            <li>Dienstag: Networking</li>
            <li>Donnerstag: Personal Branding</li>
          </ul>

          <p>
            Ich werde wöchentlich über meine Erfahrungen und Learnings
            berichten. Stay tuned! 🚀
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
