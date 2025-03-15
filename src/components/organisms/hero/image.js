"use client";

import clsx from "clsx";
import { Container } from "@/components/atoms/container";
import { Content } from "@/components/organisms/hero/content";
import Breadcrumbs from "@/components/molecules/breadcrumbs";

export const HeroImage = ({
  title,
  description,
  bold = false,
  align = "left",
  size = "small",
  image,
  breadcrumbs,
}) => {
  return (
    <Container
      style={{ backgroundImage: `url(${image?.[0].url})` }}
      className={clsx(
        "bg-cover flex rounded-md overflow-hidden",
        `bg-cover bg-no-repeat bg-center`,
        image &&
          "before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black/0 before:to-black/50 before:z-[5]",
        size === "xsmall" && "mt-20",
        size === "small" && "aspect-video md:aspect-[16/4] py-10",
        size === "medium" && "aspect-video md:aspect-[16/6]",
        size === "large" && "aspect-video",
        align === "left"
          ? "justify-end items-start flex-col"
          : "justify-end items-end",
      )}
    >
      <Content
        title={title}
        description={description}
        bold={bold}
        align={align}
        image={!!image}
      />
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} image={!!image} />}
    </Container>
  );
};
