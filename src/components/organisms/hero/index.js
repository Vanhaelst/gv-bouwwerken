"use client";

import clsx from "clsx";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text/text.component";

export const Hero = ({
  title,
  description,
  bold = false,
  align = "left",
  size = "small",
}) => {
  return (
    <Container
      className={clsx(
        "mt-10 bg-cover flex rounded-md overflow-hidden",
        "bg-[url('/hero.png')] bg-cover bg-no-repeat bg-center",
        "before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black/0 before:to-black/50 before:z-[5]",
        size === "small"
          ? "aspect-[16/4]"
          : size === "medium"
            ? "aspect-[16/6]"
            : "aspect-video",
        align === "left" ? "justify-start items-end" : "justify-end items-end",
      )}
    >
      <div className="z-10 p-10 max-w-[45%]">
        {title && (
          <Text
            as="h2"
            level="4xl"
            classnames={clsx(
              "text-white ",
              bold ? "font-bold" : "font-medium",
              align === "left" ? "text-left" : "text-right",
            )}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            as="p"
            level="md"
            classnames={clsx(
              "text-white",
              align === "left" ? "text-left" : "text-right",
            )}
          >
            {description}
          </Text>
        )}
      </div>
    </Container>
  );
};
