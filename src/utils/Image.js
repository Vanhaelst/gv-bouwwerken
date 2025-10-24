"use client";

import fallback from "../../public/fallback-image.png";
import Image from "next/image";
import { useState } from "react";

function ImageWithFallback({ src, alt, width, height, classnames }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      src={imageError ? fallback : src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImageError(true)}
      className={classnames}
    />
  );
}

export default ImageWithFallback;
