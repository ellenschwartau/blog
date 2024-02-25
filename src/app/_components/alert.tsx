import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.
            </>
          ) : (
            <>
              This page is under construction. To see all future contents{" "}
              <a
                href="https://ellenschwartau.com/"
                target="_blank"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                visit the wordpress version of my blog
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
