"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Container } from "@/components/atoms/container";
import clsx from "clsx";
import Image from "@/utils/Image";
import { useState } from "react";

export const RealisationLightbox = ({ lightbox }) => {
  const [index, setIndex] = useState(-1);

  const slides = lightbox?.[0]?.image.map((image) => {
    return {
      id: image?.id,
      src: image?.url,
      width: image?.width,
      height: image?.height,
    };
  });

  return (
    <Container className="grid md:grid-cols-12" id="lightbox">
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />

      <div
        className={clsx(
          "flex flex-col justify-center pb-10 md:pb-20",
          "md:col-span-10 md:col-start-2",
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {slides.length > 0 &&
            slides.map((image, index) => (
              <div key={image.id} onClick={() => setIndex(index)}>
                <Image
                  key={image?.id}
                  src={image?.src}
                  width={image?.width}
                  height={image?.height}
                  alt={image?.alt || ""}
                  classnames="cursor-pointer object-cover aspect-square rounded-md"
                />
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};
