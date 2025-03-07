import { PostHeader } from "@/app/_components/post-header";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="First Thoughts on Web Security"
        publishedAt="2023-08-18"
        lastEditedAt="2025-03-07"
        coverImage="/assets/blog/web-security/web-security-talk.JPG"
        excerpt="I recently attended We Are Developers and took the opportunity to gather insights in the field of web security; An area where I definitely lack knowledge, even though I consider it our responsibility as developers to build secure applications. 🔐 I decided to delve deeper into the topic; here's what I learned today."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">Oh, WASP!* 🐝 **</h2>
        <p className="text-sm text-gray-600 italic">
          *so sorry, but I couldn't resist...
          <br />
          ** And yes this is a bee, not a wasp
        </p>

        <p>
          The first thing that caught my attention was the <strong>O</strong>pen{" "}
          <strong>W</strong>eb <strong>A</strong>pplication
          <strong>S</strong>ecurity <strong>P</strong>roject, which aims to
          improve software security. This amongst others includes the{" "}
          <a
            href="https://owasp.org/Top10/"
            className="text-blue-600 hover:underline"
          >
            top 10 list of web security risks
          </a>{" "}
          and a{" "}
          <a
            href="https://owasp.org/www-project-web-security-testing-guide/"
            className="text-blue-600 hover:underline"
          >
            web security testing guide
          </a>
          .
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
          <strong>The OWASP® Foundation</strong> works to improve the security
          of software through its community-led open source software projects,
          hundreds of chapters worldwide, tens of thousands of members, and by
          hosting local and global conferences.
          <br />
          <span className="text-sm">owasp.org</span>
        </blockquote>

        <h2 className="text-3xl font-bold mt-8 mb-4">OWASP Top 10</h2>
        <p>
          The most recent official update was published in 2021. The data used
          consists of vulnerabilities found in applications, which were
          submitted by security vendors and consultancies, bug bounties (didn't
          know this term existed), and further.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-gray-300 caption-bottom">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Apps Tested</th>
                <th className="border p-2">CWE</th>
                <th className="border p-2">Vulnerable Apps</th>
                <th className="border p-2">Report Year</th>
                <th className="border p-2">Contributor Name</th>
                <th className="border p-2">Contributor Contact Email</th>
                <th className="border p-2">Type of Testing</th>
                <th className="border p-2">Primary Language</th>
                <th className="border p-2">Region</th>
                <th className="border p-2">Industry</th>
                <th className="border p-2">Retest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">27</td>
                <td className="border p-2">20</td>
                <td className="border p-2">3</td>
                <td className="border p-2">2018</td>
                <td className="border p-2">Jane Doe</td>
                <td className="border p-2">...</td>
                <td className="border p-2">TaH</td>
                <td className="border p-2">PHP</td>
                <td className="border p-2">Global</td>
                <td className="border p-2">Non-Technology</td>
                <td className="border p-2">No</td>
              </tr>
              <tr>
                <td className="border p-2">66</td>
                <td className="border p-2">125</td>
                <td className="border p-2">3</td>
                <td className="border p-2">2020</td>
                <td className="border p-2">Jane Doe</td>
                <td className="border p-2">...</td>
                <td className="border p-2">Tooling</td>
                <td className="border p-2">C</td>
                <td className="border p-2">North America</td>
                <td className="border p-2">Technology</td>
                <td className="border p-2">No</td>
              </tr>
              <tr>
                <td className="border p-2">42</td>
                <td className="border p-2">284</td>
                <td className="border p-2">7</td>
                <td className="border p-2">2020</td>
                <td className="border p-2">Jane Doe</td>
                <td className="border p-2">...</td>
                <td className="border p-2">HaT</td>
                <td className="border p-2">.NET</td>
                <td className="border p-2">Europe</td>
                <td className="border p-2">Retail</td>
                <td className="border p-2">No</td>
              </tr>
            </tbody>
            <caption>
              Made up data based on the sample data submission files in the{" "}
              <a href="https://github.com/OWASP/Top10/tree/master/2021/Data">
                OWASP Top 10 Github repo
              </a>
            </caption>
          </table>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Insecure Design</h3>
        <p>
          In contrast to an insecure implementation this category points to
          weaknesses or errors in how software is designed. A well-known example
          here is using "security" questions to allow you to reset your
          password. Nevertheless how safe the code is implemented, more than the
          person themselves could know its cat's name is Gerhard, thus the
          design itself is insecure.
        </p>

        <p>
          <strong>Total occurrences:</strong> {">"}262k
          <br />
          <strong>Avg. Incidence Rate:</strong> 3%
          <br />
          <strong>Avg. Weighted Exploit:</strong> 6.46 / 10
          <br />
          <strong>Avg. Weighted Impact:</strong> 6.78 / 10
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Software and Data Integrity Failures
        </h3>
        <p>
          Whenever you decide to include a library or external data in your
          application, the authenticity needs to be checked, meaning they are
          genuine and unaltered. This task should not only be performed at the
          moment you integrate them the first time, but also when updates are
          applied.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Server-Side Request Forgery
        </h3>
        <p>
          If your application provides users with the functionality to input and
          fetch a URL, this offers opportunities for attacks. For instance, an
          attacker could create a URL such as{" "}
          <code className="bg-gray-100 p-1 rounded not-prose">
            file:///etc/passwd
          </code>
          ,
          <code className="bg-gray-100 p-1 rounded not-prose">
            http://localhost:28017/
          </code>{" "}
          or
          <code className="bg-gray-100 p-1 rounded not-prose">
            http://169.254.169.254/
          </code>
          , attempting to retrieve internal, metadata, or sensitive information.
        </p>

        <p>
          <strong>Total occurrences:</strong> ~9.5k
          <br />
          <strong>Avg. Incidence Rate:</strong> 2.72%
          <br />
          <strong>Avg. Weighted Exploit:</strong> 8.28 / 10
          <br />
          <strong>Avg. Weighted Impact:</strong> 6.72 / 10
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Conclusion for today</h2>
        <p>
          The OWASP top 10 definitely doesn't provide a complete list of
          security vulnerabilities, but it does give a fairly up-to-date
          overview of what web developers should be aware of at the very least.
          Especially, I will take a closer look at the listed examples of
          attacks and the tools for prevention. No one can guarantee 100% secure
          applications, but understanding the commonly exploited vulnerabilities
          is a first step.
        </p>
        <p className="mt-4">
          <a
            href="https://github.com/OWASP/wstg/tree/master"
            className="text-blue-600 hover:underline"
          >
            This GitHub repo about OWASPs Web Security Testing Guide
          </a>{" "}
          is on my reading list.
        </p>
      </div>
    </article>
  );
}
