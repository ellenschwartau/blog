import Container from "../_components/container";
import Header from "../_components/header";
export default async function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">{children}</article>
      </Container>
    </main>
  );
}
