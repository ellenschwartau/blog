import Alert from "../_components/alert";
import Container from "../_components/container";
import Header from "../_components/header";

export default async function Post({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Alert />
      <Container>
        <Header />
        {children}
      </Container>
    </main>
  );
}
