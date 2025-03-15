"use client";

import { HeroImage } from "@/components/organisms/hero/image";
import { HeroVideo } from "@/components/organisms/hero/video";

export const Hero = (props) => {
  if (props.video) {
    return <HeroVideo {...props} />;
  }
  return <HeroImage {...props} />;
};
