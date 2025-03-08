import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/quellen-der-instiration",
  title: "Quellen der Inspiration",
  date: "2023-10-01",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "de",
  tags: ["Inspiration", "Ressourcen", "Lernen"],
  excerpt:
    "Eine Sammlung wertvoller Ressourcen und Inspirationsquellen für Entwickler. Von Blogs über Podcasts bis hin zu Tech-Talks - hier findest du alles, was dich weiterbringt.",
};

export default function Post() {
  return (
    <article className="mb-32">
      <PostHeader
        title="Tech Quickie: Quellen der Inspiration"
        publishedAt="2021-05-13"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p>
            Ab und an werde ich gefragt, welche Ressourcen ich nutze, um in der
            Welt der IT am Zahn der Zeit zu bleiben oder Wissen zu vertiefen.
            Ich muss dich enttäuschen: Es gibt keine ultimative Single Source Of
            Truth, die dir als allgemeingültige Superquelle alle nötigen Updates
            gibt. Dazu ist der Bereich Tech viel zu groß und schnelllebig. Aber
            es gibt glücklicherweise eine große, Wissenstransfer verliebte
            Community.
          </p>

          <figure>
            <img
              src="https://ellenschwartau.files.wordpress.com/2021/05/diego-ph-fiq0tet6llw-unsplash.jpg?w=750"
              alt="Blog Post: Quellen der Inspiration"
            />
            <figcaption>Blog Post: Quellen der Inspiration</figcaption>
          </figure>

          <p>
            Je nachdem, welches Feld dich interessiert und in welcher Form du
            Wissen am liebsten konsumierst, ist die folgende Liste für dich
            möglicherweise uninteressant - Aber das sind die Dinge, die ich
            (mehr oder weniger regelmäßig) konsultiere:
          </p>

          <h3>Quereinstieg</h3>
          <p>
            Ich habe selbst einen anderen Hintergrund, aber folgende Akademien
            bieten Kurse für einen Anfang zum Quereinstieg an:
          </p>
          <ul>
            <li>
              <strong>
                <a
                  href="https://www.shecodes.io/"
                  className="text-blue-600 hover:underline"
                >
                  SheCodes
                </a>
              </strong>{" "}
              unterstützt in erster Linie Frauen beim Coden Lernen und bietet
              immer wieder kostenlose Workshops zum Einstieg an.
            </li>
            <li>
              Uneingeschränkt in der Teilnahme bietet auch die{" "}
              <strong>
                <a
                  href="http://www.spiced-academy.com"
                  className="text-blue-600 hover:underline"
                >
                  SpicedAcademy
                </a>
              </strong>{" "}
              Kurse vor Ort in Berlin, Hamburg, Stuttgart und Köln an, die sogar
              durch Bildungsgutscheine gefördert werden. Hier kannst du in
              intensiven Wochen Basiswissen in Web Development und Data Science
              aufbauen.
            </li>
          </ul>

          <h3>Weiterbildungen und Coding</h3>
          <ul>
            <li>
              Ich behalte meistens die Plattformen{" "}
              <strong>
                <a
                  href="https://www.coursera.org/"
                  className="text-blue-600 hover:underline"
                >
                  Coursera
                </a>
              </strong>{" "}
              und{" "}
              <strong>
                <a
                  href="https://www.udemy.com/"
                  className="text-blue-600 hover:underline"
                >
                  Udemy
                </a>
              </strong>{" "}
              für Onlinekurse im Auge. Es gibt dort eine Vielzahl kostenloser
              Kurse und hin und wieder Rabattaktionen. Je nach Kurs gibt es
              theoretischen Input, kombiniert mit praktischen Übungen. Die
              gelernten Inhalte werden teilweise sogar getestet und dir bei
              erfolgreichem Abschluss zertifiziert.
            </li>
            <li>
              Ansonsten gibt es einige Plattformen, die Katas anbieten (kleine
              bis große Knobelaufgaben, die du in der Programmiersprache deiner
              Wahl lösen kannst). Dazu zählt z.B.{" "}
              <strong>
                <a
                  href="https://www.codewars.com/"
                  className="text-blue-600 hover:underline"
                >
                  Codewars
                </a>
              </strong>
              . Hast du eine Aufgabe abgegeben, erhältst du dort z.B. Zugriff
              auf Lösungen anderer Nutzer. Durch das Punktesystem lässt sich
              daraus auch gut ein kleiner Wettbewerb innerhalb deiner Firma
              machen.
            </li>
          </ul>

          <h3>Lesestoff</h3>
          <ul>
            <li>
              Das{" "}
              <strong>
                <a
                  href="https://www.codecentric.de/wissen/softwerker"
                  className="text-blue-600 hover:underline"
                >
                  Softwerker Magazin
                </a>
              </strong>{" "}
              (kostenlos und sehr schön aufbereitet von der Firma Codecentric,
              zu verschiedensten Themen). Als PDF und Print verfügbar.
            </li>
            <li>
              Der{" "}
              <strong>
                <a
                  href="https://stackoverflow.blog/"
                  className="text-blue-600 hover:underline"
                >
                  Stack Overflow Blog
                </a>
              </strong>{" "}
              (auch als{" "}
              <a
                href="https://stackoverflow.blog/newsletter/"
                className="text-blue-600 hover:underline"
              >
                Newsletter
              </a>
              ). Kürzlich kam ein cooler{" "}
              <a
                href="https://stackoverflow.blog/2021/04/30/the-overflow-71-copied-and-pasted/"
                className="text-blue-600 hover:underline"
              >
                Artikel darüber, was bei denen am meisten copy-pasted
              </a>{" "}
              wird.
            </li>
            <li>
              Die{" "}
              <strong>
                <a
                  href="https://wdrl.info/archive"
                  className="text-blue-600 hover:underline"
                >
                  Web Development Reading List
                </a>
              </strong>
              . Alle paar Monate kommt hier ein Artikel zu Neuerungen und
              interessanten Themen raus. Quasi als eine kondensierte Liste, zu
              der du dir die Dinge (<em>wow: "d-d-d-d-d"</em>) aus deinem
              Interessenfeld genauer anschauen kannst.{" "}
              <a
                href="https://wdrl.info/"
                className="text-blue-600 hover:underline"
              >
                Ebenso als Newsletter erhältlich
              </a>
              .
            </li>
          </ul>

          <h3>Was auf die Ohren</h3>
          <p>
            <strong>Podcasts</strong> gibt es wie Sand am Meer, da ist natürlich
            auch das Thema Tech vertreten. In diese hier höre ich ab und an
            rein:
          </p>
          <ul>
            <li>
              <strong>
                <a
                  href="https://open.spotify.com/show/4bn4KMIcMSGiNtBRhIuOeR?si=bc2bbac797354b49"
                  className="text-blue-600 hover:underline"
                >
                  Ada Podcast
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://open.spotify.com/show/5fUv3AsIyYocJm3UFbZSjm?si=a29375b5a1ab4e79"
                  className="text-blue-600 hover:underline"
                >
                  if/else Podcast
                </a>
              </strong>{" "}
              (leider schon seit längerem keine neuen Folgen, was ich sehr
              schade finde)
            </li>
            <li>
              Liefert nicht nur alle Antworten bei Programmier-Problemen in Form
              von Antworten auf Programmier-Probleme auf{" "}
              <a
                href="http://www.stackoverflow.de"
                className="text-blue-600 hover:underline"
              >
                www.stackoverflow.de
              </a>{" "}
              sondern ist auch im Audio-Format vertreten:{" "}
              <strong>
                <a
                  href="https://open.spotify.com/show/0e5eoM6w7eW9Wu7wMA04Tr?si=71f3b8e1ea2f4fc3"
                  className="text-blue-600 hover:underline"
                >
                  The Stack Overflow Podcast
                </a>
              </strong>
              .
            </li>
            <li>
              Und <em>natürlich</em> unser eigener Podcast:{" "}
              <strong>
                <a
                  href="https://open.spotify.com/show/4v3xXuY5Km98xnmeXeGZgx?si=1fea67d221674009"
                  className="text-blue-600 hover:underline"
                >
                  UNMUTE IT
                </a>
              </strong>
              . Dort beschnacken zwei weitere Frauen aus der IT und ich
              verschiedenste Tech-Themen. Auf{" "}
              <strong>
                <a
                  href="https://www.instagram.com/berthi_elton_john/"
                  className="text-blue-600 hover:underline"
                >
                  Instagram
                </a>
              </strong>{" "}
              kannst du dir einen Überblick über vorhandene und zukünftige
              Folgen verschaffen und hast zudem Zugriff auf Zusatzinfos und
              Outtakes.
            </li>
          </ul>

          <h3>Sonstiges</h3>
          <ul>
            <li>
              <strong>Meetups!</strong> Direkter Austausch und Diskurs ist
              wichtig. Die Plattform{" "}
              <a
                href="https://www.meetup.com/"
                className="text-blue-600 hover:underline"
              >
                meetup.com
              </a>{" "}
              bietet dir Zugang zu zahlreichen kostenlosen Events. Du kannst
              sogar selbst Vorträge zu Themen halten, die du mit anderen teilen
              möchtest. Und: Bei technischen Themen gibt es meisten sogar freie
              Limo und Snacks. Dabei lässt sich auch sehr gut netzwerken.
            </li>
            <li>
              <strong>Fachbücher</strong>. Gerade wenn du dich gezielt mit einem
              Thema auseinandersetzen möchtest, ist das nach wie vor eine
              hervorragende Quelle. Zuletzt habe ich die <em>"Clean XY"</em>
              -Reihe von <em>Uncle Bob</em> gelesen (genauer gesagt: Clean Code,
              Clean Architecture, Clean Coder).
            </li>
            <li>
              Ansonsten folge ich tatsächlich einfach auf{" "}
              <strong>Instagram</strong> so einigen spannenden Accounts (z.B.{" "}
              <em>
                <a
                  href="https://www.instagram.com/t3n_magazin/"
                  className="text-blue-600 hover:underline"
                >
                  t3n_magazine
                </a>
              </em>{" "}
              oder{" "}
              <a
                href="https://www.instagram.com/the_female_lead/"
                className="text-blue-600 hover:underline"
              >
                <em>the_female_lead</em>
              </a>
              )
            </li>
          </ul>

          <p>
            <strong>Kleiner Tip</strong>, falls du gerade versuchst dich zu
            orientieren und deinen Pool an Wissensquellen zusammenzustellen:
            Tausend Dinge zu abonnieren und dann keine zu Lesen ist nicht der
            heilige Gral. Nimm dir lieber die Zeit Stück für Stück
            herauszufinden, was für dich funktioniert.
          </p>

          <h3>Und du so?</h3>
        </div>
      </div>
    </article>
  );
}
