import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Women Developer Academy - Graduated!"
        publishedAt="2022-03-06"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
        coverImage="/assets/blog/wda-graduated/wda-europe.png"
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            Vier Wochen gingen rum wie im Flug. Es waren lange Tage, aber es hat
            sich gelohnt. Wie die Live Speaking Practice lief und was mein Fazit
            zu dem Programm ist? Das liest du weiter unten!
          </p>

          <p>👇🏻 Shortcuts👇🏻:</p>
          <ul>
            <li>
              <a href="#pesentation">Live Speaking Practice</a>
            </li>
            <li>
              <a href="#graduation">Graduation</a>
            </li>
            <li>
              <a href="#futureme">Future Me - Brief an mich selbst</a>
            </li>
          </ul>

          <p>
            Du hast den Anfang verpasst? Hier geht's los: 👉🏽{" "}
            <a href="https://ellenschwartau.com/2022/02/05/women-developer-academy-woche-0/">
              Woche 0
            </a>
          </p>

          <h5>Dienstag, 01.03.2022</h5>

          <h2>Live Speaking Practice</h2>
          <p>
            <em>
              "After prior weeks full of workshops and mentorship syncs you will
              be able to showcase what you have learned and gather feedback to
              get you ready for your journey as a public speaker within the
              developer community."
            </em>
          </p>

          <p>
            Ich hatte mich auf eine Tonne Lightning-Talks eingestellt - aber
            leider wurden wir in kleinere Gruppen geteilt. Realistischerweise
            wäre das sonst auch eine Nachtschicht geworden.
          </p>

          <p>
            Mit meinem Talk habe ich mir eine Challenge gesetzt: Nicht googeln.
            Das sorgt automatisch dafür, dass du dich auf das Teilen deiner
            eigenen Erfahrung konzentrierst und ist meinen Zuhörer:innen positiv
            aufgefallen. Thema <strong>Reasonable Refactorings</strong> wird für
            euch nochmal in einem Blogpost aufgehübscht!
          </p>

          <p>
            Luise Schneider stellte ihre drei persönlichen Take Aways bzgl. Web
            Accessibility vorgestellt - Schon mal selbst einen Screen Reader
            über deine Website laufen lassen? Werde ich auf jeden Fall mal
            testen.
          </p>

          <p>
            Khatuna Shaveshova hat ihre Erfahrung mit Vite.js als eine
            leichtgewichtige, schnellere Webpack Alternative geteilt - batteries
            included! Sie hat als kleinen Hingucker die Techmakers-Farben in
            ihren Grafiken aufgegriffen.
          </p>

          <p>
            Die fünf-Minuten Talks sind ein guter Start die Themen bei
            Konferenzen einzureichen und zu erweitern. Dann vielleicht mit
            Google 😉
          </p>

          <p>
            Ein weiterer Tip aus meiner Gruppe: Statt deine Folie in Headline
            und bullet points zu unterteilen, verfasse einen Satz und highlighte
            die Überschrift in bold. Am Ende der Breakout Sessions wurden die
            Tipps aller Gruppen in einem gemeinsamen Board gesammelt:
          </p>

          <figure>
            <img
              src="https://ellenschwartau.files.wordpress.com/2022/03/takeaways-public-speaking.jpeg?w=1024"
              alt="[Take Aways aller Teilnehmerinnen aus der Public Speaking Practice]"
            />
            <figcaption>
              [Take Aways aller Teilnehmerinnen aus der Public Speaking
              Practice]
            </figcaption>
          </figure>

          <h5>Donnerstag, 05.03.2022</h5>

          <h2>Graduation</h2>
          <p>
            <em>
              "We will take some time to celebrate this milestone and the
              closing of the academy with all participants!"
            </em>
          </p>

          <p>
            <strong>
              Ganze 101 Frauen haben die Women Developer Academy 2022
              abgeschlossen, aus 600 Bewerberinnen ausgewählt.
            </strong>{" "}
            Beim letzten Zusammentreffen kamen wir in der großen Gruppe zusammen
            und haben auch über die Zukunft gesprochen: Was sind nächste
            Speaking Opportunities? Wie könnte der Weg zum Google Developer
            Expert weitergehen? Und was kannst du als Embassador zur Women
            Techmakers Szene beitragen? Nach der Schulung ist vor der Schulung.
            Alles spannende Punkte, aber genauer ansehen werde ich sie mir, wenn
            meine Wochen wieder entspannter sind.
          </p>

          <figure>
            <img
              src="https://ellenschwartau.files.wordpress.com/2022/03/image.png?w=1024"
              alt="Graduation - Women Developer Academy DACH Gruppe"
            />
            <figcaption>
              Graduation - Women Developer Academy DACH Gruppe
            </figcaption>
          </figure>

          <h2>
            After the graduation - Get involved in the developer community
          </h2>
          <p>
            <em>
              "Once the Academy is over, we will continue to support you by
              helping you to find speaking opportunities through our developer
              community network, where you can showcase your newly developed
              presentations!"
            </em>
          </p>

          <p>
            Mit dem Kurs ist es nun nicht vorbei, sondern ich bin in einer
            ziemlich coolen Community gelandet. Ich freue mich was die Zukunft
            so bringt und welche Denkanstöße ich hier in Zukunft geben und
            empfangen kann.
          </p>

          <h2>FutureMe - Brief an mich selbst</h2>
          <p>
            In der ersten Session haben wir uns einen Brief an uns selbst
            geschrieben. Das hier war meiner:
          </p>

          <p>
            <em>
              "Liebes Future Me, das sind meine drei Ziele für die Women
              Developer Academy:
            </em>
          </p>
          <ul>
            <li>
              <em>Mich von anderen inspirieren lassen</em>
            </li>
            <li>
              <em>
                Konstruktives Feedback in Bezug auf meine bisherigen
                Veröffentlichungen / eine neue Veröffentlichung bekommen
              </em>
            </li>
            <li>
              <em>Mein Netzwerk mit anderen Women in Tech vergrößern</em>
            </li>
          </ul>

          <p>
            <em>
              Ich bin gespannt ob das etwas geworden ist!
              <br />
              Viel Spaß!"
            </em>
          </p>

          <p>
            Glücklicherweise kann ich die Hoffnung nun bejahen! Mein wohl
            größtes Learning ist aber ebenso das überraschendste für mich.{" "}
            <a href="https://ellenschwartau.com/2022/02/13/wda-week-1/#fazit-week1">
              Den Effekt einer großartigen Community! Was ich genau damit meine?
              Das lest ihr im Zwischenfazit aus Woche 1.
            </a>{" "}
            Es war eine bereichernde Reise!
          </p>
        </div>
      </div>
    </article>
  );
}
