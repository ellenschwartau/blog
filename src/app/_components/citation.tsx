export function Citation({
  citation,
  source,
}: {
  citation: string;
  source: string;
}) {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">
      {citation}
      <br />
      <span className="text-sm">{source}</span>
    </blockquote>
  );
}
