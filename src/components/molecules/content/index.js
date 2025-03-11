import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text/text.component";
import clsx from "clsx";
import Image from "@/utils/Image";
import { Button } from "@/components/atoms/button";

export const Content = ({ title, description, reversed, buttons = [] }) => {
  return (
    <Container className="grid md:grid-cols-12 my-10 md:my-24">
      <div
        className={clsx(
          "order-2",
          "flex flex-col justify-center",
          reversed
            ? "md:col-span-5 md:col-start-7 md:order-2"
            : "md:col-span-5 md:col-start-2 md:order-1",
        )}
      >
        {title && (
          <Text
            as="h2"
            level="3xl"
            classnames={clsx("mb-6 text-primary-500 font-medium")}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text as="p" level="md" classnames={clsx("mb-6")}>
            {description}
          </Text>
        )}
        {buttons.length ? (
          <div className="space-x-3 mt-4">
            {buttons.map((button) => (
              <Button key={button.id} {...button}>
                {button.cta}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
      <Image
        src={"/test.png"}
        width={500}
        height={500}
        alt={""}
        classnames={clsx(
          "order-1 mb-8 aspect-[9/12] object-cover",
          reversed
            ? "md:col-span-4 md:col-start-2 md:order-1"
            : "md:col-span-4 md:col-start-8 md:order-2",
        )}
      />
    </Container>
  );
};
