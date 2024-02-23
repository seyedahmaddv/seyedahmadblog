import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
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
              این صفحه یک پیش نمایش است.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                اینجا کلیک کنید
              </a>{" "}
              تا از حالت پیش نمایش خارج شوید.
            </>
          ) : (
            <>
              منبع کد برای این وبلاگ اینجاست:{" "}
              <a
                href={`https://github.com/seyedahmaddv/seyedahmadblog`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
                target="_blank"
              >
                در گیت هاب
              </a>
              
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
