"use client";

import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";
import RichText from "@/components/atoms/text/rich-text.component";

export const Content = ({
  title,
  description,
  bold = false,
  align = "left",
  image,
}) => {
  return (
    <div
      className={`z-10 md:px-10 md:mb-2 ${bold ? "md:max-w-[55%]" : "md:max-w-[45%]"}`}
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
  );
};
