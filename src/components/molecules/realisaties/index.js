import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";
import { Button } from "@/components/atoms/button";
import Image from "@/utils/Image";
import { Container } from "@/components/atoms/container";

export const Realisation = () => {
  return (
    <section className="bg-gray-200 py-26 md:py-32">
      <Container>
        <Text
          as="h2"
          level="3xl"
          classnames={clsx(
            "text-center mb-10 md:mb-16 text-primary-500 font-medium",
          )}
        >
          Onze realisaties
        </Text>

        <div className="grid md:grid-cols-2 md:gap-4">
          <Image
            src={"/test.png"}
            width={500}
            height={500}
            alt={""}
            classnames={clsx("w-full aspect-square object-cover")}
          />
          <Image
            src={"/test.png"}
            width={500}
            height={500}
            alt={""}
            classnames={clsx("w-full aspect-square object-cover")}
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" color="primary">
            Ontdek meer
          </Button>
        </div>
      </Container>
    </section>
  );
};
