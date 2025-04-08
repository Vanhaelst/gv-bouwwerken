"use client";

import clsx from "clsx";
import { Container } from "@/components/atoms/container";
import { Content } from "@/components/organisms/hero/content";

export const HeroVideo = ({
  title,
  description,
  bold = false,
  align = "left",
  size = "small",
  image,
  video,
}) => {
  return (
    <Container
      className={clsx(
        "bg-cover flex rounded-md overflow-hidden",
        "bg-cover bg-no-repeat bg-center",
        "before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black/0 before:to-black/50 before:z-[5]",
        size === "xsmall" && "mt-20",
        size === "small" && "aspect-video md:aspect-[16/4]",
        size === "medium" && "aspect-video md:aspect-[16/6]",
        size === "large" && "aspect-video",
        align === "left" ? "justify-start items-end" : "justify-end items-end",
      )}
    >
      <div className="absolute left-0 top-0 w-full h-full">
        <div
          className={`overlay z-10 w-full h-full relative bg-primary-500/25`}
        />
        <iframe
          src={`${video}&autoplay=1&loop=1&autopause=0&background=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="video"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
          title="Bouwwerken GV"
        />
      </div>
      <Content
        title={title}
        description={description}
        bold={bold}
        align={align}
        image={!!image}
      />
    </Container>
  );
};
