import { PostHeader } from "@/app/_components/post-header";
import { PostMetaData } from "@/types/post";

export const metadata: PostMetaData = {
  url: "posts/infrastructure/cloud-run",
  title: "Getting Started with Google Cloud Run",
  date: "2023-11-01",
  author: {
    name: "Ellen Schwartau",
    picture: "/assets/blog/authors/ellen.png",
  },
  language: "en",
  tags: ["Infrastructure", "Cloud", "Google Cloud"],
  excerpt:
    "A practical guide to deploying applications on Google Cloud Run. Learn how to leverage serverless containers for your applications.",
};

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <PostHeader
        title="Tech x Orbit Meetup #0009: Cloud Run"
        publishedAt="2023-05-11"
        coverImage="/assets/blog/cloud-run/cloud-run-header.png"
        excerpt="Another week, another meetup! This time we had the pleasure to host Orbit's own Christian Stein, who talked about Cloud Run - a fully managed compute platform that automatically scales stateless containers."
        author={{
          name: "Ellen Schwartau",
          picture: "/assets/blog/authors/ellen.png",
        }}
      />

      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">What is Cloud Run?</h2>

        <p>
          Cloud Run is a fully managed compute platform that automatically
          scales stateless containers. It&apos;s serverless, which means you
          don&apos;t have to manage any infrastructure. You just deploy your
          code and Google Cloud takes care of everything else.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Key Features</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Only pay for what you use (down to 100ms)</li>
          <li>Automatic scaling (including scale to zero)</li>
          <li>Support for any programming language</li>
          <li>Built on open standards (Knative)</li>
          <li>Integrated with other Google Cloud services</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">Use Cases</h3>
        <p>Cloud Run is perfect for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Web applications and APIs</li>
          <li>Backend services</li>
          <li>Data processing</li>
          <li>Internal tools</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">Getting Started</h3>
        <p>To deploy an application to Cloud Run, you need:</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>A containerized application</li>
          <li>A Google Cloud account</li>
          <li>The Google Cloud CLI installed</li>
        </ol>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <code className="text-sm">
            # Deploy to Cloud Run
            <br />
            gcloud run deploy SERVICE_NAME \<br />
            --image gcr.io/PROJECT_ID/IMAGE \<br />
            --platform managed
          </code>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3">Best Practices</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Keep containers stateless</li>
          <li>Handle requests concurrently</li>
          <li>Implement health checks</li>
          <li>Use environment variables for configuration</li>
          <li>Optimize container startup time</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">Pricing</h3>
        <p>Cloud Run charges for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>CPU time (per 100ms)</li>
          <li>Memory allocation</li>
          <li>Requests</li>
          <li>Network egress</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-sm">
            Want to learn more? Check out the
            <a
              href="https://cloud.google.com/run/docs"
              className="text-blue-600 hover:text-blue-800"
            >
              official documentation
            </a>
            or join our next meetup!
          </p>
        </div>
      </div>
    </article>
  );
}
