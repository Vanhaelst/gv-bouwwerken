"use client";

import { motion, AnimatePresence } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Container } from "@/components/atoms/container";
import clsx from "clsx";
import Image from "@/utils/Image";
import React, { useState } from "react";
import { Button } from "@/components/atoms/button";

export const RealisationLightbox = ({ lightbox, setAmount, showMore }) => {
  const [index, setIndex] = useState(-1);

  const handleClick = () => {
    setAmount((prevState) => prevState + 3);
  };

  return (
    <Container className="grid md:grid-cols-12" id="lightbox">
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={lightbox}
      />

      <div
        className={clsx(
          "relative flex flex-col justify-center pb-10 md:pb-20",
          "md:col-span-10 md:col-start-2",
        )}
      >
        <AnimatePresence>
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className=""
          >
            <div
              className={clsx(
                "grid grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-250",
              )}
            >
              {lightbox.length > 0 &&
                lightbox.map((image, index) => {
                  return (
                    <div
                      key={image.id}
                      onClick={() => setIndex(index)}
                      className="transition-all duration-250 opacity-100"
                    >
                      <Image
                        key={image?.id}
                        src={image?.url}
                        width={image?.width}
                        height={image?.height}
                        alt={image?.alt || ""}
                        classnames="cursor-pointer object-cover aspect-square rounded-md"
                      />
                    </div>
                  );
                })}
            </div>
          </motion.div>
        </AnimatePresence>
        {showMore ? (
          <div className="w-full flex justify-center mt-12">
            <Button
              variant="outline"
              color="primary"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              Toon meer afbeeldingen
            </Button>
          </div>
        ) : null}
      </div>
    </Container>
  );
};
