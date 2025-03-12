"use client";

import clsx from "clsx";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text/text.component";
import RichText from "@/components/atoms/text/rich-text.component";

export const Hero = ({
  title,
  description,
  bold = false,
  align = "left",
  size = "small",
  image,
}) => {
  return (
    <Container
      style={{ backgroundImage: `url(${image?.[0].url})` }}
      className={clsx(
        "bg-cover flex rounded-md overflow-hidden",
        `bg-cover bg-no-repeat bg-center`,
        image &&
          "before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black/0 before:to-black/50 before:z-[5]",
        size === "small"
          ? "aspect-video md:aspect-[16/4]"
          : size === "medium"
            ? "aspect-video md:aspect-[16/6]"
            : "aspect-video",
        align === "left" ? "justify-start items-end" : "justify-end items-end",
      )}
    >
      <div
        className={`z-10 p-10 ${bold ? "md:max-w-[55%]" : "md:max-w-[45%]"}`}
      >
        {title && (
          <Text
            as="h2"
            level="4xl"
            classnames={clsx(
              image ? "text-white" : "text-primary-500",
              bold ? "font-bold" : "font-medium",
              align === "left" ? "text-left" : "text-right",
            )}
          >
            {title}
          </Text>
        )}
        {description && (
          <RichText
            text={description}
            as="p"
            level="md"
            classnames={clsx(
              image ? "text-white" : "text-primary-500",
              align === "left" ? "text-left" : "text-right",
            )}
          />
        )}
      </div>
    </Container>
  );
};
