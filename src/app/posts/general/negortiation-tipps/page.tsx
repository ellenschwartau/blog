import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/general/negortiation-tipps",
  title: "Effective Negotiation Tips for Developers",
  date: "2023-10-25",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Career", "Professional Development", "Negotiation"],
  excerpt:
    "Essential negotiation strategies and tips for software developers. How to effectively communicate your value and achieve better outcomes in professional discussions.",
};

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="10 Tipps für erfolgreiche Gehaltsverhandlungen"
        publishedAt="2022-03-08"
        coverImage="/assets/blog/tipps-gehaltsverhandlungen/10-take-aways-gehalt.png"
        excerpt="Wer stand noch nicht vor der Herausforderung, Gehaltsforderungen fundiert zu äußern? Ich persönlich fühle mich dabei immer unwohl. Vom Warten allein wird aber nichts passieren. Hier sind 10 Tipps, die Erfolg versprechen."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <p>
          Wer stand noch nicht vor der Herausforderung, Gehaltsforderungen
          fundiert zu äußern? Ich persönlich fühle mich dabei immer unwohl. Vom
          Warten allein wird aber nichts passieren. Gehaltsverhandlungen sind
          also ein notwendiges Übel.
        </p>

        <p>
          Nachdem Anne-Kathrin Gerstlauer in einem Gastbeitrag bei Tomorrow fünf
          Tipps für deine nächste Gehaltsverhandlung veröffentlichte war das
          Interesse der Followerschaft an dem Thema groß.{" "}
          <a href="https://www.meetup.com/de-DE/Banking-fur-Morgen-Meetup/events/284041347/">
            In einem Meetup hat Tomorrow ihre Head of People & Culture Katrin zu
            dem Thema interviewt
          </a>{" "}
          und einige Anregungen für erfolgreiche Gehaltsverhandlungen preis
          gegeben.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">1. Kenne deinen Wert</h3>
        <p>
          Ein Anlaufpunkt könnten Gehaltsbänder in ausgeschriebenen Stellen oder
          Kununu sein. Auch dein Netzwerk kannst du nach Gehältern ähnlicher
          Positionen fragen. Oder du antwortest mal auf eine Headhunter-Anfrage
          und fragst geschickt nach dem möglichen Gehalt.
        </p>

        {/* Weitere Tipps als h3 + p Kombinationen */}

        <p className="mt-8">Was sind deine Erfahrungen? Comment below. 👇</p>
      </div>
    </article>
  );
}
