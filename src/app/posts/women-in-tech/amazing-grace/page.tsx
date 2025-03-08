import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Amazing Grace - Die Pionierin der Softwareentwicklung"
        publishedAt="2021-03-09"
        coverImage="/assets/blog/amazing-grace/grace-hopper.png"
        excerpt="Grace Hopper war eine visionäre Informatikerin, die nicht nur den ersten Compiler entwickelte, sondern auch den Begriff 'Bug' prägte. Ihre Geschichte ist ein inspirierendes Beispiel dafür, wie eine einzelne Person die Welt der Technologie revolutionieren kann."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">Die Königin des Codes</h2>

        <p>
          Grace Murray Hopper (1906-1992) war eine amerikanische Informatikerin
          und Rear Admiral der US Navy. Sie gehörte zu den ersten
          Programmiererinnen des Mark I Computers und entwickelte den ersten
          Compiler. Ihre Arbeit legte den Grundstein für COBOL, eine der ersten
          maschinenunabhängigen Programmiersprachen.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          Der erste &quot;Bug&quot;
        </h3>
        <p>
          Am 9. September 1947 suchte Grace Hopper einen Fehler im Mark II
          Computer der Harvard Universität. Sie fand eine Motte, die zwischen
          den Relais eingeklemmt war und den Fehler verursachte. Sie klebte die
          Motte in das Logbuch und notierte: &quot;First actual case of bug
          being found&quot;. Seitdem werden Computerfehler als &quot;Bugs&quot;
          bezeichnet.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Revolutionäre Ideen</h3>
        <p>
          Hopper glaubte daran, dass Computer auch für Nicht-Mathematiker
          zugänglich sein sollten. Sie entwickelte den ersten Compiler (A-0),
          der mathematische Notation in Maschinencode übersetzte. Dies war
          revolutionär - viele glaubten damals, Computer könnten nur
          arithmetische Aufgaben lösen.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">COBOL und das Erbe</h3>
        <p>
          Ihre Arbeit führte zur Entwicklung von COBOL (Common Business-Oriented
          Language), einer Programmiersprache, die noch heute in vielen
          Geschäftsanwendungen verwendet wird. Sie setzte sich für Standards in
          der Computerprogrammierung ein und förderte die Idee der
          Maschinenunabhängigkeit von Programmiersprachen.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-sm italic">
            &quot;Die gefährlichsten Worte in der Sprache sind: Wir haben das
            immer so gemacht.&quot; - Grace Hopper
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3">Militärische Karriere</h3>
        <p>
          Hopper trat 1943 den WAVES (Women Accepted for Volunteer Emergency
          Service) bei. Sie diente bis zu ihrer Pensionierung 1986 im Alter von
          79 Jahren - die längstdienende aktive Offizierin der US Navy. Bei
          ihrer Pensionierung war sie Rear Admiral (lower half).
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          Auszeichnungen und Ehrungen
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Defense Distinguished Service Medal</li>
          <li>Legion of Merit</li>
          <li>Presidential Medal of Freedom (posthum)</li>
          <li>National Medal of Technology</li>
          <li>IEEE Emanuel R. Piore Award</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">
          Grace Hopper Celebration
        </h3>
        <p>
          Die Grace Hopper Celebration of Women in Computing ist die weltweit
          größte Konferenz für Frauen in der Informatik. Sie wurde zu ihren
          Ehren benannt und inspiriert jährlich tausende von Frauen in der
          Technologiebranche.
        </p>

        <p className="mt-8">
          Grace Hopper war eine Visionärin, die die Grenzen des Möglichen immer
          wieder neu definierte. Ihr Vermächtnis lebt in jeder Zeile Code
          weiter, die heute geschrieben wird.
        </p>
      </div>
    </article>
  );
}
