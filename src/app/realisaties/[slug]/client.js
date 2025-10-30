"use client";

import { RealisationLightbox } from "@/components/molecules/realisaties/lightbox";
import { useMemo, useState } from "react";

export default function RealisationClient({ lightbox }) {
  const [amount, setAmount] = useState(3);
  const maxLength = lightbox?.[0]?.image.length;

  const images = useMemo(() => {
    return lightbox?.[0]?.image.slice(0, amount);
  }, [amount, lightbox]);

  return (
    <RealisationLightbox
      lightbox={images.map((image) => ({ ...image, src: image.url }))}
      setAmount={setAmount}
      showMore={amount < maxLength}
    />
  );
}
