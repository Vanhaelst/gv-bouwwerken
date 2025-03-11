import { Container } from "@/components/atoms/container";
import clsx from "clsx";
import Image from "@/utils/Image";

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
          {realisations.map((realisation) => (
            <Image {...realisation} classnames="object-cover aspect-square" />
          ))}
        </div>
      </div>
    </Container>
  );
};
