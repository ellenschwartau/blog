import Container from "@/app/_components/container";

const footerLinks = [
  { src: "https://github.com/ellenschwartau/blog", name: "View on GitHub" },
  { src: "/about", name: "About" },
  { src: "/imprint", name: "Impressum" },
  { src: "/", name: "Posts" },
  { src: "/mentoring", name: "Mentoring" },
  { src: "/public-speaking", name: "Speaker CV" },
  //{ src: '/thank-you', name: 'Thank you' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Have a nice day.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {footerLinks.map(({ src, name }) => {
              return (
                <a
                  key={name}
                  href={src}
                  className="mx-3 font-bold hover:underline"
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
