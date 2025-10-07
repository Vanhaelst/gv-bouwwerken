import { Container } from "@/components/atoms/container";
import clsx from "clsx";
import Image from "@/utils/Image";
import Link from "next/link";
import { Text } from "@/components/atoms/text/text.component";

export const RealisationsOverview = ({ realisations }) => {
  return (
    <Container className="grid md:grid-cols-12">
      <div
        className={clsx(
          "flex flex-col justify-center pt-10 pb-10 md:pb-20",
          "md:col-span-10 md:col-start-2",
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {realisations.length > 0 &&
            realisations.map((realisation) => {
              return (
                <Link
                  key={realisation.id}
                  href={`/${realisation.uri}`}
                  className="group relative overflow-hidden"
                >
                  <div
                    className={clsx(
                      "aspect-square flex rounded-md overflow-hidden",
                      `bg-cover bg-no-repeat bg-center group`,
                    )}
                  >
                    <Image
                      key={realisation.id}
                      src={realisation.image[0].url}
                      width={realisation.image[0].width}
                      height={realisation.image[0].height}
                      alt={realisation.image[0].alt || ""}
                      classnames="object-cover aspect-square rounded-md transition-all duration-700 hover:scale-105"
                    />
                    <Text
                      level="md"
                      classnames="absolute bottom-[10px] left-[10px] bg-(--transparent-white) px-5 py-2 rounded-md group-hover:-bottom-20 transition-all duration-500"
                    >
                      {realisation.heading}
                    </Text>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Container>
  );
};
