import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/women-in-tech/ada-lovelace",
  title: "Ada Lovelace: The First Computer Programmer",
  date: "2023-10-10",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Women in Tech", "History", "Programming"],
  excerpt:
    "Exploring the legacy of Ada Lovelace, often considered the world's first computer programmer, and her contributions to computer science.",
};

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="All my love to Ada Lovelace"
        publishedAt="2021-03-08"
        coverImage="/assets/blog/ada-lovelace/ada-lovelace.png"
        excerpt="Ada Lovelace war die erste Programmiererin der Welt. Ihre Geschichte ist faszinierend und inspirierend zugleich. Hier ist ein kleiner Einblick in ihr Leben und Werk."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">
          Die erste Programmiererin der Welt
        </h2>

        <p>
          Ada Lovelace war eine britische Mathematikerin und gilt als die erste
          Programmiererin der Welt. Sie schrieb das erste Computerprogramm,
          lange bevor es Computer im heutigen Sinne gab. Ihre Geschichte ist
          faszinierend und inspirierend zugleich.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Frühe Jahre</h3>
        <p>
          Augusta Ada Byron wurde am 10. Dezember 1815 in London geboren. Sie
          war die einzige eheliche Tochter des berühmten Dichters Lord Byron und
          seiner Frau Anne Isabella Milbanke. Ihre Mutter verließ Byron einen
          Monat nach Adas Geburt und erhielt das alleinige Sorgerecht.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          Mathematische Ausbildung
        </h3>
        <p>
          Lady Byron förderte Adas mathematische und wissenschaftliche
          Ausbildung - ungewöhnlich für diese Zeit. Sie wollte verhindern, dass
          Ada die künstlerischen Neigungen ihres Vaters entwickelte. Ada zeigte
          früh außergewöhnliche mathematische Fähigkeiten.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          Begegnung mit Charles Babbage
        </h3>
        <p>
          1833 lernte sie Charles Babbage kennen, der an seiner &quot;Analytical
          Engine&quot; arbeitete - einem mechanischen Computer. Ada war
          fasziniert von dieser Maschine. Sie übersetzte einen italienischen
          Artikel über die Maschine und fügte eigene umfangreiche Notizen hinzu.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Der erste Algorithmus</h3>
        <p>
          In ihren Notizen beschrieb Ada einen Algorithmus zur Berechnung von
          Bernoulli-Zahlen. Dies gilt als das erste Computerprogramm der
          Geschichte. Sie erkannte auch das Potenzial der Maschine über reine
          Berechnungen hinaus - sie könnte Musik und Kunst erschaffen.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Ihr Vermächtnis</h3>
        <p>
          Ada Lovelace starb jung, mit nur 36 Jahren, an Krebs. Ihr Beitrag zur
          Informatik wurde erst im 20. Jahrhundert wiederentdeckt. Heute wird
          sie als Pionierin der Computerprogrammierung gefeiert. Die
          Programmiersprache Ada wurde nach ihr benannt.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-sm">
            &quot;Der analytische Motor webt algebraische Muster, wie der
            Jacquard-Webstuhl Blumen und Blätter webt.&quot; - Ada Lovelace
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3">Ada Lovelace Day</h3>
        <p>
          Jedes Jahr im Oktober wird der Ada Lovelace Day gefeiert. Er würdigt
          die Leistungen von Frauen in Wissenschaft, Technologie, Ingenieurwesen
          und Mathematik (STEM). Ein wichtiger Tag, um die Sichtbarkeit von
          Frauen in der Technik zu erhöhen.
        </p>

        <p className="mt-8">
          Ada Lovelace zeigt uns, dass Geschlecht keine Rolle spielt, wenn es um
          wissenschaftliche Leistungen geht. Sie war ihrer Zeit weit voraus und
          inspiriert bis heute Menschen weltweit.
        </p>
      </div>
    </article>
  );
}
