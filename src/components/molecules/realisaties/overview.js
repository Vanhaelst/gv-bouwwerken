import { Container } from "@/components/atoms/container";
import clsx from "clsx";
import Image from "@/utils/Image";
import Link from "next/link";

export const RealisationsOverview = ({ realisations }) => {
  return (
    <Container className="grid md:grid-cols-12">
      <div
        className={clsx(
          "flex flex-col justify-center pb-10 md:pb-20",
          "md:col-span-10 md:col-start-2",
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {realisations.length > 0 &&
            realisations.map((realisation) => (
              <Link href={realisation.uri}>
                <Image
                  key={realisation.id}
                  src={realisation.image[0].url}
                  width={realisation.image[0].width}
                  height={realisation.image[0].height}
                  alt={realisation.image[0].alt || ""}
                  classnames="object-cover aspect-square rounded-md"
                />
              </Link>
            ))}
        </div>
      </div>
    </Container>
  );
};
