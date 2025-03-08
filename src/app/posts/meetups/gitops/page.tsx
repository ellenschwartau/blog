import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/meetups/gitops",
  title: "Tech x Orbit Meetup #0010: The Why and How of GitOps",
  date: "2023-05-15",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["GitOps", "Meetup"],
  excerpt:
    "Another week, another meetup! Joblift came to visit and talked about the Why and How of GitOps. Their platform includes over 100 microservices and comes with hugely interesting challenges!",
};
export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Tech x Orbit Meetup #0010: The Why and How of GitOps"
        publishedAt="2023-05-15"
        lastEditedAt="2025-03-07"
        coverImage="/assets/blog/gitops/screenshot-2023-05-15-at-09.33.11.png"
        excerpt="Another week, another meetup! Joblift came to visit and talked about the Why and How of GitOps. Their platform includes over 100 microservices and comes with hugely interesting challenges!"
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">Oh, WASP!* 🐝 **</h2>

        <p>
          Last week, we had the pleasure of hosting Joblift for our Tech x Orbit
          meetup series. They shared their journey of implementing GitOps in
          their infrastructure, which manages over 100 microservices!
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">What is GitOps?</h3>
        <p>
          GitOps is a way of implementing Continuous Deployment for cloud native
          applications. It focuses on a developer-centric experience when
          operating infrastructure, by using tools developers are already
          familiar with, including Git and Continuous Deployment tools.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">The Core Principles</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>The entire system is described declaratively</li>
          <li>The canonical desired system state is versioned in Git</li>
          <li>Approved changes can be automatically applied to the system</li>
          <li>Software agents ensure correctness and alert on divergence</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">Benefits of GitOps</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Increased productivity</li>
          <li>Enhanced developer experience</li>
          <li>Improved stability</li>
          <li>Higher reliability</li>
          <li>Consistency and standardization</li>
          <li>Strong security guarantees</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">Tools & Implementation</h3>
        <p>Joblift uses several tools to implement their GitOps workflow:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Flux CD for continuous deployment</li>
          <li>Kubernetes as the container orchestration platform</li>
          <li>ArgoCD for GitOps operations</li>
          <li>Helm for package management</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-sm">
            * WASP stands for Write, Apply, Ship, and Pray - a humorous take on
            the deployment process before GitOps
          </p>
          <p className="text-sm">
            ** No wasps were harmed in the making of this presentation
          </p>
        </div>
      </div>
    </article>
  );
}
