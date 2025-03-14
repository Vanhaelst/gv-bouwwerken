"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";
import { Button } from "@/components/atoms/button";
import Image from "@/utils/Image";
import { Container } from "@/components/atoms/container";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#709EB9" }}
      onClick={onClick}
    >
      <ChevronRightIcon
        aria-hidden="true"
        className={`size-5 mr-4 ml-2 group-hover:ml-0 transition-all`}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#709EB9" }}
      onClick={onClick}
    >
      <ChevronLeftIcon
        aria-hidden="true"
        className={`size-5 mr-4 ml-2 group-hover:ml-0 transition-all`}
      />
    </div>
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const Realisation = ({ title, realisations = [] }) => {
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
          {title}
        </Text>

        <Slider {...settings}>
          {realisations.map(({ id, heading, image }) => {
            return (
              <Image
                key={id}
                src={image[0].url}
                width={image[0].width}
                height={image[0].height}
                alt={image[0].alt || heading}
                classnames={clsx("w-full aspect-square object-cover")}
              />
            );
          })}
        </Slider>

        <div className="flex justify-center mt-10">
          <Button variant="outline" color="primary" href="/realisaties">
            Ontdek meer
          </Button>
        </div>
      </Container>
    </section>
  );
};
